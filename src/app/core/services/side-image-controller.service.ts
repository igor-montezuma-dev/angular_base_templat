import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideImageControllerService {
  public image$: BehaviorSubject<string> = new BehaviorSubject<string>('assets/svg/side-image.svg');

  public setImage(imageSource: string = 'assets/svg/side-image.svg'): void {
    Promise.resolve().then(() => {this.image$.next(imageSource)});
  }
}
