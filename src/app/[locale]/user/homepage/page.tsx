// "use client";
// import Image from "next/image";
// import { Calendar, MapPin, ChevronRight, Search, TrendingUp, Filter, ChevronDown, Check, CheckIcon, ChevronDownIcon } from "lucide-react";
// import { Footer } from "@/src/components/footer";

// import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
// import { useEffect, useRef, useState } from "react";



// // Mock Data: Sự kiện thịnh hành (Giống ảnh)
// const trendingEvents = [
//   { id: 1, rank: "01", title: "Nhà Gia Tiên", organizer: "Tên nhà tổ chức", price: "130,000 VND", volume: "1,507,054,100 VND", growth: "+125%" },
//   { id: 2, rank: "02", title: "[BẾN THÀNH] Đêm Nhạc", organizer: "SpaceSpeakers", price: "130,000 VND", volume: "1,507,054,100 VND", growth: "+125%" },
//   { id: 3, rank: "03", title: "Concert Chillies", organizer: "SpaceSpeakers", price: "130,000 VND", volume: "1,507,054,100 VND", growth: "-12%" },
//   { id: 4, rank: "04", title: "Concert Chillies", organizer: "SpaceSpeakers", price: "130,000 VND", volume: "1,507,054,100 VND", growth: "+1%" },
//   { id: 5, rank: "05", title: "Concert Chillies", organizer: "SpaceSpeakers", price: "130,000 VND", volume: "1,507,054,100 VND", growth: "+125%" },
// ];

// // Mock Data: Sự kiện sắp diễn ra
// const upcomingEvents = Array(4).fill({
//   title: "Đêm nhạc Chillies - Concert 2025 Bùng nổ",
//   date: "15/09/2025",
//   location: "TP. Hồ Chí Minh",
//   price: "Từ 500.000 VNĐ",
//   image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80" // Ảnh placeholder
// });

// const location = [
//     {
//         id: "abc",
//         name: "TP. Hồ Chí Minh"
//     },
//     {
//         id: "abc2",
//         name: "Hà Nội"
//     },
//     {
//         id: "abc3",
//         name: "Đà Nẵng"
//     },
// ]
// const genre = [
//     {
//         id: "abc",
//         name: "Tất cả thể loại"
//     },
//     {
//         id: "abc2",
//         name: "Âm nhạc (Concert)"
//     },
//     {
//         id: "abc3",
//         name: "Hội thảo"
//     },
// ]


// export default function HomePage() {

//     const [locationSelected, setLocationSelected] = useState(location[0])
//     const [openSelectLocation, setOpenSelectLocation] = useState(false)
//     const locationRef = useRef<HTMLDivElement>(null)
//     const [genreSelected, setGenreSelected] = useState(genre[0])
//     const [openSelectGenre, setOpenSelectGenre] = useState(false)
//     const genreRef = useRef<HTMLDivElement>(null)

//     useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
//         setOpenSelectLocation(false)
//       }
//       if (genreRef.current && !genreRef.current.contains(event.target as Node)) {
//         setOpenSelectGenre(false)
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [locationRef,genreRef])
//     return (
//     <>
//     <div className="min-h-screen pb-20  dark:bg-[#1E1E1E]">
      
//       {/* === HERO SECTION === */}
//       {/* Phần Banner chứa background và chữ */}
//       <section className="relative container mx-auto px-4 w-full lg:h-[580px] md:h-[600px] h-[680px] flex items-center justify-center">
        
//         {/* Background Image (Giả lập Gradient tím như ảnh nếu chưa có ảnh thật) */}
//         <div className="absolute inset-0 z-0 h-[500px]">
//           {/* Bạn thay thẻ Image này bằng ảnh banner thật của bạn */}
//           <Image 
//             src="/imgHomePage.png" 
//             alt="Banner" 
//             fill 
//             // unoptimized
//             className="object-cover w-full h-auto mask-[linear-gradient(to_bottom,black_80%,#323212 90%,transparent_100%)]
//                [-webkit-mask-image:linear-gradient(to_bottom,black_80%,#323212_90%,transparent_100%)] mix-blend-overlay"
//           />
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-[-50px]">
//           <h2 className="text-white text-lg md:text-xl font-medium tracking-wider mb-2 uppercase">
//             Trải nghiệm sự kiện đỉnh cao cùng
//           </h2>
//           {/* <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6 drop-shadow-lg italic">
//             CÔNG NGHỆ <br/> <span className="text-[#a586ff]">BLOCKCHAIN</span>
//           </h1> */}
//           <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all">
//             Khám phá ngay
//           </button>
//         </div>

