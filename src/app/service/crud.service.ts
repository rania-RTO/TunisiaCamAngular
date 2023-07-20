import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { event } from '../model/event';
import { Observable } from 'rxjs';
import { panier } from '../model/panier';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url='http://localhost:8040';
  panierId:number =1;

  id!: number;

  private panier: event[] = [];

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

  deleteEvent(e : event){
    return this.http.delete(`${this.url}/delete_event/${e.idEvenement}`);
  }


  updateEvent(e: event) {
    return this.http.put<event>((`${this.url}/update_event/${e.idEvenement}`), e);
  }


  getPanier(){
    return this.http.get<panier[]>(`${this.url}/panier`);
  }



  ajouterEvenementAuPanier(panierId: number, e: event): Observable<panier> {
    return this.http.post<panier>((`${this.url}/${panierId}/addEvent`), e);
   
  }



  deleteE(idp: number, idE: number) {
    return this.http.delete(`${this.url}/panier/${idp}/${idE}`);
  }

}
