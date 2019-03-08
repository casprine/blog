import theme from "styled-theming";

export const black = theme("mode", {
  true: "#fff",
  false: "rgb(28, 41, 56)"
});

export const white = theme("mode", {
  true: "hsl(209, 61%, 16%)",
  false: "#fff"
});

export const grey = theme("mode", {
  true: "hsl(209, 34%, 30%)",
  false: "#fff"
});

export const body = theme("mode", {
  true: "#E7EEF8",
  false: "rgb(16, 23, 30) "
});

export const border = theme("mode", {
  true: " hsl(209, 61%, 16%)",
  false: " hsl(36, 77%, 49%)"
});

export const footer = theme("mode", {
  true: "rgb(16, 23, 30)",
  false: "#E7EEF8"
});

export const footerText = theme("mode", {
  false: "",
  true: "#fff"
});
