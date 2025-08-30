import Section from "./shared/Section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Index() {
  const { toast } = useToast();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const type = String(fd.get("type") || "");
    const message = String(fd.get("message") || "");
    
    // Create email content with form details
    const emailSubject = `New Project Inquiry - ${type || "General Inquiry"} from ${name}`;
    const emailBody = `Hi Webquill Agency,

I'm interested in your services. Here are my details:

Name: ${name}
Email: ${email}
Project Type: ${type || "Not specified"}

Message:
${message}

Please get back to me soon!

Best regards,
${name}`;

    // Open email client with pre-filled content
    const mailtoLink = `mailto:webquill.agency@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink);
    
    // Show success message
    toast({ 
      title: "Email client opened!", 
      description: `Your email client should open with all the details. If it doesn't, you can email us directly at webquill.agency@gmail.com` 
    });
    
    e.currentTarget.reset();
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <Section id="home">
        <div className="container relative mt-[-6px] pt-10 pb-20 sm:pt-12 md:pt-12 md:pb-24">
          <div className="absolute -top-10 right-8 h-28 w-28 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="absolute -left-10 top-40 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl" />

          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur">
              Premium Web Studio
            </span>
            <h1 className="mt-6 bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-6xl">
              Webquill Agency
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
              Shopify, WordPress, and bespoke websites engineered for performance, polish, and conversions.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-amber-400 to-yellow-300 px-6 py-3 text-sm font-semibold text-black shadow-xl shadow-amber-500/20 transition-colors hover:from-amber-300 hover:to-yellow-200"
              >
                Get Started
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 backdrop-blur transition-colors hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { title: "Shopify Websites", desc: "High-converting storefronts and theme engineering." },
                { title: "WordPress Websites", desc: "Robust, SEO-ready sites powered by Gutenberg or custom." },
                { title: "Custom Websites", desc: "From concept to code — unique, scalable web experiences." },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 text-left shadow-[0_0_0_1px_rgba(255,255,255,.06)_inset,0_20px_60px_-20px_rgba(255,196,0,.25)] backdrop-blur"
                >
                  <h3 className="text-base font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Our Services</h2>
            <p className="mt-4 text-slate-300">
              Select the stack that fits your goals. We bring premium design, clean code, and measurable results.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Shopify Website",
                desc: "Custom themes, headless storefronts, performance optimization, and app integrations.",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M6 7.5 12 5l6 2.5v9L12 19 6 16.5v-9Zm6-1.7L8 7l4 1.7L16 7l-4-1.2Zm-4 3.8 4 1.7 4-1.7m-8 3.4 4 1.7 4-1.7"/></svg>
                ),
              },
              {
                title: "WordPress Website",
                desc: "Block-based builds, custom themes/plugins, enterprise-grade security, and SEO.",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm.3 3.5c2.5 0 4.1 1.8 4.1 4 0 1.7-1 3.1-2 4.8-.8 1.4-1.6 3.1-1.9 5-.3-1.6-.9-3.1-1.5-4.8l-1.8-5.1c.6-.1 1.1-.1 1.3-.1.6 0 .9.1 1.2.1.4-.1.8-.4 1.6-.4Zm-5.5.7c.3 0 .7 0 1.2.1l3.3 9.1c-.7 1.7-1.1 3.6-1.1 5.1-2.9-1.5-4.9-4.5-4.9-8 0-2.6.7-4.1 1.5-6.3ZM17 7.2c.4.8.6 1.7.6 2.6 0 2.3-1.9 5-3.7 8.4l-.2.3c-.2-1.2.1-2.7.9-4.3.9-1.8 2.4-3.6 2.4-5.2 0-.7-.1-1.1-.4-1.8l.4 0Z"/></svg>
                ),
              },
              {
                title: "Custom Websites",
                desc: "Next-level experiences with animations, headless CMS, and bespoke UI built to spec.",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M4 4h16v2H4V4Zm0 7h16v2H4v-2Zm0 7h16v2H4v-2Z"/></svg>
                ),
              },
            ].map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-transform hover:-translate-y-0.5"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-300/10 blur-2xl" />
                <div className="flex items-start gap-4">
                  <div className="rounded-md bg-gradient-to-br from-amber-400 to-yellow-300 p-2 text-black shadow-lg shadow-amber-500/20">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a href="#contact" className="text-sm font-medium text-amber-300 hover:text-amber-200">
                    Start a project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* About */}
      <Section id="about">
        <div className="container py-16 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">About Us</h2>
              <p className="mt-4 text-slate-300">
                Webquill Agency is a craftsmanship-first studio focused on premium aesthetics and reliable engineering. We blend refined design with robust technology to deliver sites that feel effortless and perform flawlessly.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl font-bold text-white">50+ </div>
                  <div className="text-xs text-slate-300">Projects</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl font-bold text-white">100% </div>
                  <div className="text-xs text-slate-300">Commitment</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl font-bold text-white">A+ </div>
                  <div className="text-xs text-slate-300">Quality</div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-yellow-400/20 blur-3xl" />
              <div className="absolute -bottom-8 -right-10 h-28 w-28 rounded-full bg-amber-300/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(400px_200px_at_80%_30%,rgba(250,204,21,.15),transparent)]" />
                <div className="relative">
                  <div className="mb-4 flex items-center gap-2 text-amber-300">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    ))}
                  </div>
                  <blockquote className="text-lg text-slate-200">
                    “Webquill transformed our storefront into a fast, modern experience and boosted conversions in weeks.”
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-400 to-yellow-300" />
                    <div>
                      <div className="text-sm font-semibold text-white">Aarav Mehta</div>
                      <div className="text-xs text-slate-400">Founder, Northstar Outfitters</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Let's build something great</h2>
            <p className="mt-3 text-slate-300">Tell us about your project and goals. We'll reply within 1 business day. Or contact us directly via WhatsApp/Instagram below.</p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Priya Sharma" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="priya@company.in" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="type">Project Type</Label>
                <Select name="type">
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Choose one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="shopify">Shopify Website</SelectItem>
                    <SelectItem value="wordpress">WordPress Website</SelectItem>
                    <SelectItem value="custom">Custom Website</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2 grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Tell us about your timeline, scope, and goals" rows={6} required />
              </div>
              <div className="md:col-span-2 flex flex-col gap-3">
                <Button type="submit" className="w-full bg-gradient-to-br from-amber-400 to-yellow-300 text-black hover:from-amber-300 hover:to-yellow-200">
                  Open Email Client
                </Button>
                <div className="text-center">
                  <span className="text-sm text-slate-400">Contact us directly:</span>
                  <div className="mt-2 flex items-center justify-center gap-4">
                    <a
                      href="https://wa.me/9711638511"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                        <path d="M20 3.5A10 10 0 0 0 4.2 16.8L3 21l4.3-1.1A10 10 0 1 0 20 3.5Zm-8 1.8a6.6 6.6 0 0 1 6.6 6.6 6.6 6.6 0 0 1-9.6 5.8l-.3-.2-2.8.7.8-2.7-.2-.3A6.6 6.6 0 0 1 12 5.3Zm3.8 8.5c-.2.6-1.1 1.1-1.5 1.2-.4.1-.9.1-1.5-.1s-1.5-.5-2.6-1.3c-1-.7-1.7-1.6-2-1.9-.2-.3-.5-.8-.5-1.3 0-.5.3-.8.5-1.1.1-.3.4-.4.6-.4h.4c.1 0 .3 0 .4.3.2.6.5 1 .5 1.1.1.1 0 .3-.1.4l-.2.3c-.1.1-.2.2-.1.4.2.3.6.9 1.2 1.4.8.6 1.4.8 1.6.9.2.1.3.1.4 0l.4-.2c.1 0 .3-.1.5 0 .1.1.5.2.5.4Z"/>
                      </svg>
                      WhatsApp
                    </a>
                    <a
                      href="https://www.instagram.com/webquill.agency?igsh=dHJuZDYwOXJkcTg="
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-purple-600 to-pink-600 px-4 py-2 text-sm font-medium text-white hover:from-purple-700 hover:to-pink-700 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm6-1.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z"/>
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Section>
      {/* Legal */}
      <Section id="legal">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Privacy & Terms</h2>
            <p className="mt-4 text-slate-300">We respect your privacy. We only use information you provide to respond to your enquiry and deliver services you request. We never sell your data.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-lg font-semibold text-white">Privacy Policy</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                  <li>Data collected: name, email, project details you submit.</li>
                  <li>Usage: project communication and proposals only.</li>
                  <li>Retention: removed upon request or when no longer needed.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-lg font-semibold text-white">Terms of Service</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                  <li>Estimates are valid for 14 days unless stated otherwise.</li>
                  <li>All invoices are payable as per agreed milestones.</li>
                  <li>IP transfers on final payment; open-source licenses respected.</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-xs text-slate-400">For any privacy request, email <a className="underline hover:text-amber-300" href="mailto:webquill.agency@gmail.com">webquill.agency@gmail.com</a>.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
