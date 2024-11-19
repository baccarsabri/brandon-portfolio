import Link from "next/link"

const categories=[
    {label:'All Events'},
    {label:'Category 1'},
    {label:'Category 2'},
    {label:'Category 3'},
]
const TopBar = () => {
  return (
    <nav className="h-[54px] w-full bg-white dark:bg-primary border-t border-[#E6E7E7] dark:border-none text-primary-text dark:text-white px-6 py-4  font-medium ">
       <div className="flex items-center justify-center divide-x-2 divide-primary-text dark:divide-white space-x-5">
        {categories.map((category,index)=>(
            <Link key={index} href='/' className="px-5" >
                {category.label}
            </Link>
        ))}
       </div>
    </nav>
  )
}

export default TopBar
