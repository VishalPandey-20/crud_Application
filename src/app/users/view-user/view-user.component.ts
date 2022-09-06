import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  userId: string = " ";
  userDetails: any;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      console.log("datadatadata", data);

      this.userId = data.id;
    })
    this.userService.ViewUserDetails(this.userId).subscribe(data => {
      console.log(data);
      this.userDetails = data;
    })
  }

}
