import React, { Component, Fragment } from "react";
import { day } from "../utils/helpers";
import data from "../../posts.json";

const ContextContext = React.createContext();

class ContextProvider extends Component {
  state = {
    dark: !day(),
    artiles: null,
    currentArticle: null
  };

  componentWillMount() {
    const posts = Object.values(data);
    this.setState({
      articles: posts
    });
  }

  switchTheme = () => {
    this.state.dark
      ? this.setState({ dark: false })
      : this.setState({ dark: true });
  };

  fetchById = id => {
    console.log(this.state.articles, id);
    // return id;
  };

  render() {
    const { dark, articles } = this.state;
    return (
      <Fragment>
        <ContextContext.Provider
          value={{
            theme: dark,
            articles: articles,
            switchTheme: this.switchTheme,
            fetchById: this.fetchById
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
