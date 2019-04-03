import React from 'react';

class App extends React.Component {
  render() {
    return React.createElement("div", {
      hidden: "false"
    }, React.createElement("button", null, "Hello"));
  }

}

export default App;
