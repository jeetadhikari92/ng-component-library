import { Component } from '@angular/core';
import { StyleParams } from 'ng-voting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data =  {
    question: "How are you doing today?",
    options: [
        {
            label: "Good",
            value: "good",
            votesCount: 0
        },
        {
            label: "Bad",
            value: "bad",
            votesCount: 0
        },
        {
            label: "Dont know",
            value: "dont-know",
            votesCount: 0
        }
    ]
  }
  styleParams: StyleParams = {
  }

  isLoading = false

  toggleIsLoading() {
    return this.isLoading = !this.isLoading;
  }

  increaseVoteCount(optionValue: string) {
    this.data = {
      ...this.data,
      options: this.data.options.map((value) => {
          value.value === optionValue ? value.votesCount++ : null
          return value;
      })
    }
  }
}
