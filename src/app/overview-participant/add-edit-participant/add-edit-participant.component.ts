import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ParticipantsService } from '../participant.service';
import { Participant } from 'src/app/model/participant';
import { DxFormComponent } from 'devextreme-angular';

@Component({
  selector: 'app-add-edit-participant',
  templateUrl: './add-edit-participant.component.html',
  styleUrls: ['./add-edit-participant.component.css'],
})
export class AddEditParticipantComponent implements OnInit, OnChanges {
  @Input() editAddPopupVisible: boolean = false;
  @Input() isEditMode: boolean = false;
  @Input() ParticipantData: Participant | null = null;
  @Output() participantAdded: EventEmitter<Participant> =
    new EventEmitter<Participant>();
  @Output() participantEdited: EventEmitter<Participant> =
    new EventEmitter<Participant>();
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter<boolean>();
  availableEvenements: string[] = [
    "Séminaire sur la Science des Données",
    "Atelier de Développement Web",
    "Formation en Marketing Digital",
    "Conférence sur l'Intelligence Artificielle",
    "Exposition d'Art Numérique",
    "Webinaire sur la Blockchain",
    "Séminaire sur la Gestion de Projet",
    "Atelier de Design UX/UI",
    "Conférence sur l'Éducation Numérique",
    "Forum sur les Startups Innovantes",
    "Séminaire sur les Nouvelles Technologies",
    "Atelier de Programmation Python",
    "Webinaire sur la Cybersécurité",
    "Séminaire sur la Blockchain Avancée",
    "Conférence sur l'Innovation en Entreprise",
    "Atelier sur l'Intelligence Artificielle",
    "Séminaire sur la Gestion des Ressources Humaines",
    "Webinaire sur le Marketing de Contenu",
    "Formation en Développement Mobile",
    "Forum sur l'Entrepreneuriat Social",
    "Séminaire sur la Conception de Produits Numériques",
    "Conférence sur l'Avenir de l'Internet",
    "Atelier sur la Programmation JavaScript",
    "Webinaire sur les Stratégies de Growth Hacking",
    "Séminaire sur la Blockchain dans la Finance",
    "Conférence sur la Santé Numérique",
    "Atelier sur les Bases de la Data Science",
    "Séminaire sur les Technologies Immersives",
    "Webinaire sur le Cloud Computing",
    "Formation sur la Sécurité des Applications Web",
    "Atelier de Réseautage Professionnel",
    "Séminaire sur l'Innovation Durable",
    "Conférence sur le Futur du Travail"
  ];
  error: string = '';
  newParticipant: Participant = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    dateNaissance: new Date(),
    adresse: '',
    genre: 'Homme',
    statut: 'Actif',
    dateInscription: new Date(),
    role: '',
    evenements: [],
  };

  constructor(private service: ParticipantsService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change', changes);
    console.log('edit add popup ', this.editAddPopupVisible);
    if (this.ParticipantData) {
      this.newParticipant = { ...this.ParticipantData };
    }
    console.log('newParticipant', this.newParticipant);
  }

  submitForm(e: any): void {
    const { isValid } = e.validationGroup.validate();
    console.log('isValid', isValid);
    if (isValid) {
      // Submit values to the server
      if (this.isEditMode) {
        this.participantEdited.emit(this.newParticipant);
      } else {
        this.service.addParticipant(this.newParticipant).subscribe(
          (response) => {
            this.participantAdded.emit(this.newParticipant);
          },
          (err) => {
            this.error = err.error.message;
          }
        );
      }
    }
  }

  close(): void {
    this.ParticipantData = null; // Reset the selected participant

    this.closePopup.emit(false);
  }
}
