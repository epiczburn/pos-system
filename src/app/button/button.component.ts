import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  reportBtnHidden : boolean
  storeBtnHidden : boolean
  cameraBtnHidden : boolean
  lineBtnHidden : boolean
  companyBtnHidden : boolean
  userBtnHidden : boolean

  constructor(){}

  ngOnInit(): void {
    this.setButtonVisibility()
  }
  
  setButtonVisibility(){
    var userRole = localStorage.getItem('user-role') ? localStorage.getItem('user-role') : null
    switch(userRole){
      case 'manager': 
        this.companyBtnHidden = true
        this.userBtnHidden = true
        break
      case 'user': 
        this.reportBtnHidden = true
        this.storeBtnHidden = true
        this.lineBtnHidden = true
        this.companyBtnHidden = true
        this.userBtnHidden = true
        break
    }
  }

}
