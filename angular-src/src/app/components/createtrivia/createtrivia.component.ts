import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createtrivia',
  templateUrl: './createtrivia.component.html',
  styleUrls: ['./createtrivia.component.css']
})
export class CreatetriviaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 
 /*   function Createtrivia($scope){
    console.log("Hello from create trivia js file");

$http.get('createtrivia')

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

    var createtrivia = [Question1, Question2, Question3];
    $scope.createtrivia = createtrivia;
  }
  */
}
