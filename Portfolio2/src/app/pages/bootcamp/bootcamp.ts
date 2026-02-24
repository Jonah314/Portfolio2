import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface BootcampProject {
  name: string;
  github: string;
  live: string;
  description: string;
  image: string;   // 👈 ADD THIS
}

interface BootcampWeek {
  title: string;
  topics: string[];
  projects: BootcampProject[];
}

@Component({
  selector: 'app-bootcamp',
  imports: [],
  templateUrl: './bootcamp.html',
  styleUrl: './bootcamp.css',
})
export class Bootcamp {

  weeks: BootcampWeek[] = [
  {
    title: 'Week 1',
    topics: [
      'HTML structure & semantic tags',
      'CSS fundamentals & layout (Flexbox/Grid)',
      'JavaScript basics: variables, control flow, functions'
    ],
    projects: [
      {
        name: "Kohl's Mock Page",
        github: 'https://github.com/Jonah314/KohlsMockPage',
        live: 'https://jonah314.github.io/KohlsMockPage/',
        image:'assets/images/kohls-side-by-side.png',
        description: 'Using our CSS & HTML skills, Our assignment was to make a Mock site of this Kohls website. On the left is the original, and on the right is the side is the remake. click on the screenshot to take you to the Mock site.'
      },
      {
        name: 'Number Guessing Game',
        github: 'https://github.com/Jonah314/NumberGuessingGame',
        live: 'https://jonah314.github.io/NumberGuessingGame/',
        image: 'assets/images/NumberGuessGameScreenShot.png',
        description: 'I built a simple number-guessing game using HTML, CSS, and JavaScript. The game generates a random number between 1 and 10 and waits for the user to submit their guess through a form. When the form is submitted, my script checks whether the guess matches the generated number and displays a success or failure message. After guessing, the player is prompted to refresh the page to try again.'
      }
    ]
  },
  {
    title: 'Week 2',
    topics: [
      'JavaScript Fundamentals: Variables, data types(Primitive vs Complex), operators, control flow, functions',
      'Arrays, Objects',
      'Clases, Function constructors, "New" Keyword',

    ],
    projects: [
      {
        name: 'Pokémon Trading Card Game',
        github: 'https://github.com/Jonah314/PokemonTradingCardGame',
        live: 'https://jonah314.github.io/PokemonTradingCardGame/',
        image: 'assets/images/pokemon-tcg-app.png',
        description: 'For this project, I built a 1999 classic Pokémon card game using HTML, CSS, and JavaScript, focusing on object-oriented programming principles. The core requirement was to create a deck of cards using classes, where the deck contains an array of card objects and includes shuffle and draw functionality. I implemented a base Card class and extended it into child classes for Basic Pokémon cards and Energy cards. Card factory functions were used to generate new card instances, while deck factory functions were responsible for assembling complete decks. Each deck supports shuffling and drawing cards. After building a deck, cards are assigned to a Player object. To support gameplay mechanics, I created seven arrays representing the required board spaces in the Pokémon card game, allowing cards to be organized and managed during play. This project demonstrates class inheritance, factory patterns, and game-state management in JavaScript.'
      }
    ]
  },
  {
    title: 'Week 3',
    topics: [
      'ES6+ key features(let/const, arrow functions)',
      'Arrays, Objects',
      'Recap, Function contructors New Keyword',

    ],
    projects: [
      {
        name: 'Basic Array Algorithms',
        github: 'https://github.com/Jonah314/basicArrayAlgorithms',
        live: '',
        image: '',
        description: 'This assignment practices core array manipulation in JavaScript by implementing functions to reverse arrays, replace values, modify all elements, remove the first item, find the largest number, count value frequency, and extract even numbers without using built-in methods.'
      }
    ]
  },
  {
    title: 'Week 4',
    topics: [
      'promises',
    ],
    projects: [
      {
        name: 'Poke-dex',
        github: 'https://github.com/Jonah314/Poke-dex',
        live: 'http://jonah314.github.io./Poke-dex/',
        image: 'assets/images/PokeDexScreenshot.png',
        description: 'This project uses the Pokémon API to fetch and display Pokémon data based on user input. It features an input box and submit button where users enter a Pokémon’s name. Upon submission, the application connects to the API, retrieves the relevant data, and dynamically updates the DOM to display the Pokémon’s image and name.'
      }
    ]
  }
];


}
