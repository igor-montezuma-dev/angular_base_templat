import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveSolicitationsComponent } from './approve-solicitations.component';

describe('ApproveSolicitationsComponent', () => {
  let component: ApproveSolicitationsComponent;
  let fixture: ComponentFixture<ApproveSolicitationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproveSolicitationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproveSolicitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
