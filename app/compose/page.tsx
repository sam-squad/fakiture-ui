"use client"
import { Button } from "@nextui-org/button";
import React, { useState } from 'react';
import {  Input, Textarea } from '@nextui-org/input';
import jsPDF from 'jspdf';

export default function ComposePage() {
  const [items, setItems] = useState([{ description: '', quantity: '', rate: '', total: '' }]);
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [billFrom, setBillFrom] = useState('');
  const [billTo, setBillTo] = useState('');

  const addLine = () => {
    setItems(prevItems => [
      ...prevItems,
      { description: '', quantity: '', rate: '', total: '' }
    ]);
  };

  const handleItemChange = (index: number, field: string, value: string) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value
    };
    if (field === 'quantity' || field === 'rate') {
      const quantity = parseFloat(updatedItems[index].quantity);
      const rate = parseFloat(updatedItems[index].rate);
      updatedItems[index].total = (quantity * rate).toFixed(2);
    }
    setItems(updatedItems);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
  
    // Colors
    const primaryColor = '#8e7155'; // Neutral Brown
    const secondaryColor = '#af9b89'; // Light Beige
    const backgroundColor = '#f5f5f5'; // Beige Background
    const textColor = '#333333'; // Black Text
  
    // Font Styles
    const fontFamily = 'Helvetica';
    const fontSizeTitle = 18;
    const fontSizeSubTitle = 14;
    const fontSizeText = 12;
  
    // Invoice Header
    doc.setFillColor(primaryColor);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setFont(fontFamily, 'bold');
    doc.setFontSize(fontSizeTitle);
    doc.setTextColor('#fff');
    doc.text("INVOICE", 105, 25, null, null);
  
    // Invoice Information
    doc.setFont(fontFamily, 'normal');
    doc.setFontSize(fontSizeText);
    doc.setTextColor(textColor);
    doc.text(`Invoice Number: ${invoiceNumber}`, 15, 60);
    doc.text(`Issue Date: ${issueDate}`, 15, 70);
    doc.text(`Due Date: ${dueDate}`, 15, 80);
  
    // Invoice Content
    doc.text(`Billed To: ${billTo}`, 15, 100);
    doc.text(`Billed From: ${billFrom}`, 15, 110);
  
    // Invoice Details Section
    doc.setFillColor(secondaryColor);
    doc.setDrawColor(secondaryColor);
    doc.setLineWidth(0.5);
    doc.setLineHeightFactor(1.2);
    doc.roundedRect(10, 125, 190, 10, 3, 3, 'FD'); // Rounded rectangle with border radius
    doc.setTextColor('#fff');
    doc.setFontSize(fontSizeSubTitle);
    doc.text("Invoice Details", 105, 130, null , null);
  
    // Invoice Items
    doc.setFont(fontFamily, 'normal');
    doc.setTextColor(textColor);
    let startY = 140;
    items.forEach((item, index) => {
      const x = 15;
      const y = startY + index * 10;
      doc.text(`Description: ${item.description}`, x, y);
      doc.text(`Quantity: ${item.quantity}`, x + 80, y);
      doc.text(`Rate: ${item.rate}`, x + 120, y);
      doc.text(`Total: ${item.total}`, x + 160, y);
      doc.text(`Grand Total: ${grandTotal}`, 105, 270, null, null, "center");
    });
  
    // Download PDF Button
    doc.setFillColor(primaryColor);
    doc.rect(80, 250, 50, 15, 'F');
    doc.setTextColor('#fff');
    doc.setFontSize(fontSizeText);

  
   
    // Save PDF
    doc.save("invoice.pdf");
  };

  // Calculate grand total
  const grandTotal = items.reduce((acc, item) => {
    const total = !isNaN(parseFloat(item.quantity)) && !isNaN(parseFloat(item.rate)) ?
      (parseFloat(item.quantity) * parseFloat(item.rate)) : 0;
    return acc + total;
  }, 0).toFixed(2);

  return (
    <main className="flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-gray-900">Create an Invoice</h1>
        <h2 className="text-lg font-medium text-gray-700">Start composing your registration</h2>
      </div>
      <div className="flex flex-col gap-2 w-[48rem]">
        {/* Inputs pour les informations de facturation */}
        <Input
          type="number"
          variant="bordered"
          label="Invoice number"
          size="lg"
          value={invoiceNumber}
          onChange={(e) => setInvoiceNumber(e.target.value)}
        />
        <div className="w-full flex flex-row gap-2">
          <Input
            variant="bordered"
            size="lg"
            placeholder="mm/dd/yyyy"
            type="date"
            label="Issue Date"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
          />
          <Input
            variant="bordered"
            size="lg"
            placeholder="mm/dd/yyyy"
            type="date"
            label="Due Date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-row gap-2">
          <Textarea
            size="lg"
            variant="bordered"
            label="Bill from"
            placeholder="Enter your contact details"
            className="max-w-xs"
            value={billFrom}
            onChange={(e) => setBillFrom(e.target.value)}
          />
          <Textarea
            size="lg"
            variant="bordered"
            label="Bill To"
            placeholder="Enter the client details"
            className="max-w-xs"
            value={billTo}
            onChange={(e) => setBillTo(e.target.value)}
          />
        </div>
        {/* Inputs pour les items */}
        <div className="flex flex-col gap-2 border-2 p-4 rounded-large">
          <h3 className="text-left">Items</h3>
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-4 gap-2">
              <Input
                variant="bordered"
                size="lg"
                type="text"
                label="Description"
                value={item.description}
                onChange={(e) => handleItemChange(index, 'description', e.target.value)}
              />
              <Input
                variant="bordered"
                size="lg"
                type="number"
                label="Quantity"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
              />
              <Input
                variant="bordered"
                size="lg"
                type="number"
                label="Rate"
                value={item.rate}
                onChange={(e) => handleItemChange(index, 'rate', e.target.value)}
              />
              <span className="border border-gray-300 px-2 py-1 rounded-lg flex items-center justify-center h-full">
                Total: {item.total}
              </span>
            </div>
          ))}
          {/* Display grand total */}
          <div className="border-t border-gray-300 pt-2 mt-4">
            <span className="font-bold">Grand Total:</span> {grandTotal}
          </div>
          <Button className="w-24 bg-foreground text-default" onClick={addLine}>
            Add a line
          </Button>
        </div>
        <Button className="w-24 bg-foreground text-default mx-auto my-4" onClick={generatePDF}>
          Generate PDF
        </Button>
      </div>
    </main>
  );
}
