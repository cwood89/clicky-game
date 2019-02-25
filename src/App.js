import React, { Component } from "react";
import Img from "./components/img";
import images from "./cars.js";
import Wrapper from "./components/Wrapper"
import Score from "./components/Score"
import Jumbotron from "./components/Jumbotron"

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: images,
      score: 0,
      topScore: 0,
      clicked: []
    }
    this.runGame = this.runGame.bind(this)
  }

  runGame(id) {

    let clicked = this.state.data.find(element => {
      return element.id === id
    })
    let array = this.state.clicked
    let score = this.state.score;
    let topScore = this.state.topScore;

    if (array.includes(clicked)) {
      alert("Game Over");
      this.setState({
        score: 0,
        clicked: []
      })
    } else {

      array.push(clicked)

      if (score === topScore) {
        score++;
        topScore++;
      } else {
        score++
      }

      this.setState({
        score: score,
        topScore: topScore,
        data: this.shuffle(this.state.data),
        clickedArr: clicked
      })
      console.log(this.state.clicked)
    }
  }


  shuffle(array) {
    let currentIndex = array.length
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  render() {
    return (
      <div>
        <Score
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <Wrapper>
          {this.state.data.map((data) => {
            return (
              <Img
                key={data.id}
                id={data.id}
                runGame={() => this.runGame(data.id)}
                name={data.name}
                image={data.image}
              />
            )
          })}
        </Wrapper>
      </div>
    );
  }
}

export default App;
