'use client'

import Link from "next/link";
import { useState } from "react";

import { ChevronDown } from "lucide-react";
import { IoAppsSharp } from "react-icons/io5";
import { MdGroups3, MdList, MdNewspaper, MdOutlineCalendarMonth, MdOutlineDocumentScanner, MdOutlineListAlt, MdOutlineShoppingCart } from "react-icons/md";

const sidebarLinks=[
    {icon:<MdOutlineShoppingCart size={24} color="#15A9FC" />,url:'/',label:'E-commerce'},
    {icon:<MdOutlineDocumentScanner size={24} color="#A641F6" />,url:'/',label:'Resources'},
    {icon:<MdNewspaper  size={24} color="#FB9C0C" />,url:'/',label:'News'},
    {icon:<MdOutlineCalendarMonth size={24} color="#15A9FC" />,url:'/',label:'Events'},
    {icon:<IoAppsSharp size={24} color="#FF7AF2" />,url:'/',label:'Directory'},
    {icon:<MdGroups3 size={24} color="#FB9C0C" />,url:'/',label:'Community'},
    {icon:<MdList size={24} color="#A641F6" />,url:'/',label:'Ticketing'},
    {icon:<MdOutlineListAlt size={24} color="#FF7AF2" />,url:'/',label:'Project'}

]

const Sidebar = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <aside className={`${expanded?'w-60':'w-14'} sticky top-0 left-0 transition-all min-h-screen h-full py-3 px-4 bg-primary`}>
      <div className="flex flex-col space-y-10">
     <button onClick={()=>setExpanded(!expanded)} className="flex items-center gap-x-4">

       <IoAppsSharp size={24} color="#ffffff" className="min-w-6" />
       <div className={`${expanded ? 'max-w-full' : 'max-w-0'} whitespace-nowrap transition-all overflow-hidden duration-500 text-white text-sm font-normal flex items-center gap-x-2`}>
       Workspace
<ChevronDown />
       </div>
     </button>
        
        <div className="flex flex-col space-y-6">
          {sidebarLinks.map((link,index)=>(
            <Link key={index} href={link.url} className="flex items-center text-white font-normal gap-x-4">
              <button className="min-w-6">{link.icon}</button>
              <p className={`${expanded ? 'max-w-full' : 'max-w-0'} whitespace-nowrap transition-all overflow-hidden duration-500`}>{link.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}


export default Sidebar