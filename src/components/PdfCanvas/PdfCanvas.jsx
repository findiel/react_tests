import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import SkywalkerPDF from '../../assets/pdfFile/Skywalker.pdf';
import { Document, Page, pdfjs } from "react-pdf";
var pdfjsLib = require("pdfjs-dist");


const useStyles = makeStyles(theme => ({
  root: {
  },
}));

// Setting worker path to worker bundle.
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfCanvas = ({}) => {
  const classes = useStyles();
  const canvas = React.createRef();

  React.useEffect(() => {
    var loadingTask = pdfjs.getDocument( '../../assets/pdfFile/React.js.pdf');
    if(canvas && canvas.current) {
        console.log(canvas)
        loadingTask.promise.then(doc => {
            doc.getPage(1).then(page => {
                const context = canvas.current.getContext("2d");

                const viewport = page.getViewport(1);
                canvas.current.width = viewport.width;
                canvas.current.height = viewport.height;

                const renderTask = page.render({
                    canvasContext: context,
                    viewport: viewport,
                })
                return renderTask.promise;
            })
        })
        .catch(function (reason) {
            console.error("Error: " + reason);
        });
    }
  },[canvas])

  return  (
    <canvas ref={canvas} id="pdfCanvas"></canvas>
  )
};

PdfCanvas.propTypes = {
};

PdfCanvas.defaultProps = {
};

export default PdfCanvas;