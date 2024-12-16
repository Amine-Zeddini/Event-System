import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../model/event';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private apiUrl = 'https://668513e4b3f57b06dd4b414d.mockapi.io/event';
  
  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }

  addEvent(Event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, Event);
  }

  updateEvent(Event: Event): Observable<Event> {
    const url = `${this.apiUrl}/${Event.id}`;
    return this.http.put<Event>(url, Event);
  }

  deleteEvent(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
