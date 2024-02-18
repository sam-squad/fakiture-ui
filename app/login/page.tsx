"use client";

import React, { useState } from "react";
import { EyeFilledIcon } from "@/components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/EyeSlashFilledIcon";
import { Input } from "@nextui-org/input";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("http://localhost:8080/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.authenticated) {
      console.log("Successful authentication");
    } else {
      console.log("failed authentication");
    }
  };
  return (
    <div className="flex flex-col gap-6">
      <h1 className={title()}>Login</h1>
      <div className="flex flex-col gap-2">
        <Input
          variant="bordered"
          size={"lg"}
          type="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          size={"lg"}
          variant="bordered"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
        <Button color="primary" variant="shadow" onClick={handleLogin}>
          Let&#39;s go !
        </Button>
      </div>
    </div>
  );
}
