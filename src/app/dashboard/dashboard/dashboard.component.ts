import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/overview-event/event.service';
import { ParticipantsService } from 'src/app/overview-participant/participant.service';
import { Router } from '@angular/router';  // Import du Router

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  numberOfEvents: number = 0;
  numberOfParticipants: number = 0;

  constructor(
    private eventService: EventsService,     // Injection du service d'événements
    private participantService: ParticipantsService, // Injection du service de participants
    private router: Router  // Injection du Router pour la redirection
  ) {}

  ngOnInit(): void {
    this.loadEventData();
    this.loadParticipantData();
  }

  // Fonction pour récupérer le nombre d'événements
  loadEventData(): void {
    this.eventService.getEvents().subscribe(events => {
      this.numberOfEvents = events.length;  // Calcul du nombre d'événements
    });
  }

  // Fonction pour récupérer le nombre de participants
  loadParticipantData(): void {
    this.participantService.getParticipants().subscribe(participants => {
      this.numberOfParticipants = participants.length;  // Calcul du nombre de participants
    });
  }

  // Fonction de redirection
  redirectTo(route: string): void {
    this.router.navigate([route]);  // Utilisation du Router pour rediriger vers la page spécifiée
  }
}
