import React from "react";
import { Form, FormDescription } from "../../../components/ui/form";
import { Checkbox } from "../../../components/ui/checkbox";

type Props = {};

const Notifications = (props: Props) => {
  return (
    <div>
      <h1 className="text-lg font-medium">Notifications</h1>
      <p className="text-muted-foreground text-sm">
        Configure how you receive notifications.
      </p>
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-border h-[1px] w-full mt-8"
      ></div>
      <div className="mt-8 grid gap-4 ">
        <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Notify me about...
        </p>
        <div className="grid gap-2">
          <div className="flex gap-4 items-center">
            <Checkbox className="rounded-full data-[state=checked]:bg-primary-foreground data-[state=checked]:text-black" />
            <p className="text-sm">All new messages</p>
          </div>
          <div className="flex gap-4 items-center">
            <Checkbox className="rounded-full data-[state=checked]:bg-primary-foreground data-[state=checked]:text-black" />
            <p className="text-sm">Direct messages and mentions</p>
          </div>
          <div className="flex gap-4 items-center">
            <Checkbox className="items-center rounded-full data-[state=checked]:bg-primary-foreground data-[state=checked]:text-black" />
            <p className="text-sm">Nothing</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
      <h1 className="text-lg font-medium">Email Notifications</h1>
      </div>
    </div>
  );
};

export default Notifications;
