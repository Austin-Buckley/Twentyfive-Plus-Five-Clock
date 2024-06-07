import { createTheme } from "@mui/material/styles";

const getCssVariableValue = (variable) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable);
};

export const itemBgColor = getCssVariableValue("--item-bg");
export const itemColor = getCssVariableValue("--item-color");
export const itemBorderRadius = getCssVariableValue("--item-br");
export const itemAlign = getCssVariableValue("--item-align");
export const itemJustify = getCssVariableValue("--item-justify");
export const itemDisplay = getCssVariableValue("--item-display");
export const itemDirection = getCssVariableValue("--item-direction");
export const itemBorder = getCssVariableValue("--item-border");

export const theme = createTheme({
  palette: {
    button: {
      main: "#90a4ae",
    },
  },
});
