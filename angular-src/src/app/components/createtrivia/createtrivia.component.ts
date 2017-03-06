import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'http-app', 
  templateUrl: './createtrivia.component.html',
  styleUrls: ['./createtrivia.component.css']
})
export class CreatetriviaComponent implements OnInit {
  question: string;
  category: string;
  difficulty: string;

  constructor() {
   }

  ngOnInit() {
  }

  onClickSubmit(){
    var questionlist = {
      question: this.question,
      category: this.category,
      difficulty: this.difficulty
  }
 }

}

 