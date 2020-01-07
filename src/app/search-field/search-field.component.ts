import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search-field',
    // selector: 'app-root',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
    name = 'Search Field';
    query;
    @Output() searchText = new EventEmitter();
    constructor() {
    }

    ngOnInit() {
    }
    queryText(event) {
        event.preventDefault();
        console.log(this.query);
        this.searchText.emit(this.query);
    }
}
