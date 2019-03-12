import theme from "styled-theming";

export const black = theme("mode", {
  light: "#fff",
  dark: "rgb(28, 41, 56)"
});

export const white = theme("mode", {
  light: "hsl(209, 61%, 16%)",
  dark: "#fff"
});

export const grey = theme("mode", {
  light: "hsl(209, 34%, 30%)",
  dark: "#fff"
});

export const body = theme("mode", {
  light: "#E7EEF8",
  dark: "rgb(16, 23, 30) "
});

export const border = theme("mode", {
  light: " hsl(209, 61%, 16%)",
  dark: " hsl(36, 77%, 49%)"
});

export const footer = theme("mode", {
  light: "rgb(16, 23, 30)",
  dark: "#E7EEF8"
});

export const footerText = theme("mode", {
  dark: "",
  light: "#fff"
});
