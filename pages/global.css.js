import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Book';
    src:  url('../static/fonts/geomanist-book.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }


  @font-face {
    font-family: 'Inter';
    src:  url('../static/fonts/Inter.var.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }


  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    scroll-behavior: smooth;
    font-family: "meduim";
    font-feature-settings:"calt", "kern", "liga";
  }

  .articles{
    margin:30px 0 50px 0 !important;
  }

 
  .book{
    font-family: "Book";
  }

  .inter{
    font-family:"Inter";
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

.pointer {
  cursor:pointer;
}
code[class*="language-"],
pre[class*="language-"] {
	color: #ccc;
	background: none;
	font-family:  Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;
	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;
	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
  background: #0f111a;


  @media (max-width: 750px) {
    *{
      font-size:13px !important;
      }
  }
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
}



pre{
  min-width: inherit;
  position: relative;
  z-index: 1;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.55) 0px 20px 68px;
  }

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #0f111a;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #999;
}

.token.punctuation {
	color: #ccc;
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
	color: #e2777a;
}

.token.function-name {
	color: #6196cc;
}

.token.boolean,
.token.number,
.token.function {
	color: #f08d49;
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
	color: #f8c555;
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
	color: #cc99cd;
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable {
	color: #7ec699;
}

.token.operator,
.token.entity,
.token.url {
	color: #67cdcc;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

.token.inserted {
	color: green;
}

`;

export default GlobalStyles;
