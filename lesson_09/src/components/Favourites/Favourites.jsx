import React from "react";

import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";

import useFavourite from "./../../hooks/useFavourite";

export default function Favourites() {
  const favourites = useFavourite();
  return (
    <Badge
      sx={{ mt: 2, ml: 2 }}
      badgeContent={favourites.length}
      color="primary"
    >
      <FavoriteIcon color="action" />
    </Badge>
  );
}