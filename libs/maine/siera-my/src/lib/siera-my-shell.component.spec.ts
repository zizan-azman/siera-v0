import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SieraMyShellComponent } from './siera-my-shell.component';

describe('SieraMyShellComponent', () => {
  let component: SieraMyShellComponent;
  let fixture: ComponentFixture<SieraMyShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SieraMyShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SieraMyShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
