import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { PDFViewer } from '@react-pdf/renderer';
import MyPdf from './MyPdf';

const useStyles = makeStyles(theme => ({
  root: {
  },
}));

const PdfForm = () => {
  const classes = useStyles();
  const [fetchedData, setFetchedData] = React.useState(null);
  // fetch("https://swapi.dev/api/people/1/", {headers: { 'Content-Type': 'application/json'},})
  //       .then(response =>response.json())
  //       .then(data => {
  //           const {films, species, starships, vehicles, ...rest } = data;
  //           setFetchedData(rest);
  //       })
  //       .catch(error => console.log(error))
  return  (
    <PDFViewer width="1000" height="500">
      <MyPdf fetchedData={fetchedData}/>
    </PDFViewer>
  )
};

PdfForm.propTypes = {
};

PdfForm.defaultProps = {
};

export default PdfForm;

//https://react-pdf.org/