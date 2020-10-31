import { Component } from '@angular/core';
import { UtilService } from './services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'megatecno';

  /**
   *
   */
  constructor(public util: UtilService) {
    this.util.sideNavState = true;
    
  }
}
