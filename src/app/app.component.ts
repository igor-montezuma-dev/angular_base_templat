import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { SideImageControllerService } from './core/services/side-image-controller.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  currentBackground$ = new BehaviorSubject<string>('assets/svg/login-image.svg');
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

  ngOnInit(): void {}

  changeBackground(url: string) {
    switch (url) {
      case '/home/login':
        this.currentBackground$.next('assets/svg/login-image.svg');
        break;
      case '/home/recuperar-senha':
        this.currentBackground$.next('assets/svg/password.svg');
        break;
      case '/home/resetar-senha':
        this.currentBackground$.next('assets/svg/password.svg');
    }
  }
}
