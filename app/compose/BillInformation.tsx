import React, { useState } from "react";
import { Card, Textarea, Button } from "@nextui-org/react";

interface BillingInfo {
  billFrom: string;
  billTo: string;
}

interface CardWithBillingInfoProps {
  initialBillingInfo: BillingInfo;
}

const CardWithBillingInfo: React.FC<CardWithBillingInfoProps> = ({
  initialBillingInfo,
}) => {
  const [billingInfo, setBillingInfo] = useState<BillingInfo>(
    initialBillingInfo
  );
  const [editModeBillFrom, setEditModeBillFrom] = useState<boolean>(false);
  const [editModeBillTo, setEditModeBillTo] = useState<boolean>(false);

  const handleToggleEditSave = (field: "billFrom" | "billTo") => {
    if (field === "billFrom") {
      setEditModeBillFrom((prev) => !prev);
    } else if (field === "billTo") {
      setEditModeBillTo((prev) => !prev);
    }
  };

  const handleSave = () => {
    setEditModeBillFrom(false);
    setEditModeBillTo(false);
    // Ajoutez ici la logique pour sauvegarder les informations de facturation
    // par exemple, en appelant une fonction de sauvegarde sur votre API
  };

  const handleChange = (field: keyof BillingInfo, value: string) => {
    setBillingInfo((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <Card>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <h2>Bill From</h2>
          <Textarea
            value={billingInfo.billFrom}
            onChange={(e) => handleChange("billFrom", e.target.value)}
            placeholder={editModeBillFrom ? "" : "Edit"}
            style={{ width: "100%" }}
            disabled={!editModeBillFrom}
          />
          <Button
            onClick={() => handleToggleEditSave("billFrom")}
            style={{ marginTop: "8px", marginRight: "8px" }}
          >
            {editModeBillFrom ? "Save" : "Edit"}
          </Button>
        </div>
        <div style={{ flexGrow: 1 }}>
          <h2>Bill To</h2>
          <Textarea
            value={billingInfo.billTo}
            onChange={(e) => handleChange("billTo", e.target.value)}
            placeholder={editModeBillTo ? "" : "Edit"}
            style={{ width: "100%" }}
            disabled={!editModeBillTo}
          />
          <Button
            onClick={() => handleToggleEditSave("billTo")}
            style={{ marginTop: "8px" }}
          >
            {editModeBillTo ? "Save" : "Edit"}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export { CardWithBillingInfo };
