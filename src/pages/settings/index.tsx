import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { toast } from "../../components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Button } from "../../components/ui/button";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Skeleton } from "../../components/ui/skeleton";

type Props = {};

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Kullanıcı adı minimum 2 harften oluşmalıdır.",
  }),
  language: z.string({
    required_error: "Lütfen bir dil seçiniz.",
  }),
  metaKeyword: z.string().min(2, {
    message: "",
  }),
  link: z.string().min(2, {
    message: "",
  }),
});

const Settings = (props: Props) => {
  const [urls, setUrls] = useState([""]);

  const handleAddUrl = () => {
    setUrls([...urls, ""]);
  };

  const handleChangeUrl = (index: number, value: string) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <div className="">
      <div className="grid gap-4">
        {/* Title */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" grid gap-12">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="title" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name. It can be your real name
                    or a pseudonym. You can only change this once every 30 days.
                  </FormDescription>
                </FormItem>
              )}
            />
          </form>
        </Form>

        {/* Meta Keyword */}
        <Form {...form}>
          <FormField
            control={form.control}
            name="metaKeyword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meta Keyword</FormLabel>
                <FormControl>
                  <Input
                    type="metaKeyword"
                    placeholder="Meta Keyword"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You can manage verified metaKeyword addresses in your
                  metaKeyword settings.
                </FormDescription>
              </FormItem>
            )}
          />
        </Form>

        {/* Meta Description */}
        <Form {...form}>
          <FormItem>
            <FormLabel>Meta Description</FormLabel>
            <Textarea placeholder="Type your message here."></Textarea>
            <FormDescription>
              You can @mention other users and organizations to link to them.
            </FormDescription>
          </FormItem>
        </Form>

        {/* URLs */}
        <Form {...form}>
          {urls.map((url, index) => (
            <FormField
              key={index}
              name={`link-${index}`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL {index + 1}</FormLabel>
                  <FormDescription>
                    Add links to your website, blog, or social media profiles.
                  </FormDescription>
                  <FormControl>
                    <div className="flex gap-4">
                      <Input placeholder="Key" className="w-[10%]" />
                      <Input
                        placeholder={`https://example.com`}
                        value={url}
                        onChange={(e) => handleChangeUrl(index, e.target.value)}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
          <Button
            variant="outline"
            onClick={handleAddUrl}
            className="w-[130px]"
          >
            Add URL
          </Button>
        </Form>

        {/* Language */}
        <Form {...form}>
          <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 mt-2">
                <FormLabel>Language</FormLabel>
                <FormDescription>Select Language</FormDescription>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-1 bg-primary-foreground">
                  <Button variant={"ghost"}>
                  <img className="w-12 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwN0E11tIN7wL2W3XWdyX-Y1PFvCjyfPSnwdr8sEkbRA3oio6Lft7SZlVxEoQ_vwXUoE&usqp=CAU" alt="" />
                </Button>
                <FormDescription>English</FormDescription>
                  </div>
                
                <div className="flex flex-col items-center gap-1 bg-primary-foreground">
                <Button variant={"ghost"}>
                  <img className="w-12 h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg/200px-Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg.png" alt="" />
                </Button>
                <FormDescription>Türkçe</FormDescription>
                </div>
                
                </div>
                
                <FormDescription>
                  This is the language that will be used in the dashboard.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </Form>

        {/* Theme */}
        <div className="grid gap-4 mt-8">
          <p className="text-sm font-medium leading-none">Theme</p>
          <div className="grid max-w-md grid-cols-2 gap-4">
            {/* Light Theme */}
            <div className="grid gap-2">
              {/* Theme Preview */}
              <div className="flex flex-col gap-1 rounded-md border-2 border-muted p-1 hover:border-accent">
              <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                  <div className="flex flex-col gap-2 rounded-md bg-white p-2 shadow-sm">
                    <Skeleton className="h-2 w-[80px] bg-slate-300" />
                    <div className="">
                      <Skeleton className="h-2 w-[100px] bg-slate-300" />
                    </div>
                  </div>
                
                  <div className="flex items-center gap-2 rounded-md bg-white p-2 shadow-sm">
                    <Skeleton className="h-4 w-4 rounded-full bg-slate-300" />
                    <div className="">
                      <Skeleton className="h-2 w-[100px] bg-slate-300" />
                    </div>
                  </div>
                
                  <div className="flex items-center gap-2 rounded-md bg-white p-2 shadow-sm">
                    <Skeleton className="h-4 w-4 rounded-full bg-slate-300" />
                    <div className="">
                      <Skeleton className="h-2 w-[100px] bg-slate-300" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm text-center">Light</p>
            </div>

            {/* Dark Theme */}
            <div className="grid gap-2">
              {/* Theme Preview */}
              <div className="flex flex-col gap-1 rounded-md border-2 border-muted p-1 hover:border-accent">
                <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                  <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                  <Skeleton className="h-2 w-[80px] bg-slate-300" />
                    <div className="">
                      <Skeleton className="h-2 w-[100px] bg-slate-300" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                  <Skeleton className="h-4 w-4 rounded-full bg-slate-300" />
                    <div className="">
                      <Skeleton className="h-2 w-[100px] bg-slate-300" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                  <Skeleton className="h-4 w-4 rounded-full bg-slate-300" />
                    <div className="">
                      <Skeleton className="h-2 w-[100px] bg-slate-300" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm text-center">Dark</p>
            </div>
          </div>
        </div>

        <Button className="w-[164px]">Update preferences</Button>
      </div>
    </div>
  );
};

export default Settings;
