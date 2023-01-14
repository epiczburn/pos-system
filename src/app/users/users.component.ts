import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { User, EditUser } from './services/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  selectedUsers: User[];

  user: User;

  loading: boolean = true;

  userDialog: boolean;

  submitted: boolean;

  isNew: boolean = false

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getItem()
  }

  getItem() {
    this.apiService.Users().subscribe((res: any)=>{
      if(res.success) {
          this.users = res.data
          this.loading = false
          
      } else  {
          alert(res.data)
      }
  })
  }


  openNew() {
    this.user = {}
    this.isNew = true
    this.userDialog = true
    this.submitted = true
  }
  
  edit(user: User) {
    this.user = { ...user };
    this.userDialog = true;
  }


  
  hideDialog() {
    this.isNew = false
    this.userDialog = false;
    this.submitted = false;
  }

  save() {
    if (this.isNew === true) {
      this.apiService.insertUser(this.user).subscribe((res: any) => {
        if (res.success) {
          console.log(res.data)
          this.getItem()
          this.hideDialog()
        } else {
          alert(res.data)
        }
      })
    } else {

      let editUser: EditUser = this.user
      this.apiService.updateUser(editUser).subscribe((res: any) => {
        if (res.success) {
          console.log(res.data)
          this.getItem()
          this.hideDialog()
        } else {
          alert(res.data)
        }
      })
    }

  }

}
