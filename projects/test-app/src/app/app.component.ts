import { Component } from '@angular/core';
import { StyleParams, Voting } from 'ng-voting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: Voting =  {
    question: "Which one is your favourite?",
    options: [
        {
            label: "Angular",
            value: "angular",
            votesCount: 3,
            imageUrl: "assets/angular.png",
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
            label: "React",
            value: "react",
            votesCount: 2,
            color: 'white',
            bgColor: 'red',
            imageUrl: "assets/react.png",
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
            label: "Vue",
            value: "vue",
            votesCount: 1,
            imageUrl: "assets/vue.png",
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
  disable = false;
  selectedOption = ""

  toggleIsLoading() {
    this.isLoading = !this.isLoading;
  }

  toggleShowUser() {  
    this.showUsers = !this.showUsers;
  }

  toggleShowScale() {
    this.showScale = !this.showScale;
  }

  toggleDisable() {
    this.disable = !this.disable;
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
    this.selectedOption = optionValue;
  }
}
