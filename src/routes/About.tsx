export function About() {
  return (
    <section className="px-6 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-soft-3d backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-rose-300">About Us</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            A modern fast food restaurant built for bold tastes and premium digital presentation.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            We deliver an immersive menu experience with animated 3D visuals, flavorful food categories, and a polished design that makes every visitor feel like they are ordering from a next-generation restaurant.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/95 p-8 shadow-soft-3d">
            <h2 className="text-2xl font-semibold text-white">Our Story</h2>
            <p className="mt-4 text-slate-300 leading-7">
              We blend rich flavor, fast service, and modern design into one delicious digital restaurant. Every page is crafted with movement, depth, and attention to detail.
            </p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>• Interactive 3D-inspired cards and sections.</li>
              <li>• Curated menu with burgers, desserts, ice creams, wraps and drinks.</li>
              <li>• Smooth React routing and on-brand motion.</li>
            </ul>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft-3d">
            <h2 className="text-2xl font-semibold text-white">Why Choose Us</h2>
            <div className="mt-6 space-y-4 text-slate-300">
              <p>Fast online navigation, rich visuals, and a premium menu that feels like a curated dining destination.</p>
              <p>Delicious variety with 18+ items, dessert highlights, chilled drinks, and signature chef selections.</p>
              <p>Designed with Tailwind, React Router, and a modern UI system inspired by Shadcn styling.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
