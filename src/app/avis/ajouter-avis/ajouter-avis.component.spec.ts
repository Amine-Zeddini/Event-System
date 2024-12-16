import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAvisComponent } from './ajouter-avis.component';

describe('AjouterAvisComponent', () => {
  let component: AjouterAvisComponent;
  let fixture: ComponentFixture<AjouterAvisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterAvisComponent]
    });
    fixture = TestBed.createComponent(AjouterAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
