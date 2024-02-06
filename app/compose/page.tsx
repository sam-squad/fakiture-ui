"use client"
import React, { useState } from 'react';
import { title } from "@/components/primitives";
import { Input } from "@nextui-org/react";
import { CardWithBillingInfo } from "./BillInformation";
import { ProductList } from './Product';
import { Card, Textarea, Button } from '@nextui-org/react';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";

export default function ComposePage() {
  const initialBillingInfo = { billFrom: "", billTo: "" };

  const [products, setProducts] = useState([
    { description: '', quantity: '', rate: '', totalPrice: '' }
  ]);

  const addLine = () => {
    setProducts([...products, { description: '', quantity: '', rate: '', totalPrice: '' }]);
  };
  
  const handleChange = (index: number, field: string, value: string) => {
    const updatedProducts = [...products];
    updatedProducts[index] = {
      ...updatedProducts[index],
      [field]: value
    };
    setProducts(updatedProducts);
  };
  
  return (
    <div style={{ margin: "20px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div>
        <h1 className={title()}>INVOICES</h1>
      </div>
      <div style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div>
          <Input
            type="number"
            label="Invoice Number"
            placeholder="12B95AC"
            labelPlacement="outside"
			
          />
			<div style={{ width: "100%", display: "flex", flexDirection:"row" , marginTop:"20px"}}>
				<Input
					type="date"
					label="Issue bill date"
					placeholder="02/12/2004"
					labelPlacement="outside"
					className="mb-4"
				/>
				<Input
					type="date"
					label="Due Date"
					placeholder="12/03/2024"
					labelPlacement="outside"
				/>
			</div>
       
			<div>
			<CardWithBillingInfo initialBillingInfo={initialBillingInfo} />
			</div>
		</div>
      </div>
      <div className="custom-form-container" style={{ width: "100%", marginTop: "20px" }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', width: "100%" }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '20px', width: '100%' }}>
            <div><h3>Description</h3></div>
            <div><h3>Quantity</h3></div>
            <div><h3>Rate</h3></div>
            <div><h3>Total Price</h3></div>
            {products.map((product, index) => (
              <React.Fragment key={index}>
                <div>
                  <Textarea
                    value={product.description}
                    onChange={(e) => handleChange(index, 'description', e.target.value)}
                    placeholder="Enter description"
                    style={{ width: "100%" }}
                  />
                </div>
                <div>
                  <Input
                    value={product.quantity}
                    onChange={(e) => handleChange(index, 'quantity', e.target.value)}
                    placeholder="Quantity"
                  />
                </div>
                <div>
                  <Input
                    value={product.rate}
                    onChange={(e) => handleChange(index, 'rate', e.target.value)}
                    placeholder="Rate"
                  />
                </div>
                <div>
                  <Input
                    value={product.totalPrice}
                    onChange={(e) => handleChange(index, 'totalPrice', e.target.value)}
                    placeholder="Total Price"
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
          <Button onClick={addLine} style={{ marginTop: '20px', width: "100%" }}>Add Line</Button>

		<div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
			<h2 style={{ marginRight: '20px' }}>Payment Method :</h2>
			<Dropdown>
				<DropdownTrigger>
				<Button variant="bordered">
					Select Payment
				</Button>
				</DropdownTrigger>
				<DropdownMenu aria-label="Static Actions">
				<DropdownItem key="new">Paypal</DropdownItem>
				<DropdownItem key="copy">Especes</DropdownItem>
				<DropdownItem key="edit">Mobile Money</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
		<div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
			<div style={{ marginRight: '20px' }}>
				<h3>Subtotal:</h3>
				<Input placeholder="Subtotal amount" />
			</div>
			<div>
				<h3>Taxe:</h3>
				<Input placeholder="Tax amount" />
			</div>
		</div>

	</div>
</div>
	
 </div>
  );
}
