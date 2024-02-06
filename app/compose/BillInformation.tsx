import { useState } from 'react';
import { Card, Input, Button } from '@nextui-org/react';

interface BillingInfo {
  billFrom: string;
  billTo: string;
}

interface CardWithBillingInfoProps {
  initialBillingInfo: BillingInfo;
}

const CardWithBillingInfo: React.FC<CardWithBillingInfoProps> = ({ initialBillingInfo }) => {
  const [billingInfo, setBillingInfo] = useState<BillingInfo>(initialBillingInfo);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editModeBillFrom, setEditModeBillFrom] = useState<boolean>(false);
  const [editModeBillTo, setEditModeBillTo] = useState<boolean>(false);

  const handleEdit = (field: 'billFrom' | 'billTo') => {
    if (field === 'billFrom') {
      setEditModeBillFrom(true);
    } else if (field === 'billTo') {
      setEditModeBillTo(true);
    }
  };

  const handleSave = () => {
    setEditMode(false);
    setEditModeBillFrom(false);
    setEditModeBillTo(false);
    // Ici, vous pouvez ajouter la logique pour sauvegarder les informations de facturation
    // par exemple, en appelant une fonction de sauvegarde sur votre API
  };

  const handleChange = (field: keyof BillingInfo, value: string) => {
    setBillingInfo(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h2>Bill From</h2>
          <Input
            value={billingInfo.billFrom}
            onChange={(e) => handleChange('billFrom', e.target.value)}
            disabled={!editModeBillFrom}
            placeholder={editModeBillFrom ? '' : 'Edit'}
            startContent={editModeBillFrom ? (
              <Button  onClick={() => handleSave()}>Save</Button>
            ) : null}
          />
        </div>
        <div>
          <h2>Bill To</h2>
          <Input
            value={billingInfo.billTo}
            onChange={(e) => handleChange('billTo', e.target.value)}
            disabled={!editModeBillTo}
            placeholder={editModeBillTo ? '' : 'Edit'}
            startContent={editModeBillTo ? (
              <Button  onClick={() => handleSave()}>Save</Button>
            ) : null}
          />
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <Button onClick={() => handleEdit('billFrom')}>Edit Bill From</Button>
        <Button onClick={() => handleEdit('billTo')}>Edit Bill To</Button>
      </div>
    </Card>
  );
};

export { CardWithBillingInfo};
