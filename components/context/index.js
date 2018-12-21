import React, { Component } from "react";

const ContextContext = React.createContext();

class ContextProvider extends Component {
  state = {
    theme: "light",
    color: {
      light: {
        backgroundColor: "#ebf0f6"
      },
      dark: {
        backgroundColor: "black",
        color: "white"
      }
    }
  };

  switchTheme = () => {
    this.state.theme === "light"
      ? this.setState({ theme: "dark" })
      : this.setState({ theme: "light" });
  };

  render() {
    return (
      <ContextContext.Provider
        value={{
          theme: this.state.theme,
          switchTheme: this.switchTheme,
          color: this.state.color
        }}
      >
        {this.props.children}
      </ContextContext.Provider>
    );
  }
}

const ContextConsumer = ContextContext.Consumer;

export { ContextConsumer, ContextProvider };
