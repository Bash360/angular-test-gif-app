import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search-field',
    // selector: 'app-root',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
    name: string = 'Search Field';
    query: string;
    @Output() searchText: EventEmitter<string> = new EventEmitter();
    constructor() {
    }

    ngOnInit() {
    }
    queryText(event) {
        event.preventDefault();
        this.searchText.emit(this.query);
    }
}
