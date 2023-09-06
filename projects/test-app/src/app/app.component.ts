import { Component } from '@angular/core';
import { StyleParams, Voting } from 'ng-voting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: Voting =  {
    question: "How are you doing today?",
    options: [
        {
            label: "Good",
            value: "good",
            votesCount: 3,
            users: [
              {
                name: "John Snow",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80"
              },
              {
                name: "Peter Parker",
                image: "http://p2w-frontend.s3-website-us-east-1.amazonaws.com/assets/profile.jpg"
              },
              {
                name: "Harry Potter",
                image: "http://p2w-frontend.s3-website-us-east-1.amazonaws.com/assets/profile.jpg"
              }
            ]
        },
        {
            label: "Bad",
            value: "bad",
            votesCount: 2,
            users: [
              {
                name: "Will Smith",
                image: "http://p2w-frontend.s3-website-us-east-1.amazonaws.com/assets/profile.jpg"
              },
              {
                name: "Harry Potter",
                image: "http://p2w-frontend.s3-website-us-east-1.amazonaws.com/assets/profile.jpg"
              }
            ]
        },
        {
            label: "Dont know",
            value: "dont-know",
            votesCount: 1,
            users: [
              {
                name: "Julia Roberts",
                image: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3687&q=80"
              }
            ]
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
          if(value.value === optionValue) {
            value.votesCount++;
            value.users?.push({name: "Random User", image: ""})
          }
          return value;
      })
    }
  }
}
