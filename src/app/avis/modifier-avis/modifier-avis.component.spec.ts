import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAvisComponent } from './modifier-avis.component';

describe('ModifierAvisComponent', () => {
  let component: ModifierAvisComponent;
  let fixture: ComponentFixture<ModifierAvisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierAvisComponent]
    });
    fixture = TestBed.createComponent(ModifierAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
