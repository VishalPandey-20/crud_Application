import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId: string = ' ';
  userDetails: any;
  editUserForm: FormGroup = new FormGroup({})
  dataLoaded: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.dataLoaded = false
    // this.userService.ViewUserDetails(this.userId)
    this.activatedRoute.params.subscribe(data => {
      this.userId = data.id;
    });
    if (this.userId !== ' ') {
      console.log(this.userDetails);

      // view user details
      this.userService.ViewUserDetails(this.userId)
        .toPromise()
        .then(data => {
          this.userDetails = data;
          Object.assign(this.userDetails, data);
          console.log(this.userDetails);
          // build the edit froms
          this.editUserForm = this.formBuilder.group({
            "name": new FormControl(this.userDetails.name),
            "email": new FormControl(this.userDetails.email),
            "username": new FormControl(this.userDetails.username),
          })
          this.dataLoaded = true
        }).catch(err => {
          console.log(err);

        })
    }

  }
  editUserData() {
    // console.log(this.editUserForm.value);
    this.userService.updateUser(this.userId, this.editUserForm.value).subscribe(data => {
      this._snackBar.open("userData update successfully..!");
      this.route.navigateByUrl("allusers");
    })
  }

}
