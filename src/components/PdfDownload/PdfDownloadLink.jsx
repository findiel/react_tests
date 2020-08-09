import React from 'react';
import { PDFDownloadLink  } from '@react-pdf/renderer';
import SkywalkerPdf from './SkywalkerPdf';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  downloadButton: {
      backgroundColor: '#3f51b5 !important',
      border: 'none !important',
      color: '#fff !important',
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

    fetchedData && console.log(fetchedData)
  
  return  (
      <Button variant="contained" color="primary">
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
                loading ? "Loading document..." : "Download Pdf"
              }
            </PDFDownloadLink >
          )
          : (
            <div>Loading Pdf...</div>
          )
        }
      </Button>
  )
};

export default PdfForm;