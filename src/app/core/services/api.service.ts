import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl: string = environment.apiURL;
  constructor(private http: HttpClient) {}

  public get<T>(path: string, params: HttpParams = new HttpParams()): Observable<HttpResponse<T>> {
    return this.http.get<T>(`${this.baseUrl}${path}`, {
      params,
      observe: 'response',
    });
  }

  public post<T>(path: string, body: Object = {}): Observable<HttpResponse<T>> {
    return this.http.post<T>(`${this.baseUrl}${path}`, JSON.stringify(body), {
      observe: 'response',
    });
  }

  public put<T>(path: string, body: Object = {}): Observable<HttpResponse<T>> {
    return this.http.put<T>(`${this.baseUrl}${path}`, JSON.stringify(body), {
      observe: 'response',
    });
  }

  public patch<T>(path: string, body: Object = {}): Observable<HttpResponse<T>> {
    return this.http.patch<T>(`${this.baseUrl}${path}`, JSON.stringify(body), {
      observe: 'response',
    });
  }

  public delete<T>(path: string): Observable<HttpResponse<T>> {
    return this.http.delete<T>(`${this.baseUrl}${path}`, {
      observe: 'response',
    });
  }
}
