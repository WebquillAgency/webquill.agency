import Section from "./shared/Section";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Pricing() {
  const [selectedService, setSelectedService] = useState<string>("all");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const services = [
    {
      id: "shopify",
      name: "Shopify Website",
      plans: {
        basic: {
          price: "$1,299",
          features: ["Custom theme setup", "5 product pages", "Basic SEO", "Mobile responsive", "Payment gateway integration"]
        },
        common: {
          price: "$2,499",
          features: ["Custom theme development", "Unlimited products", "Advanced SEO", "App integrations", "Performance optimization", "Analytics setup"]
        },
        premium: {
          price: "$4,999",
          features: ["Headless commerce", "Custom functionality", "Multi-currency support", "Advanced integrations", "Ongoing maintenance", "Priority support"]
        }
      }
    },
    {
      id: "wordpress",
      name: "WordPress Website",
      plans: {
        basic: {
          price: "$899",
          features: ["Theme customization", "5 pages", "Basic SEO", "Contact forms", "Social media integration"]
        },
        common: {
          price: "$1,799",
          features: ["Custom theme development", "Unlimited pages", "Advanced SEO", "E-commerce ready", "Security optimization", "Performance tuning"]
        },
        premium: {
          price: "$3,499",
          features: ["Custom plugin development", "Advanced functionality", "Multi-site setup", "Enterprise security", "Ongoing maintenance", "Priority support"]
        }
      }
    },
    {
      id: "custom",
      name: "Custom Website",
      plans: {
        basic: {
          price: "$2,499",
          features: ["React/Next.js setup", "5 pages", "Responsive design", "Basic animations", "Contact integration"]
        },
        common: {
          price: "$4,999",
          features: ["Full-stack development", "Custom CMS", "Advanced animations", "API integrations", "Performance optimization", "SEO ready"]
        },
        premium: {
          price: "$9,999",
          features: ["Enterprise architecture", "Microservices", "Advanced integrations", "Custom admin panel", "Scalable infrastructure", "Ongoing support"]
        }
      }
    },
    {
      id: "marketing",
      name: "Digital Marketing",
      plans: {
        basic: {
          price: "$599/mo",
          features: ["SEO audit", "Google My Business", "Basic social media", "Monthly reporting", "Keyword research"]
        },
        common: {
          price: "$1,299/mo",
          features: ["Full SEO management", "PPC campaigns", "Social media management", "Content creation", "Analytics tracking", "Bi-weekly reports"]
        },
        premium: {
          price: "$2,499/mo",
          features: ["Comprehensive strategy", "Multi-platform campaigns", "Advanced analytics", "Conversion optimization", "Dedicated account manager", "Weekly consultations"]
        }
      }
    },
    {
      id: "graphics",
      name: "Graphic Design",
      plans: {
        basic: {
          price: "$299",
          features: ["Logo design", "Business card", "Basic brand colors", "2 revisions", "Final files delivery"]
        },
        common: {
          price: "$799",
          features: ["Complete brand identity", "Logo variations", "Brand guidelines", "Marketing materials", "Social media templates", "Unlimited revisions"]
        },
        premium: {
          price: "$1,599",
          features: ["Full brand strategy", "Complete visual identity", "Marketing collateral", "Digital assets", "Brand guidelines book", "Ongoing design support"]
        }
      }
    },
    {
      id: "chatbot",
      name: "WhatsApp Chatbot",
      plans: {
        basic: {
          price: "$199/mo",
          features: ["Basic auto-replies", "FAQ responses", "Business hours setup", "Contact collection", "Monthly analytics"]
        },
        common: {
          price: "$499/mo",
          features: ["Advanced workflows", "Lead qualification", "CRM integration", "Multi-language support", "Custom responses", "Weekly reports"]
        },
        premium: {
          price: "$999/mo",
          features: ["AI-powered responses", "Complex workflows", "E-commerce integration", "Advanced analytics", "Priority support", "Custom development"]
        }
      }
    }
  ];

  const handlePlanSelect = (serviceId: string, planType: string) => {
    setSelectedPlan(`${serviceId}-${planType}`);
    // Here you can add logic to handle plan selection
    console.log(`Selected: ${serviceId} - ${planType}`);
  };

  const filteredServices = selectedService === "all" ? services : services.filter(s => s.id === selectedService);

  return (
    <div className="flex min-h-screen flex-col">
      <Section id="pricing">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <div className="relative">
              <div className="absolute -top-4 left-1/2 h-px w-24 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent transform -translate-x-1/2" />
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-br from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  Choose Your Plan
                </span>
              </h1>
              <div className="absolute -bottom-4 left-1/2 h-px w-24 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent transform -translate-x-1/2" />
            </div>
            <p className="mt-6 text-lg text-slate-300/90 font-light">
              Select the perfect package for your project needs
            </p>
          </div>

          {/* Service Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedService("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedService === "all"
                  ? "bg-gradient-to-r from-amber-400 to-yellow-300 text-black"
                  : "bg-white/10 text-slate-300 hover:bg-white/20"
              }`}
            >
              All Services
            </button>
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedService === service.id
                    ? "bg-gradient-to-r from-amber-400 to-yellow-300 text-black"
                    : "bg-white/10 text-slate-300 hover:bg-white/20"
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Pricing Cards */}
          <div className="space-y-16">
            {filteredServices.map((service) => (
              <div key={service.id} className="space-y-8">
                <h2 className="text-2xl font-bold text-center text-white">{service.name}</h2>
                <div className="grid gap-8 md:grid-cols-3">
                  {Object.entries(service.plans).map(([planType, plan]) => (
                    <div
                      key={`${service.id}-${planType}`}
                      className={`relative overflow-hidden rounded-3xl border p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                        planType === "common"
                          ? "border-amber-300/50 bg-gradient-to-br from-amber-400/10 via-white/10 to-transparent shadow-2xl shadow-amber-500/20"
                          : "border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:border-amber-300/30 hover:shadow-2xl hover:shadow-amber-500/10"
                      }`}
                    >
                      {planType === "common" && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className="bg-gradient-to-r from-amber-400 to-yellow-300 text-black px-4 py-1 rounded-full text-xs font-bold">
                            MOST POPULAR
                          </div>
                        </div>
                      )}
                      
                      <div className="text-center mb-8">
                        <h3 className="text-xl font-bold text-white capitalize mb-2">{planType}</h3>
                        <div className="text-3xl font-bold text-amber-300 mb-4">{plan.price}</div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3 text-slate-300">
                            <svg className="h-5 w-5 text-amber-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button
                        onClick={() => handlePlanSelect(service.id, planType)}
                        className={`w-full transition-all duration-300 ${
                          selectedPlan === `${service.id}-${planType}`
                            ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                            : planType === "common"
                            ? "bg-gradient-to-r from-amber-400 to-yellow-300 text-black hover:from-amber-300 hover:to-yellow-200"
                            : "bg-gradient-to-r from-white/10 to-white/5 text-white hover:from-white/20 hover:to-white/10 border border-white/20"
                        }`}
                      >
                        {selectedPlan === `${service.id}-${planType}` ? "Selected ✓" : "Select Plan"}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {selectedPlan && (
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-6 py-3 text-green-300 border border-green-500/30">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Plan selected! Ready to get started?
              </div>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-300 px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:from-amber-300 hover:to-yellow-200 hover:scale-105"
                >
                  Contact Us to Proceed
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
