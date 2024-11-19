'use client'
import { useState } from "react"
import { Calendar } from "../ui/calendar"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { categories } from "@/lib/fake_data"
import { Button } from "../ui/button"
const FormSchema = z.object({
    sortby: z
      .string({
        required_error: "Please select a date",
      })
  })
   
export const EventCalendar = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [selectedCategory,setSelectedCategory]=useState<Number |undefined>(undefined)
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
      })
     
      function onSubmit(data: z.infer<typeof FormSchema>) {
       console.log(data);
       
      }
  return (
    <aside className="p-4 bg-white space-y-4 min-w-96 h-fit rounded-2xl">
          <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="flex items-center justify-center"
  />
  <div className="flex flex-col space-y-2">
    {categories.map((category)=>(
        <Button onClick={()=>setSelectedCategory(category.id)} style={selectedCategory===category.id?{backgroundColor:category.textColor,color:category.bgColor}:{backgroundColor:category.bgColor,color:category.textColor}} className={`p-2 rounded-lg`} key={category.id}>{category.title}</Button>
    ))}
  </div>
 <div className="w-full">

 <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6 w-full">
        <FormField
          control={form.control}
          name="sortby"
          render={({ field }) => (
            <FormItem >
              <FormLabel className="text-[#2A3342] text-base font-semibold">Sort by:</FormLabel>
              <Select  onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="This month" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="choice 1">choice 1</SelectItem>
                  <SelectItem value="choice 2">choice 2</SelectItem>
                  <SelectItem value="choice 3">choice 3</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
      </form>
    </Form>
 </div>
    </aside>
  )
}
