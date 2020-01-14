import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuotes= new Quote("","","",new Date(), 0, 0);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuotes(){
    let quoteLength = this.newQuotes.name. length;
    if (quoteLength < 6) {
      alert("Hi, write a quote")
    }
    this.addQuote.emit(this.newQuotes);
    this.newQuotes = new Quote("","","",new Date(), 0, 0);
  }
  constructor() { }

  ngOnInit() {
  }

}
