create-component.ts
---------------------------------------------
employees:any
employee:any
id:any;
constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
  }


registerForm =new FormGroup(

  {
    firstName: new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    confirmPassword: new FormControl('')

  
  }
)


  onSubmit(){
    const body = {
      firstName: this.registerForm.get('firstName').value,
      lastName: this.registerForm.get('lastName').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value,
      confirmPassword: this.registerForm.get('confirmPassword').value

    }

    this.employeeService.createEmployee(body).subscribe( data =>{
      console.log(data);
     
    },
    error => console.log(error));
  }
-----------------------------------------------------------------------------------------------
getEmployee list
-----------------------------------------------------------------------------------------------
  ngOnInit() {
    this.getEmployees();
  }

 getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
      console.log("------------", this.employees);
    });
  }
-----------------------------------------------------------------------------------------------
getEmployee single Detail
-----------------------------------------------------------------------------------------------
 getEmployeeDetail(id:number){

    this.employeService.getEmployeeById(id).subscribe( data => {
      this.employee = data;
      console.log("----------",this.employee)
}
------------------------------------------------------------------------------------------------

update
----------------------------------------------------------------------------

id:any;
constructor(private route: ActivatedRoute, private employeeService: EmployeeService,
  private router: Router) { }

ngOnInit() {

  this.id = this.route.snapshot.params['id'];

  this.employeeService.getEmployeeById(this.id).subscribe(data => {

    this.registerForm.setValue({
      firstName: data.firstName,
      lastName : data.lastName,
      email : data.email,
      password : data.password,
      confirmPassword: data.confirmPassword
  
    })

  },  error => console.log(error));


}
saveEmployee(){

  const body = {
    firstName: this.registerForm.get('firstName').value,
    lastName: this.registerForm.get('lastName').value,
    email: this.registerForm.get('email').value,
    password: this.registerForm.get('password').value,
    confirmPassword: this.registerForm.get('confirmPassword').value,

  }


if(this.id){

//use update code


}else{
this.employeeService.createEmployee(body).subscribe( data =>{
  console.log(data);
 
},
error => console.log(error));

}

  
  
}