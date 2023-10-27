import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(private httpClient: HttpClient) { }

  getDataV1(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.httpClient.get(url);
  }

  getDataV2(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.httpClient.get(url)
      .pipe(
        tap((resp: any) => console.log(resp)),
        catchError(this.handleError<any>('getDataV2'))
      );
  }

  postDataV1(data: any): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const httpOptions = {
      headers: new HttpHeaders({ 'Application-Type': 'application/json'})
    };

    return this.httpClient.post(data, url, httpOptions);
  }

  private handleError<T>(operation: string) {
    return (error: HttpErrorResponse): Observable<T> => {
      
      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      const message = `server returned code ${error.status} with body "${error.error}"`;
      // TODO: better job of transforming error for user consumption
      throw new Error(`${operation} failed: ${message}`);
    }
  }

}