//         {/* === FILTER BAR (Thanh tìm kiếm nổi) === */}
//         <div className="absolute lg:bottom-[40px] md:bottom-[50px] bottom-[40px] lg:w-[90%] md:w-[95%] w-[80%] max-w-5xl bg-white dark:bg-[#231b4d]/90 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl p-4 flex flex-col md:flex-row gap-4 items-center z-20">
          
//           {/* Dropdown: Địa điểm */}
//         <div ref={locationRef} className="flex-1 relative w-full">
//             <Listbox value={locationSelected} onChange={(val) => { setLocationSelected(val); setOpenSelectLocation(false) }}>
//                 <ListboxButton
//                 onClick={() => setOpenSelectLocation(!openSelectLocation)}
//                 className="
//                     w-full p-3 pr-10 bg-gray-50 dark:bg-[#1a103c]
//                     border border-gray-200 dark:border-gray-600 rounded-lg
//                     text-gray-700 dark:text-gray-200 outline-none
//                     focus:ring-2 ring-purple-500 cursor-pointer
//                 "
//                 >
//                 {locationSelected.name}
//                 </ListboxButton>

//                 {openSelectLocation && (
//                 <ListboxOptions
//                     static
//                     className="
//                     absolute w-full z-50 mt-1 max-h-60 overflow-y-auto
//                     bg-gray-50 dark:bg-[#1a103c] border border-gray-200 dark:border-gray-600
//                     rounded-lg shadow-lg text-gray-700 dark:text-gray-200
//                     "
//                 >
//                     {location.map(item => (
//                     <ListboxOption
//                         key={item.id}
//                         value={item}
//                         className="
//                         group flex items-center px-3 py-2 cursor-pointer
//                         hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md
//                         "
//                     >
//                         <CheckIcon className="h-4 w-4 opacity-0 group-data-locationSelected:opacity-100 text-purple-500" />
//                         <span>{item.name}</span>
//                     </ListboxOption>
//                     ))}
//                 </ListboxOptions>
//                 )}
//             </Listbox>
//             <MapPin size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//         </div>


//           {/* Dropdown: Thể loại */}
//         <div ref={genreRef} className="flex-1 relative w-full">
//             <Listbox value={genreSelected} onChange={(val) => { setGenreSelected(val); setOpenSelectGenre(false) }}>
//                 <ListboxButton
//                 onClick={() => setOpenSelectGenre(!openSelectGenre)}
//                 className="
//                     w-full p-3 pr-10 bg-gray-50 dark:bg-[#1a103c]
//                     border border-gray-200 dark:border-gray-600 rounded-lg
//                     text-gray-700 dark:text-gray-200 outline-none
//                     focus:ring-2 ring-purple-500 cursor-pointer
//                 "
//                 >
//                 {genreSelected.name}
//                 </ListboxButton>

//                 {openSelectGenre && (
//                 <ListboxOptions
//                     static
//                     className="
//                     absolute w-full z-50 mt-1 max-h-60 overflow-y-auto
//                     bg-gray-50 dark:bg-[#1a103c] border border-gray-200 dark:border-gray-600
//                     rounded-lg shadow-lg text-gray-700 dark:text-gray-200
//                     "
//                 >
//                     {genre.map(item => (
//                     <ListboxOption
//                         key={item.id}
//                         value={item}
//                         className="
//                         group flex items-center px-3 py-2 cursor-pointer
//                         hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md
//                         "
//                     >
//                         <CheckIcon className="h-4 w-4 opacity-0 group-data-genreSelected:opacity-100 text-purple-500" />
//                         <span>{item.name}</span>
//                     </ListboxOption>
//                     ))}
//                 </ListboxOptions>
//                 )}
//             </Listbox>
//             <Filter size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//         </div>

