import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { event } from '../model/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url='http://localhost:8040';
  id!: number;


  constructor(private http:HttpClient) { }



  getevents(){
    return this.http.get<event[]>(`${this.url}/events`);
  }

  getevent(id : number){
    return this.http.get<event[]>(`${this.url}/events/${id}`);
  }

  getEventById(id1: number):Observable<event> {
    return this.http.get<event>((`${this.url}/events/${id1}`));
    
  }


  
  postevent(e: event){    
    return this.http.post<event>((`${this.url}/add_event`),e);
  }

  deleteEvent(idEvenement : number){
    return this.http.delete(`${this.url}/delete_event/${idEvenement}`);
  }


  updateEvent(e: event) {
    return this.http.put<event>((`${this.url}/update_event/${e.idEvenement}`), e);
  }



}
