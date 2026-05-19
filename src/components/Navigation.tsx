import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <NavLink to="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-amber-300">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-rose-500 via-fuchsia-500 to-amber-400 text-slate-950 shadow-soft-3d">
            <Menu size={20} />
          </span>
          FlavorRush
        </NavLink>

        <nav className="flex flex-wrap items-center gap-3">
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-amber-400/15 text-amber-300 shadow-soft-3d' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
