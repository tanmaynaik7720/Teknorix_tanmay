import React from "react";
import { Box, Grid, Typography, Button, makeStyles } from "@material-ui/core";
import { ZoomOutTwoTone } from "@material-ui/icons";



const useStyles = makeStyles((theme)=>({
    wrapper:{
        border:'1px solid #e8e8e8',
    },
companyName: {
fontSize:"13.5px",
backgroundColor: theme.palette.primary.main,
padding: theme.spacing(0.75),
borderRadius:"5px",
display:"inline-block",
fontWeight: 600,
},
skillChip:{
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: "14.5px",
    borderRadius:"5px",
    transition: ".3s",
    fontWeight: 600,
    backgroundColor: theme.palette.secondary.main,
    color:"#fff",

},
    }
));
export default (props) => {
const classes = useStyles()
    return(
        <Box p={2} className={classes.wrapper}>
            <Grid container alignItems="center">
            <Grid item x6>
            <Typography variant="subtitle1">{props.title}</Typography>
            <Typography className={classes.companyName} variant="subtitle1">{props.companyName}</Typography>
            </Grid>
            
            <Grid item container x6>
                {props.skills.map((skill) => (<Grid key={skill} className={classes.skillChip} item>{skill}</Grid>))}
            </Grid>
            <Grid item container x6>
                <Grid item>
                <Typography>
                    <Button pr={1} variant="outlined" component="a" href="https://teknorix.jobsoid.com/" target="_blank">Apply</Button>
                    <Button onClick={props.open} variant="outlined">View</Button>
                </Typography>
                </Grid>
            </Grid>
                

                

            </Grid>
        </Box>
    )
}