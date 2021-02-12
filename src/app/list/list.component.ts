import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  authors;

  constructor(authorservice: AuthorsService) {
      this.authors = authorservice.getAuthors();
   }

  ngOnInit(): void {
  }

}
