import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { removeAuthToken } from 'src/utils/helpers/helpers';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
})
export class MenuLateralComponent {
  constructor(private router: Router){

  }
  public removerToken() {
    removeAuthToken();
    this.router.navigate(['/login']);

  }
}
