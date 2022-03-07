/**
 *
 * AppWrapper
 *
 */

import { makeStyles } from "@material-ui/core/styles";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    position: "relative",
    backgroundColor: theme.mainBg,
  },
}));

const AppWrapper = ({ children }) => {
  const classes = useStyles();

  return <div className="bg-primary">{children}</div>;
};

export default AppWrapper;
