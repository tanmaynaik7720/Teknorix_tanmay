import React from "react";
import {
    Box,
    Grid,
    FilledInput,
    Select,
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    makeStyles,
    Typography,
    Button,
    IconButton,
    CircularProgress,
} from "@material-ui/core";
import {CallMissedSharp, Close as CloseIcon} from "@material-ui/icons";

const useStyles = makeStyles({

    info: {
        '& > *':{
            margin: '5px'
        }
    }


})

export default (props) => {
    const classes = useStyles();
    return(

    <Dialog open={!!Object.keys(props.job).length}  fullWidth>
        <DialogTitle>
            <Box display="flex" justifyContent="space-between" alignItems="center">
               {props.job.title} @ {props.job.companyName}
                <IconButton>
              <CloseIcon />
                </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
            <Box>
                <Box className={classes.info} display="flex">
                    <Typography variant="caption">Posted on:
                    </Typography>
                    <Typography variant="caption">{`${props.job.postedOn}`}
                    </Typography>
                </Box>
                <Box className={classes.info} display="flex">
                    <Typography variant="caption">Job type:
                    </Typography>
                    <Typography variant="caption">{props.job.location}
                    </Typography>
                </Box>
                <Box className={classes.info} display="flex">
                    <Typography variant="caption">Job Description:
                    </Typography>
                    <Typography variant="caption">{props.job.description}
                    </Typography>
                </Box>
                <Box className={classes.info} display="flex">
                    <Typography variant="caption">Company Name:
                    </Typography>
                    <Typography variant="caption">{props.job.companyName}
                    </Typography>
                </Box>
                <Box className={classes.info} display="flex">
                    <Typography variant="caption">Company Url:
                    </Typography>
                    <Typography variant="caption">{props.job.companyUrl}
                    </Typography>
                </Box>
            </Box>
        </DialogContent>
        <DialogActions>
<Button variant="outlined" component="a" href="https://teknorix.jobsoid.com/" target="_blank">Apply

</Button>
        </DialogActions>

    </Dialog>
)
}