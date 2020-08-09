import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import PdfDownloadLink from '../PdfDownload/PdfDownloadLink';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    pdfDownloadLinkWrapper: {
        padding: theme.spacing(3),
    }
}));

const PdfViewPage = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <h2>Welcome on PDF Test Page!</h2>
            <Grid container direction="column" alignItems="center">
                <Typography variant="body1">1. PdfDownloadLink should let you download pdf with dynamic data from <a href="https://swapi.dev/documentation">SWAPI</a></Typography>
                <div className={classes.pdfDownloadLinkWrapper}>
                    <PdfDownloadLink />
                </div>
                <Typography variant="body1">2. PdfCanvas should render PDF file on canvas </Typography>
                <Grid item>
                    <Link to="/react_tests">
                        <button>
                            Back to main page
                        </button>
                    </Link>
                </Grid>
            </Grid>
        </React.Fragment>
    )   
}

export default PdfViewPage;