import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Listchamp } from '../model/listchamp';

@Injectable({
  providedIn: 'root'
})
export class ListchampService {

  listchampstream = new BehaviorSubject<Listchamp[]>([{id:0, name: "N/A", active: false, title: "Non disponible"}]);

  constructor(private http:HttpClient ) { }

  getListChamp = (): void =>{
    this.http.get<Listchamp[]>(`${environment.URL}/?_sort=id&_order=desc`).subscribe(
      data => {
        this.listchampstream.next(data);
      }
    )
  }

  addChamp = (data: Listchamp): Observable<Listchamp> => {
    return this.http.post<Listchamp>(environment.URL, data)
  }

  deleteChamp = (id:number): Observable<Listchamp[]> =>{
    return this.http.delete<Listchamp[]>(`${environment.URL}/${id}`)
  }

  changeState = (data: Listchamp): Observable<Listchamp> => {
    return this.http.patch<Listchamp>(`${environment.URL}/${data.id}`, data)
  }
}
