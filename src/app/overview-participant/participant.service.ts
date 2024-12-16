import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participant } from 'src/app/model/participant'; // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  private apiUrl = 'https://675d577efe09df667f660447.mockapi.io/event'; // URL de l'API

  constructor(private http: HttpClient) { }

  // Récupérer tous les participants
  getParticipants(): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.apiUrl);
  }

  // Ajouter un nouveau participant
  addParticipant(participant: Participant): Observable<Participant> {
    return this.http.post<Participant>(this.apiUrl, participant);
  }

  // Mettre à jour un participant
  updateParticipant(participant: Participant): Observable<Participant> {
    const url = `${this.apiUrl}/${participant.id}`;
    return this.http.put<Participant>(url, participant);
  }

  // Supprimer un participant
  deleteParticipant(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
