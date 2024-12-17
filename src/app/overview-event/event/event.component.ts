import { Component, OnInit, ViewChild } from '@angular/core';
import { EventsService } from '../event.service';
import { Event } from 'src/app/model/event';
import * as XLSX from 'xlsx'; // Importer la bibliothèque xlsx

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

  @ViewChild('dataGrid') dataGrid: any; // Référence à la grille de données

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

  // Méthode pour exporter les données vers Excel
  onExport(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.events); // Convertir les événements en une feuille Excel
    const wb: XLSX.WorkBook = XLSX.utils.book_new(); // Créer un nouveau livre de travail
    XLSX.utils.book_append_sheet(wb, ws, 'Events'); // Ajouter la feuille au livre
    XLSX.writeFile(wb, 'EventData.xlsx'); // Télécharger le fichier Excel
  }

  onExporting(event: any): void {
    const grid = event.component;
    grid.beginUpdate();
    grid.option('export.fileName', 'EventDataGrid_Exported'); // Définir le nom du fichier exporté
    grid.endUpdate();
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
