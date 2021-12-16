import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [],
  };

  removeData = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((element, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (data) => {
    this.setState({
      characters: [...this.state.characters, data],
    });
  };

  render() {
    const { characters } = this.state;
    return (
      <div>
        <Table data={characters} removeData={this.removeData} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
