import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createtrivia',
  templateUrl: './createtrivia.component.html',
  styleUrls: ['./createtrivia.component.css']
})
export class CreatetriviaComponent implements OnInit {
  
  Question1 = {
      question: 'who was the first person to walk on moon',
      category: 'science',
      difficulty: 'easy'
  };

  Question2 = {
      question: 'When did battle of waterloo take place',
      category: 'history',
      difficulty: 'medium'
  };

  Question3 = {
      question: 'who won the NFL Superbowl most valuable player award in 1986',
      category: 'sports',
      difficulty: 'hard'
  };

    
  constructor() { }

  ngOnInit() {
  }

}
