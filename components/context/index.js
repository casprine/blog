import React, { Component, Fragment } from "react";
import { day } from "../../utils/helpers";
const ContextContext = React.createContext();

class ContextProvider extends Component {
  state = {
    dark: day()
  };

  change(props) {
    this.setState({
      dark: props
    });
  }

  switchTheme = () => {
    this.state.dark
      ? this.setState({ dark: false })
      : this.setState({ dark: true });
  };

  componentDidMount() {
    // const theme = localStorage.getItem("theme");
    // if (theme) {
    //   this.setState({ dark: theme });
    // }
  }

  componentDidUpdate() {
    // localStorage.setItem("theme", this.state.dark);
  }

  render() {
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
