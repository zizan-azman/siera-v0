import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarMegaComponent } from './navbar-mega.component';

describe('NavbarMegaComponent', () => {
  let component: NavbarMegaComponent;
  let fixture: ComponentFixture<NavbarMegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarMegaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarMegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
