import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor(public menuCtrl : MenuController, public navCrtl: NavController) { }

  ngOnInit() {
  }
  menu(){
    this.menuCtrl.toggle();
  }
  lol(){
    this.navCrtl.navigateForward("page1");
   }
  mk(){
    this.navCrtl.navigateForward("page2");
    
  }
  ff(){
    this.navCrtl.navigateForward("page3");
    
  }
  ps5(){
    this.navCrtl.navigateForward("page4");
    
  }
  jf(){
    this.navCrtl.navigateForward("page5");
    
  }
 }
