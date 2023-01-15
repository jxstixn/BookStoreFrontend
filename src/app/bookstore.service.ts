import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "./book";

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {

  constructor(private _http: HttpClient) {
  }

  getBooksFromServer(): Observable<any> {
    return this._http.get<any>("http://localhost:6969/bookStore")
  }
  getLatestBookFromServer(): Observable<any> {
    return this._http.get<any>("http://localhost:6969/bookStore/latest")
  }
  getOldestBookFromServer(): Observable<any> {
    return this._http.get<any>("http://localhost:6969/bookStore/oldest")
  }

  addBookToServer(book: Book): Observable<any> {
    console.log(JSON.stringify({
      name: book.name,
      author: book.author,
      year: book.year,
      price: book.price
    }))
    return this._http.post<any>("http://localhost:6969/bookStore", book)
  }

  deleteBookFromServer(id: Number): Observable<any>{
    return this._http.delete("http://localhost:6969/bookStore/"+id);
  }
}
