import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { MdChevronRight } from "react-icons/md";
import { EventCardBadge } from "../event-card-badge";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { categories as EventCategories } from "@/lib/fake_data";
interface EventCardProps{
    id:Number;
    title:String;
    description:String;
    img:String;
    date:String;
    registered:Boolean;
    categories:Number[]
}
export const EventCard = ({id,title,date,registered,description,categories,img}:EventCardProps) => {
    function getCategoryById(id:Number) {
        return EventCategories.find(category => category.id === id);
    }
  return (
    <Card className="px-4 rounded-2xl flex h-fit border-none shadow-none max-w-[783px]">
      <div className="my-2 relative min-w-[150px] min-h-[150px]  rounded-lg overflow-hidden">
        <Image
          src={`${img}`}
          alt="event_img"
          fill
          className="absolute"
        />
      </div>
      <div className="flex flex-col">
        <CardHeader className="pt-4 pb-2 pr-10 space-y-2 ">
          <CardTitle className="flex items-center justify-between">
            <p className="text-black text-base ">{title}</p>
           {registered&&<Badge variant="outline" className="border-secondary text-secondary text-[10px] font-medium py-1 px-2">#Registered</Badge>}

          </CardTitle>
          <CardDescription className="text-sm font-medium text-[#1C1F55]">{date}</CardDescription>
          <div className="flex items-center gap-x-4">
            {categories.map((category_id)=>{
                let category = getCategoryById(category_id)
                return(

            <EventCardBadge key={category?.id} title={category?.title} style={{backgroundColor:category?.bgColor,color:category?.textColor}}  />
            )})}
                
  
          </div>
        </CardHeader>
        <CardContent className="pb-4 pr-10">
          <p className="text-sm font-normal text-[#5A605F]">
            {description}
          </p>
        </CardContent>
      </div>
      <div className="flex flex-col items-center justify-center">
     <Link href={`/event/${id}`}>
       <Button size="icon" variant="ghost" className="bg-secondary-light text-secondary hover:text-secondary" asChild>
          <MdChevronRight size={24}/>
        </Button>
     </Link>
  
      </div>
    </Card>
  );
};
