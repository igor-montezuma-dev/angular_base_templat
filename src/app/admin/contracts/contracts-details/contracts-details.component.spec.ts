import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsDetailsComponent } from './contracts-details.component';

describe('ContractsDetailsComponent', () => {
  let component: ContractsDetailsComponent;
  let fixture: ComponentFixture<ContractsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
