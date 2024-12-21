import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommomTableComponent } from './commom-table.component';

describe('CommomTableComponent', () => {
  let component: CommomTableComponent;
  let fixture: ComponentFixture<CommomTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommomTableComponent]
    });
    fixture = TestBed.createComponent(CommomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
