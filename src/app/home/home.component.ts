import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { SideImageControllerService } from '../core/services/side-image-controller.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentBackground$ = new BehaviorSubject<string>('assets/svg/side-image.svg');
  public image$: Observable<string>;
  // constructor(private router: Router) {
  //   this.router.events
  //     .pipe(filter((e: Event): e is any => e instanceof RouterEvent))
  //     .subscribe((e: RouterEvent) => {
  //       this.changeBackground(e.url);
  //     });
  // }
  constructor(
    private sideImageService: SideImageControllerService,

  ) {
    this.image$ = this.sideImageService.image$.pipe(takeUntilDestroyed());
  }

  ngOnInit(): void {


    this.changeBackground(window.location.pathname);
  }

  changeBackground(url: string) {
    switch (url) {
      case '/home/login':
        this.currentBackground$.next('assets/svg/side-image.svg');
        break;
      case '/home/recuperar-senha':
        this.currentBackground$.next('assets/svg/side-image.svg');
        break;
      case '/home/resetar-senha':
        this.currentBackground$.next('assets/svg/side-image.svg');
    }
  }
}
