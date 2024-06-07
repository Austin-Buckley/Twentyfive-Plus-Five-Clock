import { Paper, styled } from "@mui/material/";
import {
  itemBgColor,
  itemBorder,
  itemBorderRadius,
  itemColor,
} from "./Theme.jsx";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: itemColor,
  border: itemBorder,
  padding: theme.spacing(1.5),
  backgroundColor: itemBgColor,
  borderRadius: itemBorderRadius,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
}));

export default Item;
