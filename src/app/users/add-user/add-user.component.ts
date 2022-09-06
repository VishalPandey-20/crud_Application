import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup = new FormGroup({});
  constructor(
    private fromBuilder: FormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addUserForm = this.fromBuilder.group({
      "name": new FormControl('', [Validators.required, Validators.minLength(3)]),
      "email": new FormControl('', [Validators.required, Validators.email]),
      "phone": new FormControl('', [Validators.required, Validators.maxLength(10)]),
      "userName": new FormControl('', [Validators.required])
    })
  }

  createUser() {
    // console.log(this.addUserForm.value);
    this.userService.addUser(this.addUserForm.value).subscribe(data => {
      this._snackBar.open("user created successfully..!");
      setTimeout(() => {
        this.router.navigateByUrl("/")
      }, 1000)
    })
  }
}
