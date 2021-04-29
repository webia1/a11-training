import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';
import { WikipediaSearchService } from 'src/app/services/wikipedia-search.service';

@Component({
  selector: 'tof-wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.scss'],
})
export class WikiSearchComponent implements OnInit {
  items: Array<string> = [];
  term$ = new Subject<string>();

  constructor(private ws: WikipediaSearchService) {
    this.term$
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((term) => this.search(term));
  }

  search(term: string) {
    this.ws.search(term).subscribe((r) => (this.items = r));
  }

  ngOnInit(): void {}
}
