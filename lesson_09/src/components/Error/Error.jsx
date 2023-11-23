import React from "react";

import Alert from "@mui/material/Alert";

export default function Error({ value }) {
  return <Alert sx={{mt:1, width: 300}} severity="error">{value}</Alert>;
}
