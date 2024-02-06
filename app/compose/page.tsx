"use client"
import { useState } from 'react';
import { title } from "@/components/primitives";
import { Input } from "@nextui-org/react";
import { CardWithBillingInfo } from "./BillInformation"; // Assurez-vous que le chemin d'importation est correct

export default function ComposePage() {
  const initialBillingInfo = { billFrom: "", billTo: "" }; // Initialiser les informations de facturation

  return (
    <div>
      <div>
        <h1 className={title()}>INVOICE</h1>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          type="email"
          label="Email"
          placeholder="you@example.com"
          labelPlacement="outside"
        />
      </div>
	  <div className="custom-form-container">
      <CardWithBillingInfo initialBillingInfo={initialBillingInfo} /> 
	</div>
    </div>
  );
}