//           {/* Date Picker */}
//           <div className="flex-1 w-full relative">
//              <div className="w-full p-3 bg-gray-50 dark:bg-[#1a103c] border border-gray-200 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 flex items-center justify-between cursor-pointer">
//                 <span>June 01, 2025</span>
//                 <Calendar size={16} className="text-gray-400" />
//              </div>
//           </div>

//           {/* Button Search */}
//           <button className="w-full md:w-auto bg-[#5b4cb5] hover:bg-[#4a3d9e] text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
//             <Search size={18} />
//             <span>Tìm kiếm</span>
//           </button>
//         </div>
//       </section>

//       {/* === TRENDING EVENTS === */}
//       <section className="container mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
//           Sự kiện thịnh hành <TrendingUp className="text-yellow-500" />
//         </h2>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
//           {/* Cột trái: Danh sách (Table) */}
//           <div className="lg:col-span-2 overflow-x-auto">
//             <table className="w-full min-w-[600px]">
//               <thead>
//                 <tr className="text-gray-500 dark:text-gray-400 text-sm border-b border-gray-200 dark:border-gray-700">
//                   <th className="pb-3 text-left font-medium">Hạng</th>
//                   <th className="pb-3 text-left font-medium">Thông tin sự kiện</th>
//                   <th className="pb-3 text-right font-medium">Giá sàn</th>
//                   <th className="pb-3 text-right font-medium">Sức mua 24h</th>
//                   <th className="pb-3 text-right font-medium">Độ hot</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {trendingEvents.map((event) => (
//                   <tr key={event.id} className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-b border-gray-100 dark:border-gray-800 last:border-0">
//                     <td className="py-4 text-left font-bold text-xl text-gray-400 group-hover:text-[#5b4cb5]">
//                       <span className={event.rank === "01" ? "text-yellow-500 text-2xl" : ""}>{event.rank}</span>
//                     </td>
//                     <td className="py-4 text-left">
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 rounded bg-gray-200 dark:bg-gray-700"></div>
//                         <div>
//                           <p className="font-bold text-gray-800 dark:text-white text-sm">{event.title}</p>
//                           <p className="text-xs text-gray-500">{event.organizer}</p>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="py-4 text-right text-sm text-gray-600 dark:text-gray-300 font-medium">{event.price}</td>
//                     <td className="py-4 text-right text-sm text-gray-600 dark:text-gray-300">{event.volume}</td>
//                     <td className={`py-4 text-right text-sm font-bold ${event.growth.includes('-') ? 'text-red-500' : 'text-green-500'}`}>
//                       {event.growth}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Cột phải: Poster Top 1 */}
//           <div className="lg:col-span-1 relative">
//             <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
//                {/* Chữ Top 1 hiệu ứng 3D */}
//                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 drop-shadow-md" style={{ textShadow: '0px 4px 10px rgba(0,0,0,0.5)' }}>
//                  Top 1
//                </span>
//             </div>
//             <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-yellow-500/50 shadow-2xl shadow-yellow-500/20 group cursor-pointer">
//               <Image 
//                 src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1000" // Ảnh poster giả lập
//                 alt="Top 1 Event"
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
//               <div className="absolute bottom-4 left-4 text-white">
//                 <h3 className="font-bold text-xl mb-1">NHÀ GIA TIÊN</h3>
//                 <p className="text-sm opacity-80">Sắp diễn ra • TP.HCM</p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* === UPCOMING EVENTS === */}
//       <section className="container mx-auto px-4 mt-16">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Sắp diễn ra</h2>
//           <a href="#" className="text-[#5b4cb5] hover:text-[#4a3d9e] text-sm font-medium flex items-center gap-1">
//             Xem tất cả <ChevronRight size={16} />
//           </a>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {upcomingEvents.map((event, index) => (
//             <div key={index} className="bg-white dark:bg-[#1a103c] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-purple-900/20 transition-all group">
//               {/* Card Image */}
//               <div className="relative h-48 overflow-hidden">
//                 <Image 
//                   src={event.image} 
//                   alt={event.title} 
//                   fill 
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
//                   Concert
//                 </div>
//               </div>
              
