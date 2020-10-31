import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public sideNavState: boolean;

  constructor() { }

  //abrir y cerrar el menú lateral
  public changeNavState() {
    this.sideNavState = !this.sideNavState;
    var state = {
      state: this.sideNavState
    }
  }
}
