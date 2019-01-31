import theme from "styled-theming";

export const black = theme("mode", {
  false: "#fff",
  true: "#201c29"
});

export const white = theme("mode", {
  false: "#33335a",
  true: "#fff"
});

export const grey = theme("mode", {
  false: "rgb(84, 94, 111)",
  true: "#fff"
});

export const body = theme("mode", {
  false: "#e6edf1",
  true: "#000000"
});
