import { Component } from '@angular/core';
import { StyleParams, Voting } from 'ng-voting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: Voting =  {
    question: "Who is winning the match?",
    options: [
        {
            label: "Spain",
            value: "spain",
            votesCount: 3,
            imageUrl: "assets/spain.png",
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
            label: "Draw",
            value: "draw",
            votesCount: 2,
            imageUrl: "assets/draw.png",
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
            label: "Portugal",
            value: "portugal",
            votesCount: 1,
            imageUrl: "assets/portugal.png",
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
  showUsers = true;
  showScale = true;

  toggleIsLoading() {
    this.isLoading = !this.isLoading;
  }

  toggleShowUser() {  
    this.showUsers = !this.showUsers;
  }

  toggleShowScale() {
    this.showScale = !this.showScale;
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
    console.log(this.data)
  }
}
