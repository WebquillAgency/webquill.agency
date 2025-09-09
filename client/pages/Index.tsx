import Section from "./shared/Section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Marquee from "@/components/ui/marquee";
import PricingModal from "@/components/ui/pricing-modal";
import { useScrollReveal, useStaggeredReveal } from "@/hooks/use-scroll-reveal";
import SEOHead from "@/components/seo/SEOHead";
import { useState } from "react";

export default function Index() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredImageId, setHoveredImageId] = useState<string | null>(null);
  const [pricingModal, setPricingModal] = useState<{isOpen: boolean, serviceId: string, serviceName: string}>({
    isOpen: false,
    serviceId: '',
    serviceName: ''
  });
  
  const [selectedPlanData, setSelectedPlanData] = useState<{serviceId: string, serviceName: string, planType: string, planTitle: string, price: string} | null>(null);

  // Scroll reveal hooks
  const heroReveal = useScrollReveal();
  const portfolioReveal = useScrollReveal();
  const servicesReveal = useStaggeredReveal(6, 150);
  const aboutReveal = useScrollReveal();
  const contactReveal = useScrollReveal();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Store form reference before async operations
    const form = e.currentTarget;
    
    try {
      const formData = new FormData(form);
      
      // Add selected plan data to form if available
      if (selectedPlanData) {
        formData.append('selected_service', selectedPlanData.serviceName);
        formData.append('selected_plan', selectedPlanData.planTitle);
        formData.append('selected_price', selectedPlanData.price);
        formData.append('plan_type', selectedPlanData.planType);
      }
      
      const response = await fetch('https://formspree.io/f/xvgblaqj', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (response.ok || response.status === 200) {
        // Show success message
        toast({ 
          title: "Message sent successfully!", 
          description: selectedPlanData 
            ? `Your inquiry for ${selectedPlanData.planTitle} has been sent. We'll get back to you within 1 business day!`
            : "Your message has been sent. We'll get back to you within 1 business day!" 
        });
        
        // Reset form and selected plan data using stored reference
        form.reset();
        setSelectedPlanData(null);
      } else {
        // Log the actual error for debugging
        console.error('Formspree response:', data);
        throw new Error(data.error || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({ 
        title: "Error sending message", 
        description: "There was a problem sending your message. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const openPricingModal = (serviceId: string, serviceName: string) => {
    setPricingModal({ isOpen: true, serviceId, serviceName });
  };
  
  const handlePlanSelection = (planData: {serviceId: string, serviceName: string, planType: string, planTitle: string, price: string}) => {
    setSelectedPlanData(planData);
    setPricingModal({ isOpen: false, serviceId: '', serviceName: '' });
    // Scroll to contact section
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const closePricingModal = () => {
    setPricingModal({ isOpen: false, serviceId: '', serviceName: '' });
  };

  return (
    <div className="min-h-screen">
      <SEOHead />
      {/* Hero */}
      <Section id="home">
        <div className="container relative mt-[-6px] pt-10 pb-20 sm:pt-12 md:pt-12 md:pb-24">
          <div className="absolute -top-10 right-8 h-28 w-28 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="absolute -left-10 top-40 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl" />

          <div 
            ref={heroReveal.ref}
            className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${
              heroReveal.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <span className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur transition-all duration-700 delay-200 ${
              heroReveal.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              Premium Web Studio
            </span>
            <h1 className={`mt-6 bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-6xl transition-all duration-1000 delay-300 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Webquill Agency
            </h1>
            <p className={`mx-auto mt-5 max-w-2xl text-lg text-slate-300 transition-all duration-1000 delay-500 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Shopify, WordPress, and bespoke websites engineered for performance, polish, and conversions.
            </p>
            <div className={`mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row transition-all duration-1000 delay-700 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <a
                href="#services"
                className="rounded-full bg-gradient-to-br from-amber-400 to-yellow-300 px-8 py-3 text-lg font-semibold text-black hover:from-amber-300 hover:to-yellow-200 transition-all duration-200 hover:scale-105 shadow-lg shadow-amber-500/25"
              >
                Get started
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 backdrop-blur transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        
        {/* Premium section heading */}
        <div className="container mt-16 mb-8">
          <div 
            ref={portfolioReveal.ref}
            className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${
              portfolioReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              <div className="absolute -top-4 left-1/2 h-px w-24 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent transform -translate-x-1/2" />
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                <span className="bg-gradient-to-br from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  Designs that speak for themselves
                </span>
              </h2>
              <div className="absolute -bottom-4 left-1/2 h-px w-24 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent transform -translate-x-1/2" />
            </div>
            <p className="mt-6 text-lg text-slate-300/90 font-light">
              Every pixel crafted with precision. Every interaction designed for impact.
            </p>
          </div>
        </div>

        {/* Full-width marquee breaking out of container */}
        <div className="w-screen overflow-visible relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
          <Marquee pauseOnHover className="[--duration:40s] [--gap:3rem]">
            {[
              { name: "Business Website", src: "/business.jpg" },
              { name: "Furniture Store", src: "/furniture.jpg" },
              { name: "Gardening Services", src: "/gardening.jpg" },
              { name: "Jewellery Collection", src: "/jewellery.jpg" },
              { name: "Travel Agency", src: "/travel.jpg" },
            ].map((screenshot, index) => {
              const uniqueId = `${screenshot.name}-${index}-${Math.random().toString(36).substr(2, 9)}`;
              return (
                <div
                  key={uniqueId}
                  className="relative flex-shrink-0 mx-6 cursor-pointer group"
                  onMouseEnter={() => setHoveredImageId(uniqueId)}
                  onMouseLeave={() => setHoveredImageId(null)}
                >
                  <div className={`
                    relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 ease-out transform-gpu border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm
                    ${hoveredImageId === uniqueId 
                      ? 'scale-125 z-50 shadow-3xl shadow-amber-500/20 border-amber-300/30' 
                      : 'scale-100 hover:scale-105 hover:shadow-amber-500/10'
                    }
                  `}>
                    <img
                      src={screenshot.src}
                      alt={screenshot.name}
                      className={`
                        transition-all duration-500 ease-out
                        ${hoveredImageId === uniqueId 
                          ? 'h-80 w-60 object-contain sm:h-96 sm:w-72 md:h-[28rem] md:w-84 lg:h-[32rem] lg:w-96' 
                          : 'h-60 w-45 object-cover sm:h-72 sm:w-54 md:h-80 md:w-60 lg:h-96 lg:w-72'
                        }
                      `}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className={`
                      absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                      transition-opacity duration-300
                      ${hoveredImageId === uniqueId ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}
                    `} />
                    <div className={`
                      absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                      transition-all duration-300
                      ${hoveredImageId === uniqueId ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}
                    `}>
                      <h3 className="text-xs font-semibold text-white drop-shadow-lg sm:text-sm tracking-wide">{screenshot.name}</h3>
                      <div className="mt-1 h-px w-8 bg-gradient-to-r from-amber-300 to-transparent" />
                    </div>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Our Services</h2>
            <p className="mt-4 text-slate-300">
              Select the stack that fits your goals. We bring premium design, clean code, and measurable results.
            </p>
          </div>
          <div 
            ref={servicesReveal.ref}
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "Shopify Website",
                serviceId: "shopify",
                desc: "Custom themes, headless storefronts, performance optimization, and app integrations.",
                features: ["Custom Themes", "App Integration", "Performance Optimization", "Mobile Responsive"],
                gradient: "from-green-400/20 to-emerald-300/20",
                hoverGradient: "from-green-400/30 to-emerald-300/30",
                iconColor: "text-green-400",
                bgColor: "bg-green-500/10",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor"><path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/></svg>
                ),
              },
              {
                title: "WordPress Website",
                serviceId: "wordpress",
                desc: "Block-based builds, custom themes/plugins, enterprise-grade security, and SEO.",
                features: ["Custom Themes", "Plugin Development", "SEO Optimization", "Security Hardening"],
                gradient: "from-blue-400/20 to-cyan-300/20",
                hoverGradient: "from-blue-400/30 to-cyan-300/30",
                iconColor: "text-blue-400",
                bgColor: "bg-blue-500/10",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor"><path d="M12.158 12.786L9.46 20.625c.806.237 1.657.366 2.54.366 1.047 0 2.051-.18 2.986-.51-.024-.037-.046-.078-.065-.123l-2.763-7.572zm-5.14.24l3.307 9.04c-.965-.6-1.832-1.39-2.546-2.33C6.934 18.633 6.35 17.3 6.35 15.847c0-1.266.264-2.472.668-3.821zm7.599-8.757c-.024-.037-.046-.078-.065-.123l-2.763-7.572c.806.237 1.657.366 2.54.366 1.047 0 2.051-.18 2.986-.51zm-5.14.24l3.307 9.04c-.965-.6-1.832-1.39-2.546-2.33C9.393 9.633 8.809 8.3 8.809 6.847c0-1.266.264-2.472.668-3.821z"/></svg>
                ),
              },
              {
                title: "Custom Websites",
                serviceId: "custom",
                desc: "Next-level experiences with animations, headless CMS, and bespoke UI built to spec.",
                features: ["Custom Design", "Advanced Animations", "Headless CMS", "API Integration"],
                gradient: "from-purple-400/20 to-pink-300/20",
                hoverGradient: "from-purple-400/30 to-pink-300/30",
                iconColor: "text-purple-400",
                bgColor: "bg-purple-500/10",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor"><path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4zm-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"/></svg>
                ),
              },
              {
                title: "Digital Marketing",
                serviceId: "marketing",
                desc: "SEO optimization, social media campaigns, PPC advertising, and conversion tracking.",
                features: ["SEO Strategy", "Social Media", "PPC Campaigns", "Analytics & Tracking"],
                gradient: "from-orange-400/20 to-red-300/20",
                hoverGradient: "from-orange-400/30 to-red-300/30",
                iconColor: "text-orange-400",
                bgColor: "bg-orange-500/10",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ),
              },
              {
                title: "Graphic Design",
                serviceId: "graphics",
                desc: "Brand identity, logos, marketing materials, and visual storytelling that captivates.",
                features: ["Logo Design", "Brand Identity", "Marketing Materials", "Visual Storytelling"],
                gradient: "from-pink-400/20 to-rose-300/20",
                hoverGradient: "from-pink-400/30 to-rose-300/30",
                iconColor: "text-pink-400",
                bgColor: "bg-pink-500/10",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/></svg>
                ),
              },
              {
                title: "WhatsApp Chatbot",
                serviceId: "chatbot",
                desc: "Automated customer support, lead generation, and 24/7 business communication.",
                features: ["24/7 Support", "Lead Generation", "Order Processing", "Customer Engagement"],
                gradient: "from-green-400/20 to-teal-300/20",
                hoverGradient: "from-green-400/30 to-teal-300/30",
                iconColor: "text-green-400",
                bgColor: "bg-green-500/10",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488"/></svg>
                ),
              },
            ].map((s, index) => (
              <div
                key={s.title}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur-sm transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl hover:shadow-amber-500/15 ${
                  servicesReveal.visibleItems[index] 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Dynamic background gradient based on service */}
                <div className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${s.gradient} blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:${s.hoverGradient}`} />
                
                {/* Floating accent circle */}
                <div className={`absolute top-6 right-6 h-12 w-12 rounded-full ${s.bgColor} opacity-20 transition-all duration-500 group-hover:opacity-40 group-hover:scale-125`} />
                
                <div className="relative z-10">
                  {/* Icon with service-specific colors */}
                  <div className={`mb-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} p-4 ${s.iconColor} shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:${s.hoverGradient} group-hover:rotate-6 border border-white/10`}>
                    {s.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className={`mb-4 text-2xl font-bold text-white transition-all duration-300 group-hover:${s.iconColor.replace('text-', 'text-')}/90`}>
                    {s.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="mb-6 text-slate-300/90 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {s.desc}
                  </p>
                  
                  {/* Features list */}
                  <div className="mb-8 grid grid-cols-2 gap-3">
                    {s.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                        <div className={`h-1.5 w-1.5 rounded-full ${s.iconColor.replace('text-', 'bg-')} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Section */}
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => openPricingModal(s.serviceId, s.title)}
                      className={`group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${s.gradient} px-6 py-3 font-semibold ${s.iconColor} transition-all duration-300 hover:${s.hoverGradient} hover:scale-105 hover:shadow-lg border border-white/10 hover:border-white/20`}
                    >
                      Start Project
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                    <div className="flex items-center gap-1 text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      Premium Quality
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* About */}
      <Section id="about">
        <div className="container py-16 md:py-24">
          <div 
            ref={aboutReveal.ref}
            className={`grid items-center gap-10 lg:grid-cols-2 transition-all duration-1000 ${
              aboutReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">About Us</h2>
              <p className="mt-4 text-slate-300">
                At Webquill Agency, we're passionate about creating digital experiences that drive real business results. Founded by a team of designers and developers who believe that great websites should be both beautiful and functional, we've helped over 50 businesses transform their online presence.
              </p>
              <p className="mt-4 text-slate-300">
                Our approach combines cutting-edge technology with user-centered design principles. Whether you're a startup looking to make your mark or an established business ready to scale, we craft custom solutions that align with your goals and exceed your expectations.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl font-bold text-white">50+ </div>
                  <div className="text-xs text-slate-300">Happy Clients</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl font-bold text-white">2+ </div>
                  <div className="text-xs text-slate-300">Years Experience</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl font-bold text-white">24/7 </div>
                  <div className="text-xs text-slate-300">Support</div>
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
                    "Working with Webquill was a game-changer for our business. They didn't just build us a website - they created a complete digital strategy that increased our online sales by 180% in just 3 months."
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-400 to-yellow-300" />
                    <div>
                      <div className="text-sm font-semibold text-white">Priya Sharma</div>
                      <div className="text-xs text-slate-400">CEO, Artisan Crafts India</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-slate-300">
              Real feedback from businesses we've helped grow their online presence.
            </p>
          </div>
          <Marquee pauseOnHover className="[--duration:60s]">
            {[
              {
                quote: "The team at Webquill completely transformed our e-commerce store. Our conversion rate went from 1.2% to 4.8% within two months. The new design is not only beautiful but actually helps customers find what they need faster.",
                author: "Rajesh Kumar",
                company: "TechGadgets Pro"
              },
              {
                quote: "I was skeptical about investing in a new website, but Webquill proved me wrong. Our organic traffic increased by 300% and we're getting quality leads daily. The SEO work they did was incredible.",
                author: "Meera Patel",
                company: "Green Valley Organics"
              },
              {
                quote: "Working with Webquill felt like having an in-house team. They understood our vision immediately and delivered exactly what we needed. The WordPress site they built loads super fast and is easy for us to manage.",
                author: "Arjun Singh",
                company: "Mountain Adventures"
              },
              {
                quote: "Our Shopify store was struggling with abandoned carts. Webquill redesigned our checkout process and integrated smart upsells. We saw a 60% reduction in cart abandonment in the first month.",
                author: "Kavya Reddy",
                company: "Handloom Heritage"
              },
              {
                quote: "The WhatsApp chatbot they built for us handles 80% of our customer queries automatically. It's saved us so much time and our customers love getting instant responses 24/7.",
                author: "Vikram Joshi",
                company: "Urban Fitness Hub"
              },
              {
                quote: "Webquill didn't just design our website - they created our entire digital marketing strategy. The social media campaigns they run have brought us customers we never would have reached otherwise.",
                author: "Ananya Gupta",
                company: "Bloom Beauty Studio"
              }
            ].map((testimonial, index) => (
              <div key={index} className="mx-4 w-80 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <blockquote className="text-slate-200 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-300" />
                  <div>
                    <div className="text-sm font-semibold text-white">{testimonial.author}</div>
                    <div className="text-xs text-slate-400">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <div className="container py-16 md:py-24">
          <div 
            ref={contactReveal.ref}
            className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${
              contactReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
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
                <Select name="type" defaultValue={selectedPlanData?.serviceId || ""}>
                  <SelectTrigger id="type">
                    <SelectValue placeholder={selectedPlanData?.serviceName || "Choose one"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="shopify">Shopify Website</SelectItem>
                    <SelectItem value="wordpress">WordPress Website</SelectItem>
                    <SelectItem value="custom">Custom Website</SelectItem>
                    <SelectItem value="marketing">Digital Marketing</SelectItem>
                    <SelectItem value="graphics">Graphic Design</SelectItem>
                    <SelectItem value="chatbot">WhatsApp Chatbot</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2 grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder={selectedPlanData 
                    ? `I'm interested in the ${selectedPlanData.serviceName.toLowerCase()} ${selectedPlanData.planTitle} plan (${selectedPlanData.price}). Please provide more details about the next steps, timeline, and any additional requirements.`
                    : "Tell us about your timeline, scope, and goals"} 
                  defaultValue={selectedPlanData 
                    ? `I'm interested in the ${selectedPlanData.serviceName.toLowerCase()} ${selectedPlanData.planTitle} plan (${selectedPlanData.price}). Please provide more details about the next steps, timeline, and any additional requirements.`
                    : ""}
                  rows={6} 
                  required 
                />
              </div>
              <div className="md:col-span-2 flex flex-col gap-3">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-br from-amber-400 to-yellow-300 text-black hover:from-amber-300 hover:to-yellow-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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

      {/* Pricing Modal */}
        <PricingModal 
          isOpen={pricingModal.isOpen} 
          onClose={() => setPricingModal({ isOpen: false, serviceId: '', serviceName: '' })} 
          serviceId={pricingModal.serviceId}
          serviceName={pricingModal.serviceName}
          onPlanSelect={handlePlanSelection}
        />
    </div>
  );
}
