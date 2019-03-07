import React, { Component, Fragment } from "react";
import { day } from "../utils/helpers";
const ContextContext = React.createContext();

class ContextProvider extends Component {
  state = {
    dark: !day,
    footer: false
  };

  toggleTheme = () => {
    this.state.dark
      ? this.setState({ dark: false })
      : this.setState({ dark: true });
  };

  toggleFooter = () => {
    this.state.footer
      ? this.setState({ footer: false })
      : this.setState({ footer: true });
  };

  render() {
    const { dark, footer } = this.state;
    return (
      <Fragment>
        <ContextContext.Provider
          value={{
            theme: dark,
            footer: footer,
            toggleTheme: this.toggleTheme,
            toggleFooter: this.toggleFooter
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
