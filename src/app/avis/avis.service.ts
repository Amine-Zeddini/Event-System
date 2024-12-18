import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avis } from '../model/avis';

@Injectable({
  providedIn: 'root',
})
export class AvisService {
  private apiUrl = 'http://localhost:3000/avis'; 

  avisUpdated = new EventEmitter<void>();

  constructor(private http: HttpClient) {}

  getAvis(): Observable<Avis[]> {
    return this.http.get<Avis[]>(this.apiUrl);
  }

  getAvisById(id: number): Observable<Avis> {
    return this.http.get<Avis>(`${this.apiUrl}/${id}`);
  }

  addAvis(avis: Avis): Observable<Avis> {
    return this.http.post<Avis>(this.apiUrl, avis);
  }

  updateAvis(id: number, avis: Avis): Observable<Avis> {
    return this.http.put<Avis>(`${this.apiUrl}/${id}`, avis);
  }

  supprimer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  emitAvisUpdate(): void {
    this.avisUpdated.emit();
  }
}
