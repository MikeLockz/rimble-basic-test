import React, { Component } from "react";
import "./App.css";
import { ThemeProvider, Button } from "rimble-ui";
import theme from "./theme";
import MetaMaskLoginButton from "react-metamask-login-button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ThemeProvider theme={theme}>
            <p>Rimble UI</p>

            <Button size={"medium"}>Broken Rimble themed button :-(</Button>
            <br />
            <MetaMaskLoginButton theme={theme} />
          </ThemeProvider>
        </header>
      </div>
    );
  }
}

export default App;
