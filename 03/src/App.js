import React from "react";
import ListWrapper from "./components/ListWrapper/ListWrapper";
import "./index.css";
import Form from "./components/Form/Form";

const initialStateItems = [
  {
    image: "https://media-exp1.licdn.com/dms/image/C4D03AQHf0o2eysYdrg/profile-displayphoto-shrink_200_200/0/1517254741113?e=1657756800&v=beta&t=aWeD6zoXeGch0ZtrdurH0lsIqTUN-_1-PMYgjrgK9OA",
    name: "Dan Abramov",
    description: "The creator of React",
    twitterLink: "https://twitter.com/dan_abramov"
  }
];

class App extends React.Component {
  state = {
    items: [...initialStateItems],
  };

  addItem = e => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset();
  };

  render() {
    return (
      <div>
        <h1>Siema</h1>
        <ListWrapper items={this.state.items} />
        <Form submitFn={this.addItem} />
      </div>
    );
  }
}

export default App;
