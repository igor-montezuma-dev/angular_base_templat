import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { HeaderToolbarComponent } from '../header-toolbar/header-toolbar.component';
import { SidebarLink } from '../navbar/navbar.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';


@Component({
  selector: 'app-gerencial-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ToolbarComponent,
    HeaderToolbarComponent
  ],
  templateUrl: './gerencial-nav-bar.component.html',
  styleUrl: './gerencial-nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GerencialNavBarComponent {
  panelOpenState = false;
  @Input() sidenavLinks: SidebarLink[] = [];
  @Input() useNavbar: boolean = true;
  @Input() useImage: boolean = true;
  @Input() logOutNavigate: string = '/home';
  @Input() hasSideScroll: boolean = false;
  @Input() width!: string;

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
