"use client";

import React from "react";
import { EyeFilledIcon } from "@/components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/EyeSlashFilledIcon";
import { Input } from "@nextui-org/input";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="flex flex-col gap-6">
      <h1 className={title()}>Login</h1>
      <div className="flex flex-col gap-2">
        <Input variant="bordered" size={"lg"} type="email" label="Email" />
        <Input
          size={"lg"}
          variant="bordered"
          label="Password"
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
        <Button color="primary" variant="shadow">
          Let's go !
        </Button>
      </div>
    </div>
  );
}
