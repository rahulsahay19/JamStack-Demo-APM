import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IProduct } from './product';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productUrl = environment.productUrl;

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http
      .get<IProduct[]>(this.productUrl)
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    return throwError(err.statusText);
  }
}
