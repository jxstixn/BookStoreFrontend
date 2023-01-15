import {Component} from '@angular/core';
import {BookstoreService} from "../bookstore.service";
import {Book} from "../book";
import {Form, FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  book: Book = new Book();

  constructor(private route: Router, private service: BookstoreService) {
  }

  public addBookFormSubmit(){
    this.service.addBookToServer(this.book).subscribe();
    this.route.navigate(['/viewbooks']);
  }
}
