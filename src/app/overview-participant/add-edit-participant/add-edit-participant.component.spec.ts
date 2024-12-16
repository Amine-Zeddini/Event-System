import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditParticipantComponent } from './add-edit-participant.component';

describe('AddEditParticipantComponent', () => {
  let component: AddEditParticipantComponent;
  let fixture: ComponentFixture<AddEditParticipantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditParticipantComponent]
    });
    fixture = TestBed.createComponent(AddEditParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
