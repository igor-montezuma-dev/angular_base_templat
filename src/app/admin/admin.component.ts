import { Component } from '@angular/core';
import { NavbarComponent, SidebarLink } from '../shared/components/navbar/navbar.component';



@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NavbarComponent],
  template: '<app-navbar [sidenavLinks]="links" [useNavbar]="true"></app-navbar>',
})
export class AdminComponent {
  links: SidebarLink[] = [
    { text: 'Dashboard', link: 'dashboard' },
    { text: 'Usuários', link: 'jogadores' },
    { text: 'Financeiro', link: 'financeiro' },

    { text: 'Configurações', link: 'configuracoes' },
  ];
}
