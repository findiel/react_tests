import React from 'react';
import PropTypes from 'prop-types';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

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
  dataContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  data: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
  }
});

const MyPdf = (data) => {

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
                <Text>First Name: </Text>
                {data && (
                    <Text>{data && data.data && data.data.name}</Text>
                )}
            </View>
            {data && data.data && (
              <View style={styles.data}>
                <View style={styles.dataContainer}>
                  {data.data && Object.keys(data.data).map(key => {
                      return (
                          <Text key={key}>{`${key}: ${data.data[key]}`}</Text>
                          )
                        })}
                </View>
              </View>
            )}
        </Page>
  </Document>
  )
};

MyPdf.propTypes = {
  data: PropTypes.shape({})
};

MyPdf.defaultProps = {
  data: {}
};

export default MyPdf;