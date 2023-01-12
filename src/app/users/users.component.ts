import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { User } from './services/user';

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

  productDialog: boolean;

  submitted: boolean;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.Users().subscribe((res: any)=>{
      if(res.success) {
          this.users = res.data
          this.loading = false
          
      } else  {
          alert(res.data)
      }
  })
  }
  openNew(){}
  editProduct(user: User) {
    this.user = { ...user };
    this.productDialog = true;
    console.log(user)
}
  
  saveProduct(){}
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
}
