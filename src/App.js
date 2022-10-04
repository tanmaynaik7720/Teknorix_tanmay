import React from "react";
import { Box, Grid, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./components/Header/index";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/Job/JobCard";
import jobData from './dummyData';
import ViewJobModal from "./components/Job/ViewJobModal";
import { useState } from "react";


export default () => {
  const [viewJob, setViewJob] = useState({});
  return( <ThemeProvider theme={theme}>
    <Header />
    <ViewJobModal job={viewJob} closeModal={()=>setViewJob({})} />
    <Grid container justify="center">
    <Grid item x6={10}>
      <SearchBar />
      {jobData.map(job => <JobCard open={() => setViewJob(job)} key={job.id}{...job} />)}
      
    </Grid>
    </Grid>
  </ThemeProvider>
  );
};
