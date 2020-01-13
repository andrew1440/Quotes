import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote('Gilbert Riggs', 'The man that is known by the character', 'habiba', new Date(2020, 3, 14), 0, 0),
    new Quote('Dave Salmony', 'The air we breath above', 'monica', new Date(2019, 6, 9), 0, 0),
    new Quote('Caleb Thomas', 'Jasper is a white stone and so is the ice', 'darrolle', new Date(2019, 0, 18), 0, 0),
  ];

  counter1 = 0;
  counter2 = 0;

  deleteQuote(deleteit: any, index: any) {
    if (deleteit) {
      let toDelete = confirm('Are you sure you want to delete ${this.quotes[index].name}?')

      if (toDelete) {
        this.quotes.splice(index, 1);

     

      }
    }

  }


  toggleDetails(index) {
    this.quotes[index].showInformation = !this.quotes[index].showInformation;
  }


  addNewQuote(quote) {
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  likes: number = 0;
  dislikes: number = 0;

  Upvote(quote) {
    quote.counter1 = quote.counter1 + 1;
  }
  downvote(quote) {
    quote.counter2 = quote.counter2 + 1;
  }
  constructor() { }

  ngOnInit() {
  }

}
