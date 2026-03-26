"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Calendar, MapPin, ChevronRight, Search, TrendingUp, Filter, CheckIcon, Loader2 } from "lucide-react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { Footer } from "@/src/components/footer";
import api from "@/src/lib/axios";
import Cookies from "js-cookie";
import { CustomDatePicker } from "@/src/components/ui/CustomDatePicker";

// Mock Data: Sự kiện thịnh hành (Table) - Giữ nguyên mock do chưa có API ranking/finance
const trendingEvents = [
  { id: 1, rank: "01", title: "Nhà Gia Tiên", organizer: "Tên nhà tổ chức", price: "130,000 VND", volume: "1,507,054,100 VND", growth: "+125%" },
  { id: 2, rank: "02", title: "[BẾN THÀNH] Đêm Nhạc", organizer: "SpaceSpeakers", price: "130,000 VND", volume: "1,507,054,100 VND", growth: "+125%" },
  { id: 3, rank: "03", title: "Concert Chillies", organizer: "SpaceSpeakers", price: "130,000 VND", volume: "1,507,054,100 VND", growth: "-12%" },
  { id: 4, rank: "04", title: "Concert Chillies", organizer: "SpaceSpeakers", price: "130,000 VND", volume: "1,507,054,100 VND", growth: "+1%" },
  { id: 5, rank: "05", title: "Concert Chillies", organizer: "SpaceSpeakers", price: "130,000 VND", volume: "1,507,054,100 VND", growth: "+125%" },
];

interface EventHomeItem {
  id: number;
  eventName: string;
  description: string;
  venue: string;
  fullAddress: string;
  startDatetime: string;
  bannerImage: string | null;
  categoryName: string;
  ticketTypes?: any[]; // For price checking if needed
}

