import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParieursComponent } from './parieurs.component';

describe('ParieursComponent', () => {
  let component: ParieursComponent;
  let fixture: ComponentFixture<ParieursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParieursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParieursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
