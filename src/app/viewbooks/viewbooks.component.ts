import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {BookstoreService} from "../bookstore.service";
import {Book} from "../book";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent {
  books: Book[] = [];

  constructor(private router: Router, private route : ActivatedRoute, private service: BookstoreService) {
  }


  ngOnInit(): void{
    this.getbooks();
  }

  getbooks() {
    this.service.getBooksFromServer().subscribe(
      data => this.books = data,
    )
  }

  getLatestBook() {
    this.books.length = 1;
    this.service.getLatestBookFromServer().subscribe(
      data => this.books[0] = data,
    )
  }

  getOldestBook() {
    this.books.length = 1;
    this.service.getOldestBookFromServer().subscribe(
      data => this.books[0] = data,
    )
  }

  RedirectToAddBook(){
    this.router.navigate(['/addbook'])
  }

  DeleteBook(id: Number){
    this.service.deleteBookFromServer(id).subscribe();
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {this.router.navigate(['/viewbooks'])});
  }
}
