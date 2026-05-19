export function Contact() {
  return (
    <section className="px-6 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-soft-3d backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-rose-300">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Get in touch for orders, catering, or fresh menu updates.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Use the form below to request a reservation, ask about special menu items, or send feedback to our kitchen team.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft-3d">
            <h2 className="text-2xl font-semibold text-white">Reach Us</h2>
            <div className="mt-6 space-y-4 text-slate-300">
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <p>hello@fastfood3d.com</p>
              </div>
              <div>
                <p className="font-semibold text-white">Location</p>
                <p>Downtown digital kitchen, flavor street 21</p>
              </div>
            </div>
          </div>

          <form className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft-3d">
            <div className="space-y-6">
              <label className="block">
                <span className="text-sm font-medium text-slate-300">Name</span>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-400"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-300">Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-400"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-300">Message</span>
                <textarea
                  rows={5}
                  placeholder="Tell us what you need"
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-400"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
