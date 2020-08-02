import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import SignatureCanvas from '../SignatureCanvas';

const SignatureCanvasPage = () => {
    return (
        <div>
            <h2>Welcome on Signature Canvas Page!</h2>
            <Grid container justify="center">
                <Grid item>
                    <SignatureCanvas />
                </Grid>
            </Grid>
            <Link to="/react_tests">
                <button>
                    Back to main page
                </button>
            </Link>
        </div>
    )   
}

export default SignatureCanvasPage;