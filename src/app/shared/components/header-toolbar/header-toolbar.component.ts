import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-toolbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatMenuModule, RouterModule],
  templateUrl: './header-toolbar.component.html',
  styleUrl: './header-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderToolbarComponent {
  public router: string = window.location.href.includes('/gerencial')
    ? '/home/login-gerencial'
    : '/home/login-admin';
}
