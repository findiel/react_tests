import React from 'react';
import PropTypes from 'prop-types';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Checkbox from '@material-ui/core/Checkbox';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
  },
  header: {
    margin: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    color: '#fff',
    backgroundColor: '#000'
  },
  dataHeader: {
    margin: 10,
  },
  data: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
  }
});

const MyPdf = ({fetchedData}) => {
    
    React.useEffect(() => {
        console.log(fetchedData)
    })

  return  (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text>My example PDF</Text>
            </View>
            <View style={styles.dataHeader}>
                <Text>Data fetched from SWAPI:</Text>
            </View>
            <View style={styles.data}>
                <Text>First Name</Text>
                <Text>{fetchedData && fetchedData.name}</Text>
            </View>
            <View style={styles.data}>
                {fetchedData && Object.keys(fetchedData).map(key => {
                    return <Text key={key}>`${key}: ${fetchedData[key]}`</Text>
                })}
            </View>
        </Page>
  </Document>
  )
};

MyPdf.propTypes = {
};

MyPdf.defaultProps = {
};

export default MyPdf;