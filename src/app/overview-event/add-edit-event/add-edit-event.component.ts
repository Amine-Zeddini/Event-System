import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from 'src/app/model/event';

@Component({
  selector: 'app-add-edit-event',
  templateUrl: './add-edit-event.component.html',
  styleUrls: ['./add-edit-event.component.css']
})
export class AddEditEventComponent implements OnInit {
  @Input() editAddPopupVisible: boolean = false;
  @Input() eventToEdit: Event | null = null;
  @Output() eventAdded = new EventEmitter<Event>();
  @Output() eventEdited = new EventEmitter<Event>();
  @Output() closePopup = new EventEmitter<void>();

  newEvent: Event = this.resetForm();
  isEditMode: boolean = false;

  ngOnInit(): void {
    if (this.eventToEdit) {
      this.isEditMode = true;
      this.newEvent = { ...this.eventToEdit };
    } else {
      this.isEditMode = false;
    }
  }

  resetForm(): Event {
    return {
      id: '',
      title: '',
      description: '',
      LocalDateTime: new Date(),
      location: '',
      organizer: '',
      capacity: '0',
      isOnline: false
    };
  }

  close(): void {
    this.editAddPopupVisible = false;
    this.closePopup.emit();
  }

  submitForm(): void {
    if (this.isEditMode) {
      this.eventEdited.emit(this.newEvent);
    } else {
      this.eventAdded.emit(this.newEvent);
    }
    this.close();
  }
}