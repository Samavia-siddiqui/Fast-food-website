import { Link } from 'react-router-dom';
import { ArrowRight, Flame, IceCream, Coffee } from 'lucide-react';

export function Home() {
  return (
    <section className="relative overflow-hidden px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-200">
              Fresh burgers, fries, shakes, dessert
            </span>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Satisfy your cravings with hot burgers, loaded tacos, and creamy ice cream.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Discover a modern fast food menu with bold flavors, crispy sides, sweet desserts, and chilled drinks—all served in a polished animated experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center gap-3 rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 shadow-soft-3d transition hover:-translate-y-1 hover:bg-amber-300"
              >
                View full menu <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-slate-700 px-6 py-3 text-slate-200 transition hover:border-amber-400 hover:text-white"
              >
                Order & contact
              </Link>
            </div>
          </div>

          <div className="relative mx-auto max-w-xl">
            <div className="hero-card cursor-pointer rounded-[2rem] bg-gradient-to-br from-rose-500/15 via-fuchsia-500/10 to-sky-500/10 p-1 shadow-soft-3d transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="card-3d overflow-hidden rounded-[1.75rem] bg-slate-950/95 shadow-soft-3d">
                <img
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80"
                  alt="Signature burger meal"
                  loading="lazy"
                  onError={(event) => {
                    const img = event.currentTarget as HTMLImageElement;
                    img.onerror = null;
                    img.src = 'https://via.placeholder.com/900x560/1f2937/ffffff?text=Food+Hero';
                  }}
                  className="h-[460px] w-full object-cover"
                />
                <div className="px-6 py-6 sm:px-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Signature Meal</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">Supreme Burger Feast</h2>
                  <p className="mt-4 text-slate-300">
                    A stacked burger plate with fries, sauce, and a side of tiki-style freshness.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-4">
                      <p className="text-sm uppercase text-slate-400">Chef favorite</p>
                      <p className="mt-2 text-base text-white">Loaded with crispy bacon and melted cheese.</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-4">
                      <p className="text-sm uppercase text-slate-400">Perfect combo</p>
                      <p className="mt-2 text-base text-white">Served with fries, drink, and dessert pick.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-8 top-16 h-28 w-28 animate-float rounded-full bg-rose-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-8 bottom-12 h-20 w-20 animate-float rounded-full bg-amber-400/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
