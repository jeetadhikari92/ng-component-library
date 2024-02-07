# NgVoting

`ng-voting` is a reusable Angular component that can be used to easily implement a voting platform in your app. It is responsive and completely customizable.

## Demo

![ng-voting](https://github.com/jeetadhikari92/ng-component-library/assets/39948671/e4c353e8-b488-4302-af0c-9d9b4b36471d)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Customize](#customize)
- [API](#api)
- [Whats next](#whats-next)
- [Author](#author)

## Installation

```bash
npm i ng-voting
```

## Usage

- Import the `NgVotingComponent` in the module of your choice.

```typescript
...
import { NgVotingComponent } from 'ng-voting'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...,
    NgVotingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- In `your.component.ts` add some data of type `Voting`. can be import like `import { Voting } from ng-voting`
- In `your.component.html` add the `ng-voting` tag and pass you data of type `Voting` to `[data]` as shown below.

`your.component.ts`

```typescript
import { Voting } from 'ng-voting';

@Component({
  selector: 'your-root',
  templateUrl: './your.component.html'
})
export class YourComponent {
  data: Voting =  {
    question: "Do you like ng-voting?",
    options: [
        {
            label: "Yes",
            value: "yes",
            votesCount: 1,
            imageUrl: "optional-image-url",
            users: [
              ...users,
              {
                name: "John Snow",
                image: "assets/profile1.jpg"
              },
            ]
        },
        {
            label: "No",
            value: "no",
            votesCount: 0,
            imageUrl: "optional-image-url"
        }
    ]
  }

  optionSelected(value: string) {
    // You get back the selected option here.
  }
```

`your.component.html`

```html
<ng-voting [data]="data" (selected)="optionSelected($event)"></ng-voting>
```

`Voting`

```typescript
export interface Voting {
  question: string;
  options: Option[];
}

export interface Option {
  label: string;
  value: string;
  votesCount: number;
  imageUrl?: string;
  users?: { name: string; image?: string }[];
  color?: string;
  bgColor?: string;
  selected?: boolean;
}
```

## Customize

- The component can be completely customized, from adding background colors, font sizes to modifying the margins
- Import the `StyleParams` like `import { StypeParams } from 'ng-voting'`, and create and object.
- Pass the object to `[styleParams]` in your html. (use `rem` instead of `px`)

```typescript
// In your .ts file, create an object and change these values
// (use `rem` and not `px`)

styleParams: StyleParams = {
  borderColor: "#d3d3d3",
  margin: "1rem",
  hoverColor: "#ebebeb",
  scaleColor: "#9797dc",
  fontSize: "1.5rem",
  topicBackgroundColor: "#ffffff",
  optionsBackgroundColor: "#ffffff",
  topicFontColor: "black",
  optionsFontColor: "black",
};
```

```html
// In your html file, pass that object. <ng-voting [data]="data" [styleParams]="styleParams" (selected)="increaseVoteCount($event)"></ng-voting>
```

## API

| API                     | Type          | Description                                            | Default                                                                                                                                                                                                                          | Required |
| ----------------------- | ------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `[data]`                | `Voting`      | Voting topic and option and their details              | `undefined`                                                                                                                                                                                                                      | `true`   |
| `[isLoading]`           | `boolean`     | Show loading state                                     | `false`                                                                                                                                                                                                                          | `false`  |
| `[showUsers]`           | `boolean`     | Show the users count on option                         | `true`                                                                                                                                                                                                                           | `false`  |
| `[showScale]`           | `boolean`     | Show the percentage scale of voting                    | `true`                                                                                                                                                                                                                           | `false`  |
| `[disable]`             | `boolean`     | Disable voting                                         | `false`                                                                                                                                                                                                                          | `false`  |
| `[selectedOptionValue]` | `boolean`     | Shows a checkmark of which option was selected by user | `""`                                                                                                                                                                                                                             | `false`  |
| `[styleParams]`         | `StyleParams` | Customize the Voting component.                        | `borderColor: '#d3d3d3', margin: '1rem', hoverColor: '#ebebeb', scaleColor: '#9797dc', fontSize: '1.5rem', topicBackgroundColor:'#ffffff', optionsBackgroundColor:'#ffffff', topicFontColor: 'black', optionsFontColor: 'black'` | `false`  |
| `(selected)`            | `string`      | Emits the selected option value                        |                                                                                                                                                                                                                                  |          |

- Example usage

```
<ng-voting
        [data]="data"
        [styleParams]="styleParams"
        [showScale]="true"
        [showUsers]="true"
        [isLoading]="false"
        [selectedOptionValue]="''"
        [disable]="false"
        (selected)="handleVote($event)"></ng-voting>
```

## Whats next

- A customization app, where you can try out the component and generate the code for it.
- More reusable components.

## Author

- [@jeetadhikari92](https://github.com/jeetadhikari92)
