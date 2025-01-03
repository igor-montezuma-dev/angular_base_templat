import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsListComponent } from './tournaments-list.component';

describe('TournamentsListComponent', () => {
  let component: TournamentsListComponent;
  let fixture: ComponentFixture<TournamentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournamentsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TournamentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
