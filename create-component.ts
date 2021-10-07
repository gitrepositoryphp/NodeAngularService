create-component.ts
---------------------------------------------
employees:any
employee:any
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

