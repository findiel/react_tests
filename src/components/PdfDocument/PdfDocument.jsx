import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { PDFViewer, PDFDownloadLink, BlobProvider  } from '@react-pdf/renderer';
import MyPdf from './MyPdf';

const useStyles = makeStyles(theme => ({
  root: {
  },
}));

const PdfForm = () => {
  const classes = useStyles();

  const [fetchedData, setFetchedData] = React.useState(null);
    const [update] = React.useState(0);
    React.useEffect(() => {
        //https://swapi.dev/api/people/1/
        fetch('https://swapi.dev/api/people/1/', {headers: { 'Content-Type': 'application/json'},})
            .then(response =>response.json())
            .then(data => {
                const {films, species, starships, vehicles, ...rest } = data;
                setFetchedData(rest);
            })
            .catch(error => console.log(error))
    },[update])

    fetchedData && console.log(fetchedData)
  
  return  (
    <React.Fragment>
      <div>
        {
           fetchedData ? (
            <PDFDownloadLink 
              document={<MyPdf data={fetchedData} />}
              fileName="movielist.pdf"
              style={{
                textDecoration: "none",
                padding: "10px",
                color: "#4a4a4a",
                backgroundColor: "#f2f2f2",
                border: "1px solid #4a4a4a"
              }}
            >
              {({ blob, url, loading, error }) => 
                loading ? "Loading document..." : "Download Pdf"
              }
            </PDFDownloadLink >
          )
          : (
            <div>Loading Pdf...</div>
          )
        }
      </div>
    </React.Fragment>
  )
};

PdfForm.propTypes = {
};

PdfForm.defaultProps = {
};

export default PdfForm;

//https://react-pdf.org/