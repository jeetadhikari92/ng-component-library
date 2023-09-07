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
                image: "assets/profile1.jpg"
              },
              {
                name: "Peter Parker",
                image: ""
              },
              {
                name: "Harry Potter",
                image: ""
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
                image: "assets/profile3.jpg"
              },
              {
                name: "Harry Potter",
                image: ""
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
                image: "assets/profile2.jpg"
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
