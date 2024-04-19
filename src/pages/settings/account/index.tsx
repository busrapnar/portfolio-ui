import { format } from "date-fns"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from '../../../components/ui/input'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../components/ui/form'
import { Button } from '../../../components/ui/button'
import { CalendarIcon } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../../components/ui/popover'
import { Calendar } from '../../../components/ui/calendar'
import { cn } from '../../../lib/utils'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select'

type Props = {}
const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
})

const Account = (props: Props) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })


  return (
    <div >
      <h1 className="text-lg font-medium">Account</h1>
      <p className="text-muted-foreground text-sm">
        Update your account settings. Set your preferred language and timezone.
      </p>
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-border h-[1px] w-full mt-8"
      ></div>
      <div className="mt-8 grid gap-12">
        <Form {...form}>
          <form className="grid gap-2">
            <FormLabel className='font-medium text-sm'>Name</FormLabel>
            <Input id="name" placeholder="name" />
            <FormDescription className='text-muted-foreground text-sm'>
              This is your public display name. It can be your real name or a
              pseudonym. You can only change this once every 30 days.
            </FormDescription>
          </form>

          <form className="space-y-8">
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Your date of birth is used to calculate your age.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

          </form>
          <form className='grid gap-2'>
            <FormLabel>Language</FormLabel>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>
                    
                  </SelectLabel>
                  <SelectItem value="apple">English</SelectItem>
                  <SelectItem value="banana">French</SelectItem>
                  <SelectItem value="blueberry">German</SelectItem>
                  <SelectItem value="grapes">Spanish</SelectItem>
                  <SelectItem value="pineapple">Portuguese</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormDescription>This is the language that will be used in the dashboard.</FormDescription>
          </form>
        </Form>
        <Button className='w-[138px]'>Update Account</Button>
      </div>

    </div>

  )
}

export default Account