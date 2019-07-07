import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <a style={{textDecoration: 'none'}} className="link" href="CV.pdf" download>
            <div class="text-with-animation">Coming</div>
            <div class="subtext-with-animation">
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
