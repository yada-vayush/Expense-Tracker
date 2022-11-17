import React,{useContext}from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import { ExpenseTrackerContext } from "../../context/context";
import Form from './Form/Form'
import useStyles from "./styles";
import List from "./List/List";
import InfoCard from "../../Snackbar/InfoCard";
const Main = () => {
  const classes = useStyles();
  const{ balance}=useContext(ExpenseTrackerContext)
  return (
    <div>
      <Card className="classses.root">
        <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
        <CardContent>
          <Typography align="center" variant="h5">
            Total Balance ₹{balance}
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ lineHeight: "1.5em", marginTop: "20px" }}
          >
           <InfoCard></InfoCard>
          </Typography>
          <Divider></Divider>
          <Form></Form>
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {/*List */}
                    <List></List>
                </Grid>
            </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Main;
