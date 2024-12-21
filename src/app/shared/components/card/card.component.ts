import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `<section class="shadow-md p-3  text-black rounded-xl  min-h-max mb-5">
    <ng-content></ng-content>
  </section> `,
})
export class CardComponent {}
