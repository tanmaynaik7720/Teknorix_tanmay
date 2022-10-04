import React from "react";
import { Box, Button, Select, MenuItem, makeStyles } from "@material-ui/core";

const useStyles =makeStyles(
    {
        wrapper:{
            backgroundColor:"#fff",
            display:"flex",
            boxShadow:"0px 1px 5px rgba(0,0,0,0.1)",
            borderRadius:"5px",
            "&>*":{
                flex:1,
                height:"45px",
                margin:"8px",
            },

        },
    }
);
export default (props) => {
    const classes = useStyles();
    return (
    <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
        <Select disableUnderline variant="filled" defaultValue="Full Time">
            <MenuItem value="Full Time">Full Time</MenuItem>
            <MenuItem value="Part Time">Part Time</MenuItem>
            <MenuItem value="Contract">Contract</MenuItem>
        </Select>
        <Select disableUnderline variant="filled" defaultValue="Department">
            <MenuItem value="Department">Front-end</MenuItem>
            <MenuItem value="Department">Back-end</MenuItem>
            <MenuItem value="Department">QA</MenuItem>
</Select>
            <Button variant="contained" color="primary" disableElevation>
                Search
            </Button>
           
        
    </Box>
    );
};