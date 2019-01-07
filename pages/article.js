import React, { Fragment, Component } from "react";
import { Layout } from "../src/components/common/index";
import { ArticleView } from "../src/components/article/index";
import { Footer, Navbar } from "../src/components/navigation/index";
import { ContextConsumer } from "../src/context/index";
import { withRouter } from "next/router";

class Article extends Component {
  state = {
    article: null,
    id: this.props.id
  };
  render() {
    return (
      <Fragment>
        <Layout>
          <Navbar />
          {/* <Tags /> */}
          <ContextConsumer>
            {({ articles }) => {
              const article = articles.filter(article => {
                return article.id === this.props.id;
              });
              return <ArticleView {...article} />;
            }}
          </ContextConsumer>
          <Footer />
        </Layout>
      </Fragment>
    );
  }
}

Article.getInitialProps = async function(context) {
  const { id } = context.query;
  return {
    id: id
  };
};
export default withRouter(Article);
