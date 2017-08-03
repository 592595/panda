import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { NotePage } from '../pages/note/note';
import { PicturePage } from '../pages/picture/picture';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SettingPage } from '../pages/setting/setting';
import { MemoryPage } from '../pages/memory/memory';
import { TreePage } from '../pages/tree/tree';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    NotePage,
    PicturePage,
    MemoryPage,
    TreePage,
    TabsPage,
    LoginPage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotePage,
    PicturePage,
    MemoryPage,
    TreePage,
    TabsPage,
    LoginPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
