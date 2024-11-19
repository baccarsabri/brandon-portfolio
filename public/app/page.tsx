import { EventCalendar } from "@/components/event-calender";
import { EventCard } from "@/components/event-card";
import Hero from "@/components/hero";
import  {events} from '../lib/fake_data'

export default function Home() {
  return (
   <main className="h-full w-full">
    <Hero />
    <div className="container py-6 flex gap-x-6">
      <EventCalendar />
     <div className="flex flex-col space-y-4">
     {events.map((event)=>(

<EventCard key={event.id} id={event.id} title={event.title} img={event.img} registered={event.registered} description={event.description} categories={event.categories} date={event.date} />
))}
     </div>
    </div>
   </main>
  );
}
