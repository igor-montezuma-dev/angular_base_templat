import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule, Location } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HeaderToolbarComponent } from '../header-toolbar/header-toolbar.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';

export type SidebarLink = {
  icon?: string;
  text: string;
  link: string;
  expandable?: boolean;
  sublinks?: SidebarLink[];
};

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    HeaderToolbarComponent,
    ToolbarComponent

  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  panelOpenState = false;
  @Input() sidenavLinks: SidebarLink[] = [];
  @Input() useNavbar: boolean = true;
  @Input() useImage: boolean = true;
  @Input() logOutNavigate: string = '/home';
  @Input() isExpandable: boolean = false;
  public readonly title = inject(Title);
  private readonly breakpointObserver = inject(BreakpointObserver);
  public readonly location = inject(Location);

  route = inject(ActivatedRoute);
  router = inject(Router);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );

  logOut(): void {
    this.router.navigate([this.logOutNavigate]);
  }
}