//               {/* Card Content */}
//               <div className="p-4">
//                 <h3 className="font-bold text-gray-800 dark:text-white text-md mb-3 line-clamp-2 h-12">
//                   {event.title}
//                 </h3>
                
//                 <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
//                   <div className="flex items-center gap-2">
//                     <Calendar size={14} className="text-[#5b4cb5]" />
//                     <span>{event.date}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <MapPin size={14} className="text-[#5b4cb5]" />
//                     <span>{event.location}</span>
//                   </div>
//                 </div>

//                 <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
//                   <span className="text-[#5b4cb5] dark:text-[#8b7be8] font-bold block">
//                     {event.price}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//     </div>
//     <Footer/>
//     </>

//   );
// }
"use client";
import Image from "next/image";
import { Calendar, MapPin, ChevronRight, Search, TrendingUp, Filter, CheckIcon } from "lucide-react";
import { Footer } from "@/src/components/footer";

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";

// Mock Data: Giữ nguyên
const trendingEvents = [
  { id: 1, rank: "01", title: "Nhà Gia Tiên", organizer: "Tên nhà tổ chức", price: "130,000 VND", volume: "1,507,054,100 VND", growth: "+125%" },
  { id: 2, rank: "02", title: "[BẾN THÀNH] Đêm Nhạc", organizer: "SpaceSpeakers", price: "130,000 VND", volume: "1,507,054,100 VND", growth: "+125%" },
  { id: 3, rank: "03", title: "Concert Chillies", organizer: "SpaceSpeakers", price: "130,000 VND", volume: "1,507,054,100 VND", growth: "-12%" },
  { id: 4, rank: "04", title: "Concert Chillies", organizer: "SpaceSpeakers", price: "130,000 VND", volume: "1,507,054,100 VND", growth: "+1%" },
  { id: 5, rank: "05", title: "Concert Chillies", organizer: "SpaceSpeakers", price: "130,000 VND", volume: "1,507,054,100 VND", growth: "+125%" },
];

const upcomingEvents = Array(4).fill({
  title: "Đêm nhạc Chillies - Concert 2025 Bùng nổ",
  date: "15/09/2025",
  location: "TP. Hồ Chí Minh",
  price: "Từ 500.000 VNĐ",
  image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80"
});

const location = [
    { id: "abc", name: "TP. Hồ Chí Minh" },
    { id: "abc2", name: "Hà Nội" },
    { id: "abc3", name: "Đà Nẵng" },
]
const genre = [
    { id: "abc", name: "Tất cả thể loại" },
    { id: "abc2", name: "Âm nhạc (Concert)" },
    { id: "abc3", name: "Hội thảo" },
]

