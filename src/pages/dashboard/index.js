import React,{useEffect} from "react";
import { Grid, makeStyles } from "@material-ui/core";
import DashboardCard from "components/cards";

import Bargraph from "../../common/Bargraph"
//redux
import { useDispatch, useSelector } from "react-redux";
//  actions
import {firestoreCall} from "../../stores/actions/dashboardAction";


const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(1, 3),
      display: "flex",
      flexDirection: "row",
    },
    grid: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyItems: "flex-start",
    },
  }),
  { index: 1 }
);

const DashboardPage = () => {

  
  const isLogged = useSelector((state) => state.login.isLogged);
  const parsedData = useSelector((state) => state.dashBoard.data);  //parsed data for dqshboard component


console.log(parsedData)


  useEffect(() => {   


    if (isLogged) {
    dispatch(firestoreCall())
       
    }

     
  }, [isLogged]);

  const dispatch = useDispatch();
  const cl = useStyles();

  return (
    <Grid item xs classes={{ root: cl.root }}>
      <Grid item xs classes={{ root: cl.grid }}>
        <DashboardCard mini header="Title">
          content
        </DashboardCard>
        <DashboardCard mini><Bargraph data ={parsedData?parsedData.distanceData:null}/></DashboardCard> 
        <DashboardCard mini>card</DashboardCard>
        <DashboardCard>card</DashboardCard>
        <DashboardCard>card</DashboardCard>
        <DashboardCard>card</DashboardCard>
      </Grid>
      <Grid item xs={10} md={3} classes={{ root: cl.grid }}>
        <DashboardCard>card</DashboardCard>
        <DashboardCard>card</DashboardCard>
        <DashboardCard>card</DashboardCard>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
