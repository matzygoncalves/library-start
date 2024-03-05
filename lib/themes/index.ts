import gray10 from "./gray10";
import gray100 from "./gray100";
import gray90 from "./gray90";
import white from "./white";
import White from "./whiteTypes";

const themes: { [key: string]: White } = {
  default: white,
  white: white,
  gray10: gray10,
  gray90: gray90,
  gray100: gray100,
};

console.log(themes);

const activeTheme: string | null = localStorage.getItem("@app:activeTheme");
console.log(activeTheme);

const theme = activeTheme ? themes[activeTheme] : themes.default;

if (theme === null) {
  throw new Error("Active theme is not defined");
}

export default theme;
