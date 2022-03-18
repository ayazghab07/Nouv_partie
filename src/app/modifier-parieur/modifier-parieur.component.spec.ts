import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierParieurComponent } from './modifier-parieur.component';

describe('ModifierParieurComponent', () => {
  let component: ModifierParieurComponent;
  let fixture: ComponentFixture<ModifierParieurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierParieurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierParieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
