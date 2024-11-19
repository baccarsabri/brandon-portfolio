import { Badge } from "../ui/badge";

export interface EventBadgeProps{
title?:String;
style?:any ;

}

export const EventCardBadge = ({title,style}:EventBadgeProps) => {
  return (

        <Badge style={style} className={`rounded-2xl px-2 py-1 text-[10px] font-normal w-fit]`}>{title}</Badge>
  )
}

