"use client"

import { Button } from "@nextui-org/button";
import React, { useState } from 'react';
import { Input, Textarea } from '@nextui-org/input';
import jsPDF from 'jspdf';

export default function ComposePage() {
  const [items, setItems] = useState([{ description: '', quantity: '', rate: '', total: '' }]);

  const addLine = () => {
    setItems(prevItems => [
      ...prevItems,
      { description: '', quantity: '', rate: '', total: '' }
    ]);
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value
    };
    setItems(updatedItems);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    let y = 10;

    doc.text("Invoice", 10, y);
    y += 10;

    items.forEach((item, index) => {
      y += 10;
      doc.text(`Item ${index + 1}: ${item.description}, Quantity: ${item.quantity}, Rate: ${item.rate}, Total: ${item.total}`, 10, y);
    });

    doc.save("invoice.pdf");
  };

  return (
    <main className="flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-2"> 
        <h1 className="text-4xl font-bold text-gray-900">Create an Invoice</h1>
        <h2 className="text-lg font-medium text-gray-700">Start composing your registration</h2>
      </div>
      <div className="flex flex-col gap-2 w-[48rem]">
        <Input
          type="number"
          variant="bordered"
          label="Invoice number"
          size="lg"
          defaultValue="1"
          startContent={
            <div className="pointer-events-none flex items-center ps-0">
              <span className="text-default-400">07022023/</span>
            </div>
          }
        />
        <div className="w-full flex flex-row gap-2">
          <Input
            variant="bordered"
            size="lg"
            placeholder="mm/dd/yyyy"
            type="date"
            label="Issue Date"
          />
          <Input
            variant="bordered"
            size="lg"
            placeholder="mm/dd/yyyy"
            type="date"
            label="Due Date"
          />
        </div>
        <div className="w-full flex flex-row gap-2 ">
          <div className="flex flex-col items-start w-full">
            <Textarea
              size="lg"
              variant="bordered"
              label="Bill from"
              placeholder="Enter your contact details"
              className="max-w-xs"
            />
          </div>
          <div className="flex flex-col items-start w-full">
            <Textarea
              size="lg"
              variant="bordered"
              label="Bill To"
              placeholder="Enter the client details"
              className="max-w-xs"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 border-2 p-4 rounded-large">
          <h3 className="text-left">Items</h3>
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-4 gap-2">
              <Textarea
                variant="bordered"
                size="lg"
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
          <Button className="w-24 bg-foreground text-default" onClick={generatePDF}>
            Generate PDF
          </Button>
        </div>
      </div>
    </main>
  );
}
