import { Component, Input, OnInit, Output } from '@angular/core';
import { UserService } from './../../services/user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConformationDailogComponent } from '../conformation-dailog/conformation-dailog.component';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  listUsers: any
  sendDataInToChild: any;
  constructor(private UserService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.UserService.listUsers().subscribe(data => {
      this.listUsers = data;
      console.log("11111111111111", data);

      this.sendDataInToChild = data
    })
    // console.log(this.UserService.listUsers());
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ConformationDailogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
