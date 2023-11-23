import React from "react";

import SkeletonMUI from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Skeleton() {
  return (
    <Stack sx={{mt: 1}} width={250}>
      <SkeletonMUI variant="text" sx={{ fontSize: "1rem" }} />
      <SkeletonMUI variant="text" sx={{ fontSize: "1rem" }} />
    </Stack>
  );
}