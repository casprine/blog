import React, { Component } from "react";
import { localStore } from "../../utils/index";

const ContextContext = React.createContext();

class ContextProvider extends Component {
  state = {
    theme: localStore.getByKey("theme"),
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

  save(props) {
    this.setState(
      {
        theme: props
      },
      () => {
        localStore.setItem("theme", props);
      }
    );
  }

  switchTheme = () => {
    this.state.theme === "light" ? this.save("dark") : this.save("light");
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
