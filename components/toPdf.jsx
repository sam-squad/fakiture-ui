import React from 'react';
import { Document, Page, Text, View, PDFViewer } from '@react-pdf/renderer';

const MyDocument = ({ invoiceData }) => (
  <Document>
    <Page size="A4">
      <View>
        <Text>Invoice Number: {invoiceData.invoiceNumber}</Text>
        <Text>Issue Date: {invoiceData.issueDate}</Text>
        <Text>Due Date: {invoiceData.dueDate}</Text>
        <Text>Bill From: {invoiceData.billFrom}</Text>
        <Text>Bill To: {invoiceData.billTo}</Text>
        <Text>Items:</Text>
        {invoiceData.items.map((item, index) => (
          <View key={index}>
            <Text>Description: {item.description}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>Rate: {item.rate}</Text>
            <Text>Total: {item.quantity * item.rate}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);
