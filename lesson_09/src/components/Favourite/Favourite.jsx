import React from "react";

import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";

import useTodos from "./../../hooks/useTodos";

export default function Favourite() {
  const { favourites } = useTodos();

  return (
    <Badge
      sx={{ mt: 1, ml: 1 }}
      badgeContent={favourites.length}
      color="primary"
    >
      <FavoriteIcon color="action" />
    </Badge>
  );
}
