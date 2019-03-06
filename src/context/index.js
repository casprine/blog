import React, { Component, Fragment } from "react";
import { day } from "../utils/helpers";
import data from "../../posts.json";

const ContextContext = React.createContext();

class ContextProvider extends Component {
  state = {
    dark: !day,
    artiles: null,
    currentArticle: null,
    footer: false
  };

  componentWillMount() {
    const posts = Object.values(data);
    this.setState({
      articles: posts
    });
  }

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

  fetchById = id => {
    console.log(this.state.articles, id);
    // return id;
  };

  render() {
    const { dark, articles, footer } = this.state;
    return (
      <Fragment>
        <ContextContext.Provider
          value={{
            theme: dark,
            footer: footer,
            articles: articles,
            toggleTheme: this.toggleTheme,
            fetchById: this.fetchById,
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
