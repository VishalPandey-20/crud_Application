import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalManager } from 'ngb-modal';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private modalService:ModalManager) { }
  baseUrl: string = "https://jsonplaceholder.typicode.com/";
  listUsers() {
    return this.http.get(this.baseUrl + "users")
  }

  ViewUserDetails(Id: string) {
    return this.http.get(this.baseUrl + "users/" + Id);
  }

  addUser(userObj: any) {
    return this.http.post(this.baseUrl + "users", userObj);
  }
  deleteUser(id: string) {
    return this.http.delete(this.baseUrl + "users/" + id);
  }
  updateUser(id: string, userObj: any) {
    return this.http.put(this.baseUrl + "users/" + id, userObj)
  }

  public confirm(
    title: string,
    message: string,
    btnOkText: string,
    btnCencleText: string,
    dialogSize: 'sm' | 'lg' = 'sm'
  ) {
  }

}
