import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();
  searchTerm: string = '';

  search() {
    this.searchEvent.emit(this.searchTerm);
  }
}
