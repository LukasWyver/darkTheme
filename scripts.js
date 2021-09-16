const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getSyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
  bg: getSyle(html, "--bg"),
  bgPainel: getSyle(html, "--bg-painel"),
  colorHeadings: getSyle(html, "--color-headings"),
  colorText: getSyle(html, "--color-text"),
};

const darkMode = {
  bg: "#333333",
  bgPainel: "#434343",
  colorHeadings: "#3664FF",
  colorText: "#b5b5b5",
};

const transformKey = (key) =>
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
  Object.keys(colors).map((key) =>
    html.style.setProperty(transformKey(key), colors[key])
  );
};

checkbox.addEventListener("change", ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors);
});
