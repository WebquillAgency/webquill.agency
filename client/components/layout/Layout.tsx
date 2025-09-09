import { PropsWithChildren } from "react";

function Logo() {
  return (
    <a href="#home" className="inline-flex items-center">
      <span className="relative inline-flex h-5 w-auto items-center md:h-6">
        <span aria-hidden className="pointer-events-none absolute inset-0 -z-10 blur-3xl [filter:drop-shadow(0_0_70px_rgba(250,204,21,.75))]" />
        <span aria-hidden className="pointer-events-none absolute inset-0 -z-20 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.28),transparent)]" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F9eca9cb915f54ee99d3e8f0e5548b9ba%2F2c19276b34c8493995e0880e21c54c28?format=webp&width=360"
          alt="Webquill Agency"
          className="h-5 w-auto object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,.9)] brightness-125 contrast-125 md:h-6"
          loading="eager"
        />
      </span>
    </a>
  );
}

import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-2 md:top-4 z-40">
      <div className="mx-auto max-w-5xl px-2">
        <div className="flex h-14 md:h-16 items-center justify-between rounded-full border border-white/10 bg-black/40 px-3 backdrop-blur">
          <Logo />
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#services"
              className="hidden sm:inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 shadow-[0_0_0_1px_rgba(255,255,255,.1)_inset] backdrop-blur hover:bg-white/10 transition-colors md:inline-flex"
            >
              Get Started
            </a>
            <button
              aria-label="Open menu"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 backdrop-blur hover:bg-white/10 md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3 10.6 10.6 16.9 4.3z"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"/></svg>
              )}
            </button>
          </div>
        </div>
        <div className={`fixed inset-0 z-50 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
            onClick={() => setOpen(false)}
          />
          <div
            className={`absolute left-0 top-0 h-full w-80 max-w-[85%] border-r border-white/10 bg-black/90 backdrop-blur-xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-white/10 p-4">
                <Logo />
                <button aria-label="Close menu" className="rounded-full p-2 text-slate-200 hover:bg-white/10 transition-colors" onClick={() => setOpen(false)}>
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3 10.6 10.6 16.9 4.3z"/></svg>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <nav className="space-y-2">
                  {links.map((l, index) => (
                    <a 
                      key={l.href} 
                      href={l.href} 
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-slate-200 hover:bg-white/10 transition-all duration-200 hover:translate-x-1" 
                      onClick={() => setOpen(false)}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="h-2 w-2 rounded-full bg-amber-400/60"></span>
                      {l.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 space-y-4">
                  <a 
                    href="#services" 
                    className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-300 px-4 py-3 font-semibold text-black hover:from-amber-300 hover:to-yellow-200 transition-all duration-200 hover:scale-105" 
                    onClick={() => setOpen(false)}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Get Started
                  </a>
                  <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/10">
                    <a href="https://wa.me/9711638511" className="rounded-full bg-green-600/20 p-3 text-green-400 hover:bg-green-600/30 transition-colors" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M20 3.5A10 10 0 0 0 4.2 16.8L3 21l4.3-1.1A10 10 0 1 0 20 3.5Zm-8 1.8a6.6 6.6 0 0 1 6.6 6.6 6.6 6.6 0 0 1-9.6 5.8l-.3-.2-2.8.7.8-2.7-.2-.3A6.6 6.6 0 0 1 12 5.3Zm3.8 8.5c-.2.6-1.1 1.1-1.5 1.2-.4.1-.9.1-1.5-.1s-1.5-.5-2.6-1.3c-1-.7-1.7-1.6-2-1.9-.2-.3-.5-.8-.5-1.3 0-.5.3-.8.5-1.1.1-.3.4-.4.6-.4h.4c.1 0 .3 0 .4.3.2.6.5 1 .5 1.1.1.1 0 .3-.1.4l-.2.3c-.1.1-.2.2-.1.4.2.3.6.9 1.2 1.4.8.6 1.4.8 1.6.9.2.1.3.1.4 0l.4-.2c.1 0 .3-.1.5 0 .1.1.5.2.5.4Z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/webquill.agency?igsh=dHJuZDYwOXJkcTg=" className="rounded-full bg-pink-600/20 p-3 text-pink-400 hover:bg-pink-600/30 transition-colors" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm6-1.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z"/></svg>
                    </a>
                    <a href="mailto:webquill.agency@gmail.com" className="rounded-full bg-blue-600/20 p-3 text-blue-400 hover:bg-blue-600/30 transition-colors">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M22 6.5V19a2 2 0 0 1-2 2h-3V9.8l-5 3.6-5-3.6V21H4a2 2 0 0 1-2-2V6.5a2 2 0 0 1 3.2-1.6L12 9l6.8-4.1A2 2 0 0 1 22 6.5Z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/20 backdrop-blur">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-slate-300">
            Premium websites, engineered with precision. Shopify, WordPress, and fully custom experiences that convert.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#legal" className="hover:text-white">Privacy & Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Shopify Websites</li>
              <li>WordPress Websites</li>
              <li>Custom Web Apps</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="mailto:webquill.agency@gmail.com" className="hover:text-white">webquill.agency@gmail.com</a></li>
              <li><a href="https://wa.me/9711638511" className="hover:text-white" target="_blank" rel="noreferrer noopener">+971 16 385 11</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex items-center justify-between py-6 text-xs text-slate-400">
          <p>© {year} Webquill Agency. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://twitter.com/" aria-label="Twitter" className="hover:text-white" target="_blank" rel="noreferrer noopener">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M22 5.8c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2.1-.7.4-1.5.8-2.4.9a3.6 3.6 0 0 0-6.2 3.3 10.2 10.2 0 0 1-7.4-3.8 3.6 3.6 0 0 0 1.1 4.8c-.6 0-1.1-.2-1.6-.4 0 1.7 1.2 3.2 2.9 3.5-.5.1-1 .2-1.5.1.4 1.4 1.8 2.4 3.4 2.4A7.2 7.2 0 0 1 2 18.6 10.1 10.1 0 0 0 7.6 20c6.8 0 10.6-5.6 10.6-10.6v-.5c.7-.4 1.3-1.1 1.8-1.9Z"/></svg>
            </a>
            <a href="https://www.instagram.com/webquill.agency?igsh=dHJuZDYwOXJkcTg=" aria-label="Instagram" className="hover:text-white" target="_blank" rel="noreferrer noopener">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm6-1.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z"/></svg>
            </a>
            <a href="https://wa.me/9711638511" aria-label="WhatsApp" className="hover:text-white" target="_blank" rel="noreferrer noopener">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M20 3.5A10 10 0 0 0 4.2 16.8L3 21l4.3-1.1A10 10 0 1 0 20 3.5Zm-8 1.8a6.6 6.6 0 0 1 6.6 6.6 6.6 6.6 0 0 1-9.6 5.8l-.3-.2-2.8.7.8-2.7-.2-.3A6.6 6.6 0 0 1 12 5.3Zm3.8 8.5c-.2.6-1.1 1.1-1.5 1.2-.4.1-.9.1-1.5-.1s-1.5-.5-2.6-1.3c-1-.7-1.7-1.6-2-1.9-.2-.3-.5-.8-.5-1.3 0-.5.3-.8.5-1.1.1-.3.4-.4.6-.4h.4c.1 0 .3 0 .4.3.2.6.5 1 .5 1.1.1.1 0 .3-.1.4l-.2.3c-.1.1-.2.2-.1.4.2.3.6.9 1.2 1.4.8.6 1.4.8 1.6.9.2.1.3.1.4 0l.4-.2c.1 0 .3-.1.5 0 .1.1.5.2.5.4Z"/></svg>
            </a>
            <a href="mailto:webquill.agency@gmail.com" aria-label="Gmail" className="hover:text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M22 6.5V19a2 2 0 0 1-2 2h-3V9.8l-5 3.6-5-3.6V21H4a2 2 0 0 1-2-2V6.5a2 2 0 0 1 3.2-1.6L12 9l6.8-4.1A2 2 0 0 1 22 6.5Z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen antialiased text-slate-200">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(245,158,11,0.15),transparent),radial-gradient(800px_400px_at_80%_10%,rgba(234,179,8,0.1),transparent)]" />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(to_bottom_right,rgba(10,12,12,1),rgba(10,12,12,.9)_30%,rgba(0,0,0,.9))]" />
      <Header />
      <main className="pt-0">{children}</main>
      <Footer />
    </div>
  );
}
