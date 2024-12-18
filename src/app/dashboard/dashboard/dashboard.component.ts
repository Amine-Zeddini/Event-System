import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/overview-event/event.service';
import { ParticipantsService } from 'src/app/overview-participant/participant.service';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  numberOfEvents: number = 0;
  numberOfParticipants: number = 0;

  constructor(
    private eventService: EventsService,     
    private participantService: ParticipantsService, 
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.loadEventData();
    this.loadParticipantData();
  }

  loadEventData(): void {
    this.eventService.getEvents().subscribe(events => {
      this.numberOfEvents = events.length;
    });
  }

  loadParticipantData(): void {
    this.participantService.getParticipants().subscribe(participants => {
      this.numberOfParticipants = participants.length;
    });
  }

  redirectTo(route: string): void {
    this.router.navigate([route]); 
  }
}
