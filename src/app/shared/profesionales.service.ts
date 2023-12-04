import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesional } from '../models/profesional';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalesService {

  profesional: Profesional;
  profesionales: Profesional[];

  private url = "http://localhost:3000/profesionales";

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Object> {
    return this.http.get(this.url);
  }

  public getOne(firstName: string, lastName: String): Observable<Object> {
    return this.http.get(`${this.url}?firstName=${firstName}&lastName=${lastName}`);
  }

  public add(profesional: Profesional): Observable<Object> {
    return this.http.post(this.url, profesional);
  }

  public edit(profesional: Profesional): Observable<Object> {
    return this.http.put(this.url, profesional);
  }

  public delete(profesional: Profesional): Observable<Object> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: profesional
    };

    return this.http.delete(this.url, options);
  }

}