export default function HomePage() {
    const [locationSelected, setLocationSelected] = useState(location[0])
    const [openSelectLocation, setOpenSelectLocation] = useState(false)
    const locationRef = useRef<HTMLDivElement>(null)
    const [genreSelected, setGenreSelected] = useState(genre[0])
    const [openSelectGenre, setOpenSelectGenre] = useState(false)
    const genreRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
            setOpenSelectLocation(false)
          }
          if (genreRef.current && !genreRef.current.contains(event.target as Node)) {
            setOpenSelectGenre(false)
          }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [locationRef,genreRef])

    return (
    <>
    {/* Thay đổi: dark:bg-[#1E1E1E] -> bg-main */}
    <div className="min-h-screen pb-20 bg-main transition-colors duration-300">
      
      {/* === HERO SECTION === */}
      <section className="relative container mx-auto px-4 w-full lg:h-[580px] md:h-[600px] h-[680px] flex items-center justify-center">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-[500px]">
          <Image 
            src="/imgHomePage.png" 
            alt="Banner" 
            fill 
            // linear-gradient(179deg,var(--color-main,#1F1229)_0.9%,var(--color-main,#1F1229)_92.53%)]
            className="object-cover w-full h-auto mask-[linear-gradient(to_bottom,black_80%,#323212 90%,transparent_100%)]

                [-webkit-mask-image:linear-gradient(to_bottom,black_80%,#323212_90%,transparent_100%)] mix-blend-overlay"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-[-50px]">
          <h2 className="text-white text-lg md:text-xl font-medium tracking-wider mb-2 uppercase">
            Trải nghiệm sự kiện đỉnh cao cùng
          </h2>
          {/* Nút giữ nguyên màu gradient đặc biệt vì là điểm nhấn Hero, nhưng chữ dùng font-bold */}
          <button className="bg-gradient-to-r from-accent to-yellow-600 hover:from-yellow-400 hover:to-accent text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            Khám phá ngay
          </button>
        </div>

        {/* === FILTER BAR === */}
        {/* Thay đổi: bg-white dark:bg-[#231b4d]/90 -> bg-surface/90 */}
        {/* Thay đổi: border-gray-200 -> border-border */}
        <div className="absolute lg:bottom-[40px] md:bottom-[50px] bottom-[40px] lg:w-[90%] md:w-[95%] w-[80%] max-w-5xl 
            bg-surface/90 backdrop-blur-md border border-border rounded-2xl shadow-xl 
            p-4 flex flex-col md:flex-row gap-4 items-center z-20 transition-colors lg:px-14 px-6 py-5 lg:py-12"
        >
          
          {/* Dropdown: Địa điểm */}
            <div ref={locationRef} className="flex-1 relative w-full">
                <Listbox value={locationSelected} onChange={(val) => { setLocationSelected(val); setOpenSelectLocation(false) }}>
                    <ListboxButton
                        onClick={() => setOpenSelectLocation(!openSelectLocation)}
                        /* Thay đổi: bg-gray-50 -> bg-secondary, text-gray-700 -> text-txt-primary */
                        className="
                            w-full p-3 pr-10 bg-secondary
                            border border-border rounded-lg
                            text-txt-primary outline-none
                            focus:ring-1 focus:ring-primary focus:border-primary cursor-pointer transition-colors text-left
                        "
                    >
                    {locationSelected.name}
                    </ListboxButton>

                    {openSelectLocation && (
                    <ListboxOptions
                        static
                        className="
                        absolute w-full z-50 mt-1 max-h-60 overflow-y-auto
                        bg-surface border border-border
                        rounded-lg shadow-lg text-txt-primary
                        "
                    >
                        {location.map(item => (
                        <ListboxOption
                            key={item.id}
                            value={item}
                            className="
                            group flex items-center px-3 py-2 cursor-pointer
                            hover:bg-secondary rounded-md
                            "
                        >
                            <CheckIcon className="h-4 w-4 opacity-0 group-data-[selected]:opacity-100 text-primary mr-2" />
                            <span>{item.name}</span>
                        </ListboxOption>
                        ))}
                    </ListboxOptions>
                    )}
                </Listbox>
                <MapPin size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-txt-muted pointer-events-none" />
            </div>

            {/* Dropdown: Thể loại */}
            <div ref={genreRef} className="flex-1 relative w-full">
                <Listbox value={genreSelected} onChange={(val) => { setGenreSelected(val); setOpenSelectGenre(false) }}>
                    <ListboxButton
                        onClick={() => setOpenSelectGenre(!openSelectGenre)}
                        className="
                            w-full p-3 pr-10 bg-secondary
                            border border-border rounded-lg
                            text-txt-primary outline-none
                            focus:ring-1 focus:ring-primary focus:border-primary cursor-pointer transition-colors text-left
                        "
                    >
                    {genreSelected.name}
                    </ListboxButton>

                    {openSelectGenre && (
                    <ListboxOptions
                        static
                        className="
                        absolute w-full z-50 mt-1 max-h-60 overflow-y-auto
                        bg-surface border border-border
                        rounded-lg shadow-lg text-txt-primary
                        "
                    >
                        {genre.map(item => (
                        <ListboxOption
                            key={item.id}
                            value={item}
                            className="
                            group flex items-center px-3 py-2 cursor-pointer
                            hover:bg-secondary rounded-md
                            "
                        >
                            <CheckIcon className="h-4 w-4 opacity-0 group-data-[selected]:opacity-100 text-primary mr-2" />
                            <span>{item.name}</span>
                        </ListboxOption>
                        ))}
                    </ListboxOptions>
                    )}
                </Listbox>
                <Filter size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-txt-muted pointer-events-none" />
            </div>

            {/* Date Picker */}
            <div className="flex-1 w-full relative">
                <div className="w-full p-3 bg-secondary border border-border rounded-lg text-txt-primary flex items-center justify-between cursor-pointer hover:border-primary transition-colors">
                    <span>June 01, 2025</span>
                    <Calendar size={16} className="text-txt-muted" />
                </div>
            </div>

            {/* Button Search - Dùng bg-primary */}
            <button className="w-full md:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <Search size={18} />
                <span>Tìm kiếm</span>
            </button>
        </div>
      </section>

      {/* === TRENDING EVENTS === */}
      <section className="container mx-auto px-4">
        {/* text-gray-800 -> text-txt-primary */}
        <h2 className="text-2xl font-bold text-txt-primary mb-6 flex items-center gap-2">
          Sự kiện thịnh hành <TrendingUp className="text-accent" />
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cột trái: Danh sách (Table) */}
          <div className="lg:col-span-2 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="text-txt-muted text-sm border-b border-border">
                  <th className="pb-3 text-left font-medium">Hạng</th>
                  <th className="pb-3 text-left font-medium">Thông tin sự kiện</th>
                  <th className="pb-3 text-right font-medium">Giá sàn</th>
                  <th className="pb-3 text-right font-medium">Sức mua 24h</th>
                  <th className="pb-3 text-right font-medium">Độ hot</th>
                </tr>
              </thead>
              <tbody>
                {trendingEvents.map((event) => (
                  <tr key={event.id} className="group hover:bg-secondary transition-colors border-b border-border last:border-0">
                    {/* Rank: text-gray-400 -> text-txt-muted, hover:text-[#5b4cb5] -> hover:text-primary */}
                    <td className="py-4 text-left font-bold text-xl text-txt-muted group-hover:text-primary transition-colors">
                      <span className={event.rank === "01" ? "text-accent text-2xl" : ""}>{event.rank}</span>
                    </td>
                    <td className="py-4 text-left">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-secondary"></div>
                        <div>
                          <p className="font-bold text-txt-primary text-sm">{event.title}</p>
                          <p className="text-xs text-txt-muted">{event.organizer}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-right text-sm text-txt-secondary font-medium">{event.price}</td>
                    <td className="py-4 text-right text-sm text-txt-muted">{event.volume}</td>
                    <td className={`py-4 text-right text-sm font-bold ${event.growth.includes('-') ? 'text-error' : 'text-success'}`}>
                      {event.growth}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cột phải: Poster Top 1 */}
          <div className="lg:col-span-1 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
               {/* Giữ nguyên text-transparent vì nó là hiệu ứng đặc biệt */}
               <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-accent to-yellow-600 drop-shadow-md" style={{ textShadow: '0px 4px 10px rgba(0,0,0,0.5)' }}>
                 Top 1
               </span>
            </div>
            {/* border-yellow-500 -> border-accent */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-accent/50 shadow-2xl shadow-accent/20 group cursor-pointer">
              <Image 
                src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1000" 
                alt="Top 1 Event"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-xl mb-1">NHÀ GIA TIÊN</h3>
                <p className="text-sm opacity-80">Sắp diễn ra • TP.HCM</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* === UPCOMING EVENTS === */}
      <section className="container mx-auto px-4 mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-txt-primary">Sắp diễn ra</h2>
          {/* text-[#5b4cb5] -> text-primary */}
          <a href="#" className="text-primary hover:text-primary-hover text-sm font-medium flex items-center gap-1 transition-colors">
            Xem tất cả <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingEvents.map((event, index) => (
            /* Card: bg-white -> bg-surface, border-gray-200 -> border-border */
            <div key={index} className="bg-surface rounded-xl overflow-hidden border border-border hover:shadow-lg hover:shadow-primary/10 transition-all group">
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={event.image} 
                  alt={event.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                  Concert
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-4">
                <h3 className="font-bold text-txt-primary text-md mb-3 line-clamp-2 h-12">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-sm text-txt-muted">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border">
                  <span className="text-primary font-bold block">
                    {event.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
    <Footer/>
    </>
  );
}