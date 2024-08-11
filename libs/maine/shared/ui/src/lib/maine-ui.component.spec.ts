import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaineUiComponent } from './maine-ui.component';

describe('MaineUiComponent', () => {
  let component: MaineUiComponent;
  let fixture: ComponentFixture<MaineUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaineUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaineUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
