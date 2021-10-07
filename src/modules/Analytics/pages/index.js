import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AnalyticsContainer from '../containers/analytics'


const useStyles = makeStyles({
  root: {},
});

const AnalyticsMainPage = () => {
  return (
    <AnalyticsContainer/>
  );
};

export default AnalyticsMainPage;