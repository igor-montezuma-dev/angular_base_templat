import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovePlayersComponent } from './approve-players.component';

describe('ApprovePlayersComponent', () => {
  let component: ApprovePlayersComponent;
  let fixture: ComponentFixture<ApprovePlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovePlayersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprovePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
