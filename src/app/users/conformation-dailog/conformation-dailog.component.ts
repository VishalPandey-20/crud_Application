import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conformation-dailog',
  templateUrl: './conformation-dailog.component.html',
  styleUrls: ['./conformation-dailog.component.css']
})
export class ConformationDailogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConformationDailogComponent>, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  isTrue: boolean = false
  clickedHandler() {
    this._snackBar.open("user delete successfully..!")
    this.router.navigateByUrl("allusers")
    this.isTrue = true;
  }
}
