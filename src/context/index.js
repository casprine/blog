import React, { Component, Fragment } from "react";
import { day } from "../utils/helpers";
const ContextContext = React.createContext();

class ContextProvider extends Component {
  state = {
    dark: day(),
    footer: false
  };

  toggleTheme = () => {
    console.log(this.state.dark, "from toggler");
    this.state.dark === "dark"
      ? this.setState({ dark: "light" })
      : this.setState({ dark: "dark" });
  };

  toggleFooter = () => {
    this.state.footer
      ? this.setState({ footer: false })
      : this.setState({ footer: true });
  };

  componentDidMount() {
    console.log(this.state.dark);
  }

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
