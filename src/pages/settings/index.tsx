
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";

import { Textarea } from "../../components/ui/textarea";

type Props = {};

const Settings = (props: Props) => {
  return (
    <div className="">
      <h1 className="text-lg font-medium">Profile</h1>
      <p className="text-muted-foreground text-sm">
        This is how others will see you on the site.
      </p>
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-border h-[1px] w-full mt-8"
      ></div>
      <div className="mt-8 grid gap-12">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="username" />
          <p className="text-[0.8rem] text-muted-foreground">
            This is your public display name. It can be your real name or a
            pseudonym. You can only change this once every 30 days.
          </p>
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="email" />
          <p className="text-[0.8rem] text-muted-foreground">
            You can manage verified email addresses in your email settings.
          </p>
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="bio">Bio</Label>
          <Textarea placeholder="Type your message here."></Textarea>
        </div>
      </div>
    </div>
  );
};

export default Settings;
