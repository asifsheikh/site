import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel | Asif Shaikh',
  description: 'A personal collection of places and what they meant.',
}

const places = [
  { name: "Malaysia", reflection: "Somewhere I’m about to experience for the first time.", imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800" },
  { name: "Kazakhstan", reflection: "A place I’m curious about — still unknown.", imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800" },
  { name: "Thailand", reflection: "A place that slowly changes your rhythm without you noticing.", imageUrl: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800" },
  { name: "Cambodia", reflection: "A reminder of history’s weight and human resilience.", imageUrl: "https://images.unsplash.com/photo-1560930950-5cc20e80e392?auto=format&fit=crop&q=80&w=800" },
  { name: "Vietnam", reflection: "Movement everywhere — yet somehow deeply grounded.", imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800" },
  { name: "Germany", reflection: "Structure, discipline, and systems that just work.", imageUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800" },
  { name: "Sweden", reflection: "Calm, balance, and space to think.", imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" },
  { name: "France", reflection: "A place where everyday life feels expressive.", imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800" },
  { name: "Spain", reflection: "Energy, warmth, and living in the moment.", imageUrl: "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?auto=format&fit=crop&q=80&w=800" },
  { name: "Czech Republic", reflection: "Quiet beauty and stories hidden in old streets.", imageUrl: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&q=80&w=800" },
  { name: "Singapore", reflection: "Precision, order, and a city that feels intentionally built.", imageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800" },
  { name: "Indonesia", reflection: "A place where nature and stillness quietly take over.", imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800" },
];

interface TravelCardProps {
  name: string;
  reflection: string;
  imageUrl: string;
}

const TravelCard = ({ name, reflection, imageUrl }: TravelCardProps) => (
  <div 
    className="group relative overflow-hidden rounded-[20px] p-6 sm:p-8 h-48 sm:h-56 flex flex-col justify-end transition-all duration-300 ease-out hover:scale-[1.02] shadow-md border border-white/10 cursor-pointer bg-gradient-to-br from-slate-800 to-slate-900"
  >
    {/* Image Container */}
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out group-hover:scale-105 brightness-110 contrast-105"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    />
    
    {/* Depth & Softness Overlay (Narrative Gradient with Smooth Hover Fade) */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-black/5 transition-colors duration-300 group-hover:from-black/40 group-hover:via-black/15 group-hover:to-transparent" />
    
    {/* Content Container */}
    <div className="relative z-10 transition-transform duration-300 ease-out">
      <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">{name}</h3>
      <p className="text-sm text-gray-100 leading-loose max-w-[95%]">
        {reflection}
      </p>
    </div>
  </div>
);

export default function TravelPage() {
  return (
    <div className="min-h-full bg-background flex justify-center py-20 px-6 sm:px-12 animate-fade-in-up">
      <div className="max-w-[1024px] w-full flex flex-col gap-y-20">
        
        {/* Travel Journey */}
        <section>
          <div className="mb-10">
            <h1 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
              Places I&apos;ve been to — and what stayed with me.
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.map((place) => (
              <TravelCard key={place.name} {...place} />
            ))}
          </div>
        </section>
        
      </div>
    </div>
  )
}
