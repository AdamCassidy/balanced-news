import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    center: {
      display: "flex",
      justifyContent: "center",
    },
  })
);

export const NotFound = () => {
  const classes: ClassNameMap<"center"> = useStyles();
  return (
    <div>
      <Typography variant="h2" className={classes.center}>
        Error 404 Not Found
      </Typography>
    </div>
  );
};
