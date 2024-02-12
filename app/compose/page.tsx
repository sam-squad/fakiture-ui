import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

export default function ComposePage() {
  return (
    <main className="flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-2">
        <h1 className={title()}>Make an invoices.</h1>
        <h2>Start to compose the registration of </h2>
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
          <div className="grid grid-cols-4 gap-2">
            <Input
              variant="bordered"
              size="lg"
              type="text"
              label="Description"
            />{" "}
            <Input
              variant="bordered"
              size="lg"
              type="number"
              label="Quantity"
            />{" "}
            <Input variant="bordered" size="lg" type="number" label="Rate" />{" "}
            <Input variant="bordered" size="lg" type="number" label="Total" />{" "}
          </div>
          <Button className="w-24 bg-foreground text-default">
            {" "}
            Add a line
          </Button>
        </div>
      </div>
    </main>
  );
}