export default function HomePage() {
  const { locale } = useParams();
  const t = useTranslations("Homepage");

  // const location = [
  //   { id: "all", name: t("location_all") },
  //   { id: "hcm", name: t("location_hcm") },
  //   { id: "hn", name: t("location_hn") },
  //   { id: "dn", name: t("location_dn") },
  // ]
  const genre = [
    { id: "all", name: t("genre_all") },
    { id: "music", name: t("genre_music") },
    { id: "workshop", name: t("genre_workshop") },
  ]

  // Filters State
  const [locationSelected, setLocationSelected] = useState<any>({
    code: "all",
    name: t("location_all")
  });
  const [openSelectLocation, setOpenSelectLocation] = useState(false)
  const locationRef = useRef<HTMLDivElement>(null)
  const [genreSelected, setGenreSelected] = useState(genre[0])
  const [openSelectGenre, setOpenSelectGenre] = useState(false)
  const genreRef = useRef<HTMLDivElement>(null)
  const [dateSelected, setDateSelected] = useState<Date | null>(null)
  const [locationList, setLocationList] = useState<any[]>([]);

  // Events State
  const [latestEvents, setLatestEvents] = useState<EventHomeItem[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(true);

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
  }, [locationRef, genreRef]);

  // Fetch Latest Events
  useEffect(() => {
    const fetchLatestEvents = async () => {
      try {

        // Fetch 4 latest events
        const response = await api.get("/inventory-service/api/events", {
          params: {
            page: 1,
            size: 4,
            sortBy: "createdAt",
            sortDirection: "DESC",
            includeExpired: false // Only show future events in "Upcoming" section
          },
        });

        if (response.data && response.data.data && response.data.data.content) {
          console.log(response.data);
          setLatestEvents(response.data.data.content);
        }
      } catch (error) {
        console.error("Failed to fetch home events", error);
      } finally {
        setLoadingEvents(false);
      }
    };
    const fetchListProvince = async () => {
      try {

        const response = await api.get("/iam-service/api/locations/provinces");

        if (response.data) {
          const allOption = {
            code: "all",
            name: t("location_all")
          };
          setLocationList([allOption, ...response.data]);
        }
      } catch (error) {
        console.error("Failed to fetch list province", error);
      } finally {
        setLoadingEvents(false);
      }
    };

    fetchLatestEvents();
    fetchListProvince();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
      day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit"
    });
  };

  return (
    <>
      <div className="min-h-screen pb-20 bg-main transition-colors duration-300">

        {/* === HERO SECTION === */}
        <section className="relative container mx-auto px-4 w-full lg:h-[580px] md:h-[600px] h-[680px] flex items-center justify-center">

          {/* Background Image */}
          <div className="absolute inset-0 z-0 h-[500px]">
            <Image
              src="/imgHomePage.png"
              alt="Banner"
              fill
              className="object-cover w-full h-auto mask-[linear-gradient(to_bottom,black_80%,#323212 90%,transparent_100%)]
                [-webkit-mask-image:linear-gradient(to_bottom,black_80%,#323212_90%,transparent_100%)] mix-blend-overlay"
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-[-50px]">
            <h2 className="text-white text-lg md:text-xl font-medium tracking-wider mb-2 uppercase">
              {t("hero_title")}
            </h2>
            <Link
              href={`/${locale}/events`}
              className="inline-block bg-gradient-to-r from-accent to-yellow-600 hover:from-yellow-400 hover:to-accent text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all"
            >
              {t("explore_now")}
            </Link>
          </div>

          {/* === FILTER BAR === */}
          <div className="absolute lg:bottom-[40px] md:bottom-[50px] bottom-[40px] lg:w-[90%] md:w-[95%] w-[80%] max-w-5xl 
            bg-surface/90 backdrop-blur-md border border-border rounded-2xl shadow-xl 
            p-4 flex flex-col md:flex-row gap-4 items-center z-20 transition-colors lg:px-14 px-6 py-5 lg:py-12"
          >

            {/* Dropdown: Địa điểm */}
            <div ref={locationRef} className="flex-1 relative w-full">
              <Listbox value={locationSelected} onChange={(val) => { setLocationSelected(val); setOpenSelectLocation(false) }}>
                <ListboxButton
                  onClick={() => setOpenSelectLocation(!openSelectLocation)}
                  className="
                            w-full p-3 pr-10 bg-secondary
                            border border-border rounded-lg
                            text-txt-primary outline-none
                            focus:ring-1 focus:ring-primary focus:border-primary cursor-pointer transition-colors text-left
                        "
                >
                  {locationSelected?.name || t("location_all")}
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
                    {locationList.map(item => (
                      <ListboxOption
                        key={item.code}
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
              <CustomDatePicker
                selectedDate={dateSelected}
                onChange={setDateSelected}
              />
            </div>

            {/* Button Search */}
            <button className="w-full md:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
              <Search size={18} />
              <span>{t("search_button")}</span>
            </button>
          </div>
        </section>

        {/* === TRENDING EVENTS (Mocked) === */}
        <section className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-txt-primary mb-6 flex items-center gap-2">
            {t("trending_events")} <TrendingUp className="text-accent" />
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cột trái: Danh sách (Table) */}
            <div className="lg:col-span-2 overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="text-txt-muted text-sm border-b border-border">
                    <th className="pb-3 text-left font-medium">{t("rank")}</th>
                    <th className="pb-3 text-left font-medium">{t("event_info")}</th>
                    <th className="pb-3 text-right font-medium">{t("floor_price")}</th>
                    <th className="pb-3 text-right font-medium">{t("volume_24h")}</th>
                    <th className="pb-3 text-right font-medium">{t("hotness")}</th>
                  </tr>
                </thead>
                <tbody>
                  {trendingEvents.map((event) => (
                    <tr key={event.id} className="group hover:bg-secondary transition-colors border-b border-border last:border-0">
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
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-accent to-yellow-600 drop-shadow-md" style={{ textShadow: '0px 4px 10px rgba(0,0,0,0.5)' }}>
                  Top 1
                </span>
              </div>
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
                  <p className="text-sm opacity-80">{t("upcoming")} • {t("location_hcm")}</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* === LATEST / UPCOMING EVENTS (From API) === */}
        <section className="container mx-auto px-4 mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-txt-primary">{t("latest_events")}</h2>
            <Link href={`/${locale}/events`} className="text-primary hover:text-primary-hover text-sm font-medium flex items-center gap-1 transition-colors">
              {t("view_all")} <ChevronRight size={16} />
            </Link>
          </div>

          {loadingEvents ? (
            <div className="flex justify-center py-10">
              <Loader2 className="animate-spin text-primary" size={40} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestEvents.length > 0 ? latestEvents.map((event) => (
                <Link key={event.id} href={`/${locale}/events/${event.id}`} className="block">
                  <div className="bg-surface rounded-xl overflow-hidden border border-border hover:shadow-lg hover:shadow-primary/10 transition-all group h-full flex flex-col">
                    {/* Card Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      {event.bannerImage ? (
                        <Image
                          src={event.bannerImage}
                          alt={event.eventName}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-gray-300">
                          <Calendar size={32} />
                        </div>
                      )}
                      <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                        {event.categoryName || "Event"}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="font-bold text-txt-primary text-md mb-3 line-clamp-2 min-h-[48px] group-hover:text-primary transition-colors">
                        {event.eventName}
                      </h3>

                      <div className="space-y-2 text-sm text-txt-muted mt-auto">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-primary shrink-0" />
                          <span>{formatDate(event.startDatetime)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} className="text-primary shrink-0" />
                          <span className="line-clamp-1">{event.venue || "Online"}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-border">
                        <span className="text-primary font-bold block">
                          {/* Placeholder for price, as list API might not explicitly return it in sample */}
                          {t("contact")}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )) : (
                <div className="col-span-4 text-center py-10 text-txt-muted">
                  {t("no_upcoming_events")}
                </div>
              )}
            </div>
          )}
        </section>

      </div>
      <Footer />
    </>
  );
}