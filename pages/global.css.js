import { createGlobalStyle } from "styled-components";
// import circular from "../static/fonts/ciruclar.ttf";
// import geo from "../static/fonts/geo.ttf";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "circular";
    src: url("../static/fonts/ciruclar.ttf");
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    scroll-behavior: smooth;
    color: #071e3d;
    font-family: "circular";
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
  
  .circular {

  }

`;

export default GlobalStyles;
