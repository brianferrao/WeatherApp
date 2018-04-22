import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display Weather App title ', () => {
      component.title = 'Weather App';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.navbar-brand').innerText).toEqual('Weather App');
  });

  it('should have router link to /', () => {
      const des = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
      const index = des.findIndex(de => de.properties['href'] === '/');
      expect(index).toBeGreaterThan(-1);
  });

  it('should have router link to /extended', () => {
      const des = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
      const index = des.findIndex(de => de.properties['href'] === '/extended');
      expect(index).toBeGreaterThan(-1);
  });
});
