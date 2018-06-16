import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../../app.service'
import { log } from 'util';
import { Cookie } from 'ng2-cookies';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  router:Router;
  app: any;
  userLevel: string;
  userName: string;
  userManagementLink: any = {data: { expectedRole: 'NATIONAL'}};
  constructor( router:Router, private appService: AppService) { 
    this.router = router;
    this.app = appService;
  }

  ngOnInit() {
    if(Cookie.check('access_token')){
      var token = JSON.parse(Cookie.get('access_token'));
      this.app.userName = token.username;
    }
    else{
      this.app.userName = "";
    }
    
  }
  //handles nav-links which are going to be shown 
  checkUserAuthorization(route) {

    const expectedRole = route;
    if(Cookie.check('access_token')){
      var token = JSON.parse(Cookie.get('access_token'));
      this.app.userName = token.username;
    }
    if (!this.appService.checkLoggedIn() || token.roles[0] !== expectedRole) {
      return false;
    }
    return true;
  }


  logout(){
    this.appService.logout();
    this.app.userName = "";
  }

}
