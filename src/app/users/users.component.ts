import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { User, EditUser } from './services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  selectedUsers: User[];

  user: User;

  usersForSearch: User[];

  loading: boolean = true;

  userDialog: boolean;

  submitted: boolean;

  isNew: boolean = false

  isClickFromEdit = false

  constructor(private apiService: ApiService, private router: Router){
    var userRole = localStorage.getItem('user-role') ? localStorage.getItem('user-role') : null
    if(!userRole || userRole == 'user' || userRole == 'manager'){
      this.router.navigate([''])
    }
  }

  ngOnInit(): void {
    this.getItem()
  }

  getItem() {
    this.apiService.Users().subscribe((res: any)=>{
      if(res.success) {
          this.users = res.data
          this.usersForSearch = res.data
          this.loading = false
          console.log(this.users)
          
      } else  {
          alert(res.data)
      }
    })
  }

  openNew() {
    this.user = {}
    this.user.role = {}
    this.user.company = {}
    this.isNew = true
    this.userDialog = true
    this.submitted = true
    this.isClickFromEdit = false;
  }
  
  edit(user: User) {
    this.user = { ...user };
    this.userDialog = true;
    this.isClickFromEdit = true;
  }

  hideDialog() {
    this.isNew = false
    this.userDialog = false;
    this.submitted = false;
    this.isClickFromEdit = false;
  }

  save() {
    if (this.isNew === true) {
      this.user['roleId'] = Number(this.user.role.name)
      this.user['companyId'] = Number(this.user.company.name)
      delete this.user.role
      delete this.user.company
      console.log('!!!this.user -> ' + JSON.stringify(this.user))
      this.apiService.insertUser(this.user).subscribe((res: any) => {
        if (res.success) {
          console.log(res.data)
          alert('สร้าง User สำเร็จ!')
          this.getItem()
          this.hideDialog()
        } else {
          alert(res.data)
        }
      })
    } 
    else {
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

  onSearchUsers(event: any){
    this.usersForSearch = this.users
    var searchUserCompanyOrName = event.target.value
    if(searchUserCompanyOrName){
      this.usersForSearch = this.usersForSearch.filter(item => (item.username.includes(searchUserCompanyOrName)) || 
      (item.company.name.includes(searchUserCompanyOrName)) || (item.role.name.includes(searchUserCompanyOrName)));
    }
  }

}
