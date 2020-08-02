import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import PdfForm from '../PdfForm';

const PdfFormPage = () => {
    return (
        <React.Fragment>
            <h2>Welcome on PDF Form Page!</h2>
            <Typography variant="body1"> PDF component should render a pdf with dynamic data from <a href="https://swapi.dev/documentation">SWAPI</a> and be able to save data from interactive pdf-form.</Typography>
            <PdfForm />
            <Link to="/react_tests">
                <button>
                    Back to main page
                </button>
            </Link>
        </React.Fragment>
    )   
}

export default PdfFormPage;