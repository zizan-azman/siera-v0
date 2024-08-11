import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkDefaultComponent } from './link-default.component';

describe('LinkDefaultComponent', () => {
  let component: LinkDefaultComponent;
  let fixture: ComponentFixture<LinkDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkDefaultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
