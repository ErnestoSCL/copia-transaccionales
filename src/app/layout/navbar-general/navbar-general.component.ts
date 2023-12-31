import { Component, inject } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-navbar-general',
  templateUrl: './navbar-general.component.html',
  styleUrls: ['./navbar-general.component.css']
})
export class NavbarGeneralComponent {
  readonly authenticationService = inject(AuthenticationService)

  get Name() {
    return this.authenticationService.authenticatedUser.value?.nombre ?? 'Invitado'
  }

  logout(){
    this.authenticationService.logout();
  }

}
