import React, { Component, Fragment } from "react";
import { localStore } from "../../utils/index";

const ContextContext = React.createContext();

class ContextProvider extends Component {
  state = {
    dark: false
  };

  change(props) {
    this.setState({
      dark: props
    });
  }

  switchTheme = () => {
    !this.state.dark
      ? this.setState({ dark: true })
      : this.setState({ dark: false });
  };

  componentDidMount() {
    const theme = localStorage.getItem("theme");
    if (theme) {
      console.log(theme);
    }
  }

  componentDidUpdate() {
    localStorage.setItem("theme", this.state.dark);
  }

  render() {
    console.log("rendering", this.state.dark);
    return (
      <Fragment>
        <ContextContext.Provider
          value={{
            theme: this.state.dark,
            switchTheme: this.switchTheme
          }}
        >
          {this.props.children}
        </ContextContext.Provider>
      </Fragment>
    );
  }
}

const ContextConsumer = ContextContext.Consumer;

export { ContextConsumer, ContextProvider };
