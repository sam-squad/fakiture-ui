import { useState } from 'react';
import { Card, Textarea, Input, Button } from '@nextui-org/react';
import { Select } from '@nextui-org/react';
const ProductList = () => {
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {products.map((product, index) => (
        <Card key={index} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div>
            <h3>Description</h3>
            <Textarea
              value={product.description}
              onChange={(e) => handleChange(index, 'description', e.target.value)}
              placeholder="Enter description"
            />
          </div>
          <div>
            <h3>Quantity</h3>
            <Input
              value={product.quantity}
              onChange={(e) => handleChange(index, 'quantity', e.target.value)}
              placeholder="Quantity"
            />
          </div>
          <div>
            <h3>Rate</h3>
            <Input
              value={product.rate}
              onChange={(e) => handleChange(index, 'rate', e.target.value)}
              placeholder="Rate"
            />
          </div>
          <div>
            <h3>Total Price</h3>
            <Input
              value={product.totalPrice}
              onChange={(e) => handleChange(index, 'totalPrice', e.target.value)}
              placeholder="Total Price"
            />
          </div>
        </Card>
      ))}
      <Button onClick={addLine} style={{ marginTop: '20px' }}>Add Line</Button>

       <div>
            <h3>Payment Method</h3>
            <Select
            options={paymentOptions}
            placeholder="Select payment method"
            onChange={handlePaymentMethodChange}
            />
        </div>
    </div>
  );
};

export { ProductList };



