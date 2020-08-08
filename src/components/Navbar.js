import React from 'react';
import { NavLink  } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  link: {
      color: '#fff'
  },
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Grid container justify="space-around">
                <Grid item>
                    <NavLink className={classes.link} to="/react_tests">
                        <Typography variant="body1">HOME</Typography>
                    </NavLink >
                </Grid>
                <Grid item>
                    <NavLink className={classes.link} to="/react_tests/todo">
                        <Typography variant="body1">TODO</Typography>
                    </NavLink >
                </Grid>
                <Grid item>
                    <NavLink className={classes.link} to="/react_tests/carousel">
                    <Typography variant="body1">CAROUSEL</Typography>
                    </NavLink >
                </Grid>
                <Grid item>
                    <NavLink className={classes.link} to="/react_tests/signature">
                        <Typography variant="body1">SIGNATURE CANVAS</Typography>
                    </NavLink >
                </Grid>
                <Grid item>
                    <NavLink className={classes.link} to="/react_tests/pdf-document">
                        <Typography variant="body1">PDF FORM</Typography>
                    </NavLink >
                </Grid>
                <Grid item>
                    <NavLink className={classes.link} to="/react_tests/tests">
                        <Typography variant="body1">TESTS</Typography>
                    </NavLink >
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default Navbar;