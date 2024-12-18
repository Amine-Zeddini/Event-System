import { Component, OnInit } from '@angular/core';
import { Participant } from 'src/app/model/participant';
import { ParticipantsService } from '../participant.service';
import * as XLSX from 'xlsx'; // Importer la bibliothèque xlsx

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css'],
})
export class ParticipantComponent implements OnInit {
  participants: Participant[] = [];
  editAddPopupVisible: boolean = false;
  selectedParticipant: Participant | null = null;

  constructor(private participantsService: ParticipantsService) {}

  ngOnInit(): void {
    this.loadParticipants();
  }

  loadParticipants(): void {
    this.participantsService.getParticipants().subscribe(
      (data: Participant[]) => {
        this.participants = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des participants:', error);
      }
    );
  }

  openAddPopup(): void {
    this.selectedParticipant = null;
    this.editAddPopupVisible = true;
  }

  openEditPopup(participant: Participant): void {
    this.selectedParticipant = { ...participant };
    console.log('voici participant', this.selectedParticipant);
    this.editAddPopupVisible = true;
  }

  closePopup(): void {
    console.log('closePopup');
    this.editAddPopupVisible = false;
  }

  onParticipantAdded(participant: Participant): void {
    this.participantsService.addParticipant(participant).subscribe(
      (newParticipant: Participant) => {
        this.participants.push(newParticipant);
        this.closePopup();
      },
      (error) => {
        console.error("Erreur lors de l'ajout du participant:", error);
      }
    );
  }

  onParticipantEdited(participant: Participant): void {
    this.participantsService.updateParticipant(participant).subscribe(
      (updatedParticipant: Participant) => {
        const index = this.participants.findIndex(
          (p) => p.id === updatedParticipant.id
        );
        if (index !== -1) {
          this.participants[index] = updatedParticipant;
        }
        this.closePopup();
      },
      (error) => {
        console.error('Erreur lors de la modification du participant:', error);
      }
    );
  }

  onParticipantDeleted(id: number): void {
    this.participantsService.deleteParticipant(id).subscribe(
      () => {
        this.participants = this.participants.filter((p) => p.id !== id);
      },
      (error) => {
        console.error('Erreur lors de la suppression du participant:', error);
      }
    );
  }

    onExport(): void {
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.participants); // Convertir les événements en une feuille Excel
      const wb: XLSX.WorkBook = XLSX.utils.book_new(); // Créer un nouveau livre de travail
      XLSX.utils.book_append_sheet(wb, ws, 'participants'); // Ajouter la feuille au livre
      XLSX.writeFile(wb, 'ParticipantData.xlsx');
    }
  
  

  onGridOptionChanged(event: any): void {
    console.log('Grid options changed:', event);
  }
}
