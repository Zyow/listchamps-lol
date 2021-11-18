import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Listchamp } from '../model/listchamp';

@Injectable({
  providedIn: 'root'
})
export class ListchampService {

  listchampstream = new BehaviorSubject<Listchamp[]>([{id:0, name: "N/A", active: false}]);

  constructor(private http:HttpClient ) { }

  getListChamp = (): void =>{
    this.http.get<Listchamp[]>(environment.URL).subscribe(
      data => {
        this.listchampstream.next(data);
      }
    )
  }

  addChamp = (data: Listchamp): Observable<Listchamp> => {
    return this.http.post<Listchamp>(environment.URL, data)
  }

  deleteChamp = (id:number): Observable<Listchamp[]> =>{
    console.log("id = " + id);
    return this.http.delete<Listchamp[]>(`${environment.URL}/${id}`)
  }
}
