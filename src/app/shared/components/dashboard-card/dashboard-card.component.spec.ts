import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardComponent } from './dashboard-card.component';
import { By } from '@angular/platform-browser';

const mockDashboardProps = {
  icon: 'icon',
  value: 10,
  title: 'title',
};

const getElement = (selector: string, fixture: ComponentFixture<DashboardCardComponent>) =>
  fixture.debugElement.query(By.css(selector)).nativeElement;
describe('DashboardCardComponent', () => {
  let component: DashboardCardComponent;
  let fixture: ComponentFixture<DashboardCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DashboardCardComponent],
    });
    fixture = TestBed.createComponent(DashboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(D) should render (@Input) icon, (@Input) title and (@Input) value on screen', () => {
    const icon = getElement('.icon', fixture);
    const title = getElement('.title', fixture);
    const value = getElement('.value', fixture);

    expect(icon).toBeTruthy();
    expect(title).toBeTruthy();
    expect(value).toBeTruthy();
  });

  it('should update inputs with received data', () => {
    component.icon = mockDashboardProps.icon;
    component.value = mockDashboardProps.value;
    component.title = mockDashboardProps.title;

    expect(component.icon).toBe(mockDashboardProps.icon);
    expect(component.value).toBe(mockDashboardProps.value);
    expect(component.title).toBe(mockDashboardProps.title);
  });

  it('(D) should update screens when data is received', () => {
    const icon = getElement('.icon', fixture) as HTMLImageElement;
    const title = getElement('.title', fixture) as HTMLElement;
    const value = getElement('.value', fixture) as HTMLElement;

    component.icon = mockDashboardProps.icon;
    component.value = mockDashboardProps.value;
    component.title = mockDashboardProps.title;
    fixture.detectChanges();
    expect(icon.getAttribute('src')).toEqual(mockDashboardProps.icon);
    expect(title.textContent).toEqual(mockDashboardProps.title);
    expect(value.textContent?.trim()).toEqual(mockDashboardProps.value.toString());
  });
});
