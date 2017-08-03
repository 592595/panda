import { Component } from '@angular/core';

import { NotePage } from '../note/note';
import { PicturePage } from '../picture/picture';
import { SettingPage } from '../setting/setting';
import { MemoryPage } from '../memory/memory';
import { TreePage } from '../tree/tree';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabRoots: Object[];
  constructor(){
    this.tabRoots=[
      {
        root:NotePage,
        tabTitle:'表白',
        tabIcon:'heart'
      },
      {
        root:PicturePage,
        tabTitle:'相册',
        tabIcon:'image'
      },
      {
        root:MemoryPage,
        tabTitle:'纪念日',
        tabIcon:'rose',
      },
      {
        root:TreePage,
        tabTitle:'许愿树',
        tabIcon:'leaf'
      },
      {
        root:SettingPage,
        tabTitle:'我的',
        tabIcon:'pulse'

      }
    ];
  }
}
