import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import PdfDocument from '../PdfDocument/PdfDocument';
import Grid from '@material-ui/core/Grid';

const PdfViewPage = () => {
    return (
        <React.Fragment>
            <h2>Welcome on PDF Form Page!</h2>
            <Typography variant="body1"> PDF component should render a pdf with dynamic data from <a href="https://swapi.dev/documentation">SWAPI</a> and be able to save data from interactive pdf-form.</Typography>
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    <PdfDocument />
                </Grid>
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