import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <a style={{textDecoration: 'none'}} className="link" href="CV.pdf" download>
            <div className="text-with-animation">Coming</div>
            <div className="subtext-with-animation">
              <span>soon</span>
              <span> #2019</span>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
