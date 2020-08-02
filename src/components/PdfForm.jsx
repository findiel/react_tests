import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
  },
}));

const PdfForm = () => {
  const classes = useStyles();
  return  (
    <div className={classes.root}>Hello PdfForm Component!</div>
  )
};

PdfForm.propTypes = {
};

PdfForm.defaultProps = {
};

export default PdfForm;