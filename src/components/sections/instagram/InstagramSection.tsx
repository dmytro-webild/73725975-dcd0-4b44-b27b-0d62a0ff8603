import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/useLanguage";

export interface InstagramPost {
  id: string;
  imageSrc: string;
  imageAlt: string;
  vehicle: string;
  finish: string;
  likes: number;
  comments: number;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig-1",
    imageSrc: "https://images.pexels.com/photos/6969027/pexels-photo-6969027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageAlt: "Porsche GT3 RS Stealth Satin Obsidian Wrap in Zurich",
    vehicle: "Porsche 911 GT3 RS",
    finish: "Stealth Satin Black",
    likes: 1420,
    comments: 84
  },
  {
    id: "ig-2",
    imageSrc: "https://images.pexels.com/photos/10162528/pexels-photo-10162528.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageAlt: "BMW M4 Competition Nardo Grey Wrap",
    vehicle: "BMW M4 Competition",
    finish: "Nardo Grey Gloss",
    likes: 980,
    comments: 42
  },
  {
    id: "ig-3",
    imageSrc: "https://images.pexels.com/photos/18370669/pexels-photo-18370669.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageAlt: "Mercedes AMG GT 63 S Full Body PPF Armor",
    vehicle: "Mercedes-AMG GT 63 S",
    finish: "Matte PPF Shield",
    likes: 1850,
    comments: 112
  },
  {
    id: "ig-4",
    imageSrc: "https://img.b2bpic.net/free-photo/person-working-car-wrapping_23-2149342620.jpg?_wi=1",
    imageAlt: "Atelier Technician Applying Knifeless Tape Detail",
    vehicle: "Precision Execution",
    finish: "Door Jamb Precision",
    likes: 2100,
    comments: 96
  },
  {
    id: "ig-5",
    imageSrc: "https://images.pexels.com/photos/6010581/pexels-photo-6010581.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    imageAlt: "Ferrari F8 Ceramic Window Tinting Zurich",
    vehicle: "Ferrari F8 Tributo",
    finish: "Ceramic Tint 15%",
    likes: 1240,
    comments: 54
  },
  {
    id: "ig-6",
    imageSrc: "https://picsum.photos/seed/635309748/1200/800",
    imageAlt: "Audi RS6 Avant Full Satin Chrome Delete",
    vehicle: "Audi RS6 Avant",
    finish: "Chrome Delete Blackout",
    likes: 1670,
    comments: 78
  }
];

export default function InstagramSection() {
  const { t } = useLanguage();

  return (
    <section id="instagram" className="relative py-[var(--section-space)] text-foreground bg-background border-t border-border/40">
      <div className="mx-auto w-[var(--container)]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-border/60 bg-muted/40 text-[length:var(--text-label)] font-mono uppercase tracking-[0.15em] text-foreground/70">
              <Instagram className="size-3.5 text-primary" />
              <span>{t.instagram.badge}</span>
            </div>
            <h2 className="text-[length:var(--text-h1)] font-light uppercase tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] leading-[0.9]">
              {t.instagram.titleLine1} <br />
              <span className="text-foreground/50">{t.instagram.titleLine2}</span>
            </h2>
          </div>

          <a
            href="https://instagram.com/jdcarwrappingatelier"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border/80 text-foreground font-mono text-xs uppercase tracking-widest hover:bg-muted transition-all shrink-0"
          >
            <span>{t.instagram.followBtn}</span>
            <ExternalLink className="size-4" />
          </a>
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/jdcarwrappingatelier"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-card border border-border/60"
            >
              <img
                src={post.imageSrc}
                alt={post.imageAlt}
                className="size-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-background/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-primary">
                  <Instagram className="size-3.5" />
                  <span>Zurich</span>
                </div>

                <div className="space-y-1 text-center">
                  <p className="text-xs font-mono font-semibold uppercase text-foreground truncate">{post.vehicle}</p>
                  <p className="text-[10px] font-mono text-foreground/60 truncate">{post.finish}</p>
                </div>

                <div className="flex items-center justify-center gap-4 text-xs font-mono text-foreground/80">
                  <span className="flex items-center gap-1">
                    <Heart className="size-3.5 text-rose-500 fill-rose-500" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="size-3.5" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
