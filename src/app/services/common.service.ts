import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  darthVaderUrl: string = 'http://swapi.dev/api/people/4/';

  constructor(private http: HttpClient) {}

  getDarthVaderData() {
    return this.http
      .get(this.darthVaderUrl)
      .pipe(retry(3), catchError(this.handleError));
  }

  log(message: string, isImportant = false) {
    isImportant
      ? console.log(`%c${message}`, 'color:red; font-size:18px')
      : console.log(`%c${message}`, 'color:lime; font-size:18px');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`,
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.',
    );
  }
}
