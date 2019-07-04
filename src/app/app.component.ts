import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navcrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  lol(){
    this.navcrl.navigateForward("page1");
    
  }
  mk(){
    this.navcrl.navigateForward("page2");
    
  }
  ff(){
    this.navcrl.navigateForward("page3");
    
  }
  ps5(){
    this.navcrl.navigateForward("page4");
    
  }
  jf(){
    this.navcrl.navigateForward("page5");
    
  }
}


