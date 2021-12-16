import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ],
  };

  removeData = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((element, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    const { characters } = this.state;
    return (
      <div>
        <Table data={characters} removeData={this.removeData} />
      </div>
    );
  }
}

export default App;
