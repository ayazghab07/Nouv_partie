import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierParComponent } from './modifier-par.component';

describe('ModifierParComponent', () => {
  let component: ModifierParComponent;
  let fixture: ComponentFixture<ModifierParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierParComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
