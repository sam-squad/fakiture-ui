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
    setItems(updatedItems);
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Facture
    doc.setFontSize(16);
    doc.text("Invoice", 105, 15);
    doc.setFontSize(12);
    doc.text(`Invoice Number: ${invoiceNumber}`, 15, 30);
    doc.text(`Issue Date: ${issueDate}`, 15, 45);
    doc.text(`Due Date: ${dueDate}`, 15, 60);
    doc.text(`Bill From: ${billFrom}`, 15, 75);
    doc.text(`Bill To: ${billTo}`, 15, 90);

    // Items
    doc.setFontSize(14);
    doc.text("Items", 105, 110);
    doc.setFontSize(12);
    let y = 120;
    items.forEach((item, index) => {
      doc.text(`Item ${index + 1}:`, 15, y);
      doc.text(`Description: ${item.description}`, 20, y + 10);
      doc.text(`Quantity: ${item.quantity}`, 20, y + 20);
      doc.text(`Rate: ${item.rate}`, 20, y + 30);
      doc.text(`Total: ${item.total}`, 20, y + 40);
      y += 60;
    });

    // Enregistrer le PDF
    doc.save("invoice.pdf");
  };

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
              <Input
                variant="bordered"
                size="lg"
                type="number"
                label="Total"
                value={item.total}
                onChange={(e) => handleItemChange(index, 'total', e.target.value)}
              />
            </div>
          ))}
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
