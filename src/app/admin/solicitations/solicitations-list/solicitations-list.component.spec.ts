import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationsListComponent } from './solicitations-list.component';

describe('SolicitationsListComponent', () => {
  let component: SolicitationsListComponent;
  let fixture: ComponentFixture<SolicitationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitationsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
