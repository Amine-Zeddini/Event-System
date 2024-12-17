import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avis } from '../model/avis';

@Injectable({
  providedIn: 'root',
})
export class AvisService {
  private apiUrl = 'http://localhost:3000/avis'; // URL de JSON Server

  // Émet un événement lorsqu'un avis est ajouté
  avisUpdated = new EventEmitter<void>();

  constructor(private http: HttpClient) {}

  // Obtenir tous les avis
  getAvis(): Observable<Avis[]> {
    return this.http.get<Avis[]>(this.apiUrl);
  }

  getAvisById(id: number): Observable<Avis> {
    return this.http.get<Avis>(`${this.apiUrl}/${id}`);
  }

  // Ajouter un avis
  addAvis(avis: Avis): Observable<Avis> {
    return this.http.post<Avis>(this.apiUrl, avis);
  }

  // Mettre à jour un avis
  updateAvis(id: number, avis: Avis): Observable<Avis> {
    return this.http.put<Avis>(`${this.apiUrl}/${id}`, avis);
  }

  // Supprimer un avis
  supprimer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Émettre un événement après l'ajout ou la mise à jour d'un avis
  emitAvisUpdate(): void {
    this.avisUpdated.emit();
  }
}
