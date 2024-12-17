import { Component, OnInit } from '@angular/core';
import { EventsService } from '../event.service';
import { Event } from 'src/app/model/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: Event[] = [];
  editAddPopupVisible: boolean = false;
  toastVisible: boolean = false;
  selectedEvent: Event | null = null;
  toastMessage: string = '';

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventsService.getEvents().subscribe(
      (data: Event[]) => {
        this.events = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des événements:', error);
      }
    );
  }

  openAddPopup(): void {
    this.selectedEvent = null;
    this.editAddPopupVisible = true;
  }

  openEditPopup(event: Event): void {
    this.selectedEvent = { ...event };
    this.editAddPopupVisible = true;
  }

  closePopup(): void {
    this.editAddPopupVisible = false;
  }

  onEventAdded(event: Event): void {
    this.eventsService.addEvent(event).subscribe(
      (newEvent: Event) => {
        this.events.push(newEvent);
        this.showToast('Événement ajouté avec succès');
        this.closePopup();
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'événement:', error);
      }
    );
  }

  onEventEdited(event: Event): void {
    this.eventsService.updateEvent(event).subscribe(
      (updatedEvent: Event) => {
        const index = this.events.findIndex((p) => p.id === updatedEvent.id);
        if (index !== -1) {
          this.events[index] = updatedEvent;
        }
        this.showToast('Événement modifié avec succès');
        this.closePopup();
      },
      (error) => {
        console.error('Erreur lors de la modification de l’événement:', error);
      }
    );
  }

  onExporting(event: any): void {
    event.component.beginUpdate();
    event.component.option('export.fileName', 'EventDataGrid_Customized'); // Définir le nom du fichier exporté
    event.component.endUpdate();
  }
  

  onGridOptionChanged(event: any): void {
    if (event.fullName === 'paging.pageSize') {
      this.showToast(`La taille de la page a changé : ${event.value}`);
    }
  }

  showToast(message: string): void {
    this.toastMessage = message;
    this.toastVisible = true;
    setTimeout(() => (this.toastVisible = false), 3000);
  }
}
