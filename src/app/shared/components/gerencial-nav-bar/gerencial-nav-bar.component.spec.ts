import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerencialNavBarComponent } from './gerencial-nav-bar.component';

describe('GerencialNavBarComponent', () => {
  let component: GerencialNavBarComponent;
  let fixture: ComponentFixture<GerencialNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerencialNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerencialNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
