import type { ElementType } from 'react';
import { menuItems } from '../data/menu';
import { Star, IceCream, Coffee, Pizza, Hamburger, Cake, Leaf } from 'lucide-react';

const categoryIcons: Record<string, ElementType> = {
  Burgers: Hamburger,
  Chicken: Star,
  Vegan: Leaf,
  Sides: IceCream,
  Tacos: Star,
  Wraps: Pizza,
  Shakes: Coffee,
  Drinks: Coffee,
  Desserts: Cake,
  Pizza: Pizza,
};

export function Menu() {
  const categories = Array.from(new Set(menuItems.map((item) => item.category)));
  const featuredItems = menuItems.filter((item) => item.name === 'Crispy Chicken Deluxe' || item.name === 'Volcano Burger' || item.name === 'Galaxy Sundae');

  return (
    <section className="px-6 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-rose-300">Menu</p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              18+ premium dishes, desserts, and cool beverages.
            </h1>
            <p className="mt-4 max-w-2xl text-slate-300">
              From juicy burgers and crispy tacos to indulgent sweet treats, every menu item is styled for modern taste and dynamic presentation.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-soft-3d backdrop-blur-xl">
            <div className="space-y-4">
              {categories.slice(0, 4).map((category) => {
                const Icon = categoryIcons[category] ?? Star;
                return (
                  <div key={category} className="flex items-center gap-4 rounded-3xl bg-slate-900/80 p-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-amber-400/15 text-amber-300">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{category}</p>
                      <p className="text-sm text-slate-400">Explore the best flavors.</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-3">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="menu-card cursor-pointer rounded-[2rem] border border-white/10 bg-slate-950/95 p-5 shadow-soft-3d transition duration-300 hover:-translate-y-1"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-rose-300">Featured</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{item.name}</h2>
              <p className="mt-3 text-slate-300">{item.description}</p>
              <div className="mt-5 overflow-hidden rounded-[1.5rem] bg-slate-900/90">
                <img src={item.imageUrl} alt={item.name} className="h-48 w-full object-cover" />
              </div>
              <div className="mt-4 flex items-center justify-between text-slate-200">
                <span className="text-lg font-semibold">{item.price}</span>
                <span className="rounded-full bg-amber-400/15 px-3 py-1 text-sm text-amber-300">Must try</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {menuItems.map((item, index) => (
            <article
              key={item.id}
              className="menu-card cursor-pointer relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 shadow-soft-3d transition duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 60}ms`, animationName: 'fadeInUp' }}
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-amber-500/10 blur-3xl" />
              <div className="absolute -left-8 bottom-8 h-20 w-20 rounded-full bg-fuchsia-500/10 blur-3xl" />
              <div className="overflow-hidden rounded-t-[1.75rem]">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  loading="lazy"
                  onError={(event) => {
                    const img = event.currentTarget as HTMLImageElement;
                    img.onerror = null;
                    img.src = 'https://via.placeholder.com/900x560/1f2937/ffffff?text=Food+Image';
                  }}
                  className="h-56 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="relative z-10 space-y-4 px-6 py-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.category}</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">{item.name}</h2>
                  </div>
                  <span className="rounded-2xl bg-slate-900/80 px-4 py-2 text-sm font-semibold text-amber-300">
                    {item.price}
                  </span>
                </div>
                <p className="text-slate-300">{item.description}</p>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900/80 text-amber-300">
                    <Star size={16} />
                  </span>
                  <span>Chef's favorite selection</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
