import React from 'react';
import { PDFDownloadLink  } from '@react-pdf/renderer';
import SkywalkerPdf from './SkywalkerPdf';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  downloadButton: {
      backgroundColor: '#3f51b5 !important',
      border: '#3f51b5 1px !important',
      borderRadius: '5px',
      color: '#fff !important',
      width: '100% !important',
      height: '100% !important',
      '&:hover': {
        backgroundColor: '#303f9f !important',
      }
  }
}));

const PdfForm = () => {
  const classes = useStyles();
  const [fetchedData, setFetchedData] = React.useState(null);
    const [update] = React.useState(0);
    React.useEffect(() => {
        fetch('https://swapi.dev/api/people/1/', {headers: { 'Content-Type': 'application/json'},})
            .then(response =>response.json())
            .then(data => {
                const {films, species, starships, vehicles, ...rest } = data;
                setFetchedData(rest);
            })
            .catch(error => console.log(error))
    },[update])

  return  (
      <div variant="contained" color="primary">
        {
           fetchedData ? (
            <PDFDownloadLink 
              document={<SkywalkerPdf data={fetchedData} />}
              fileName="Skywalker.pdf"
              style={{
                textDecoration: "none",
                padding: "10px",
                color: "#4a4a4a",
                backgroundColor: "#f2f2f2",
                border: "1px solid #4a4a4a"
              }}
              className={classes.downloadButton}
            >
              {({ blob, url, loading, error }) => 
                loading ? "Loading document..." : "Download PDF"
              }
            </PDFDownloadLink >
          )
          : (
            <div>Loading Pdf...</div>
          )
        }
      </div>
  )
};

export default PdfForm;