import theme from "styled-theming";

export const black = theme("mode", {
  false: "#fff",
  true: "#201c29"
});

export const white = theme("mode", {
  false: "hsl(209, 61%, 16%)",
  true: "#fff"
});

export const grey = theme("mode", {
  false: "hsl(209, 34%, 30%)",
  true: "#fff"
});

export const body = theme("mode", {
  false: "#e6edf1",
  true: "rgb(40, 44, 53)"
});

export const border = theme("mode", {
  false: " hsl(209, 61%, 16%)",
  true: " hsl(36, 77%, 49%)"
});
