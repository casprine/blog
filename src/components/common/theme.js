import theme from "styled-theming";

export const black = theme("mode", {
  false: "#fff",
  true: "#201c29"
});

export const white = theme("mode", {
  false: "#201c29",
  true: "#fff"
});
