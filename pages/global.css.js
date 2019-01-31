import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "meduim";
    src: url("../static/fonts/CeraPro-Medium.ttf");
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }


  @font-face {
    font-family: "regular";
    src: url("../static/fonts/CeraPro-Regular.ttf");
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }


  @font-face {
    font-family: 'Book';
    src:  url('../static/fonts/geomanist-book.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }

  .regular {
    font-family: "geo";
  }
  .meduim {
    font-family:"meduim";
  }

  .book{
    font-family: "Book";
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    scroll-behavior: smooth;
    color: #071e3d;
    font-family: "circular";
    background: #e6edf1;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
  }

  .flex-wrap {
    display: flex;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  ul {
    li {
      list-style: none;
    }
  }

.grid-base,
.grid-3 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.grid-3 > * {
  width: -webkit-calc(33.33% - 2 * 40px/3);
  width: calc(33.33% - 2 * 40px / 3);
  margin: 20px 0;
}
.grid-3 > *:nth-child(3n + 2) {
  margin-left: 40px;
  margin-right: 40px;
}

@media only screen and (max-width: 1420px) {
  .grid-3 > * {
    width: -webkit-calc(50% - 40px/2);
    width: calc(50% - 40px / 2);
  }
  .grid-3 > *:nth-child(3n + 2) {
    margin-left: auto;
    margin-right: auto;
  }
  .grid-3 > *:nth-child(2n + 1) {
    margin-right: 40px;
  }
}
@media only screen and (max-width: 740px) {
  .grid-3 > * {
    width: 100%;
  }
  .grid-3 > *:nth-child(2n + 1) {
    margin-right: auto;
  }
}

.padding {
  padding: 40px 90px;
  width: 90vw;
  margin-right: auto;
  margin-left: auto;
}
.padding-side {
  width: 85vw;
  margin-right: auto;
  margin-left: auto;
}
.padding-top {
  padding-top: 40px;
}
.padding-bottom {
  padding-bottom: 40px;
}

a {
  text-decoration: none;
  color: $primary;
}

.pointer {
  cursor:pointer;
}

`;

export default GlobalStyles;
