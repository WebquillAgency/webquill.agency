import { useState } from "react";
import { Button } from "@/components/ui/button";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string;
  serviceName: string;
  onPlanSelect: (planData: {serviceId: string, serviceName: string, planType: string, planTitle: string, price: string}) => void;
}

export default function PricingModal({ isOpen, onClose, serviceId, serviceName, onPlanSelect }: PricingModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const servicePlans = {
    shopify: {
      basic: {
        price: "₹12,999",
        title: "Shopify Starter",
        subtitle: "Perfect for first-time online sellers",
        features: [
          "Free Shopify theme setup",
          "Homepage customization",
          "15 products upload",
          "Razorpay payment gateway",
          "Basic shipping setup",
          "Essential pages included"
        ]
      },
      common: {
        price: "₹22,999",
        title: "Shopify Growth",
        subtitle: "Professional e-commerce presence",
        features: [
          "Everything in Starter",
          "75 products upload",
          "Premium theme setup",
          "Apps integration",
          "Collections & filters",
          "Basic SEO optimization"
        ]
      },
      premium: {
        price: "₹49,999+",
        title: "Shopify Pro",
        subtitle: "Custom features & advanced design",
        features: [
          "Custom project quote",
          "Advanced modifications",
          "Custom-coded sections",
          "API integrations",
          "Advanced functionality",
          "Priority support"
        ]
      }
    },
    wordpress: {
      basic: {
        price: "₹9,999",
        title: "Essential Website",
        subtitle: "Your essential online presence",
        features: [
          "5 pages included",
          "Premium template design",
          "Drag-drop editor",
          "Fully responsive",
          "Content upload",
          "Essential plugins",
          "Social media links",
          "Google submission"
        ]
      },
      common: {
        price: "₹15,999",
        title: "Business Growth",
        subtitle: "The business growth engine",
        features: [
          "Everything in Essential",
          "10 pages included",
          "Custom design (Elementor Pro)",
          "10 premium stock photos",
          "Live chat integration",
          "Newsletter setup",
          "Interactive map",
          "SEO optimization",
          "Simple e-commerce (10 products)",
          "30-min training"
        ]
      },
      premium: {
        price: "₹24,999",
        title: "Professional Solution",
        subtitle: "Complete professional solution",
        features: [
          "Everything in Business Growth",
          "20 pages included",
          "Full e-commerce (25 products)",
          "Payment & shipping setup",
          "Advanced features",
          "Performance optimization",
          "Advanced SEO + schema",
          "1-hour training",
          "1 month free support"
        ]
      }
    },
    custom: {
      basic: {
        price: "₹19,999",
        title: "Static Landing Page",
        subtitle: "High-performance marketing page",
        features: [
          "1-3 custom pages",
          "Fully responsive",
          "Performance optimized",
          "Contact form",
          "Hosting assistance",
          "Clean code"
        ]
      },
      common: {
        price: "₹45,000+",
        title: "Business Site with CMS",
        subtitle: "Unique, fast site with content management",
        features: [
          "Multi-page custom site",
          "Headless CMS",
          "Content management training",
          "Advanced animations",
          "API integrations",
          "SEO optimization"
        ]
      },
      premium: {
        price: "₹99,999+",
        title: "Web Application",
        subtitle: "Custom software with databases",
        features: [
          "Full-stack development",
          "User authentication",
          "Database integration",
          "Custom admin panel",
          "Scalable architecture",
          "Ongoing support"
        ]
      }
    },
    marketing: {
      basic: {
        price: "₹7,999/mo",
        title: "Starter Pack",
        subtitle: "Basic presence on one channel",
        features: [
          "Choose ONE:",
          "Social Media (1 platform)",
          "OR Basic SEO (5 pages)",
          "Monthly reports",
          "Keyword monitoring",
          "Basic analytics"
        ]
      },
      common: {
        price: "₹14,999/mo",
        title: "Growth Pack",
        subtitle: "Active lead generation & growth",
        features: [
          "Social Media (2 platforms)",
          "SEO (10 pages)",
          "Quality backlinks",
          "Ads management",
          "Lead tracking",
          "Monthly consultation"
        ]
      },
      premium: {
        price: "₹29,999+/mo",
        title: "Scale Pack",
        subtitle: "Multi-channel aggressive strategy",
        features: [
          "Multi-platform strategy",
          "SEO + SMM + Ads",
          "Multiple campaigns",
          "Advanced analytics",
          "Dedicated manager",
          "Weekly calls"
        ]
      }
    },
    graphics: {
      basic: {
        price: "₹7,999/mo",
        title: "Basic Plan",
        subtitle: "Essential social media graphics",
        features: [
          "12 designs per month",
          "Social media templates",
          "Brand consistency",
          "Standard delivery",
          "Email support",
          "Marketing integration"
        ]
      },
      common: {
        price: "₹15,999/mo",
        title: "Pro Plan",
        subtitle: "Complete marketing materials",
        features: [
          "25 assets per month",
          "Advanced graphics",
          "Brochures & flyers",
          "Marketing materials",
          "Brand guidelines",
          "Priority support"
        ]
      },
      premium: {
        price: "Custom Quote",
        title: "Enterprise Plan",
        subtitle: "Full brand & marketing suite",
        features: [
          "Unlimited requests",
          "Brand strategy",
          "Marketing materials",
          "Video & animations",
          "Dedicated designer",
          "24/7 support"
        ]
      }
    },
    chatbot: {
      basic: {
        price: "₹9,999",
        title: "Basic Setup",
        subtitle: "Automate frequently asked questions",
        features: [
          "One-time setup",
          "Platform setup",
          "FAQ flow (15 questions)",
          "Welcome message",
          "Agent handover",
          "Basic training"
        ]
      },
      common: {
        price: "₹19,999",
        title: "Advanced Setup",
        subtitle: "Lead generation & capture",
        features: [
          "Everything in Basic",
          "Lead capture",
          "Contact collection",
          "Google Sheets sync",
          "Lead tracking",
          "Advanced flows"
        ]
      },
      premium: {
        price: "₹40,000+",
        title: "Custom Integration",
        subtitle: "Deep system integration",
        features: [
          "Custom requirements",
          "E-commerce integration",
          "CRM connection",
          "Database integration",
          "Advanced automation",
          "Ongoing support"
        ]
      }
    }
  };

  const plans = servicePlans[serviceId as keyof typeof servicePlans];

  const handlePlanSelect = (planType: string) => {
    setSelectedPlan(planType);
  };

  const handleContactUs = () => {
    if (selectedPlan && plans) {
      const planData = plans[selectedPlan as keyof typeof plans];
      onPlanSelect({
        serviceId,
        serviceName,
        planType: selectedPlan,
        planTitle: planData.title,
        price: planData.price
      });
    }
  };

  if (!isOpen || !plans) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`relative w-full max-w-7xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/95 via-slate-900/95 to-slate-950/95 backdrop-blur-xl shadow-2xl transform transition-all duration-500 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-10 rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-4 sm:p-6 md:p-8">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="relative">
              <div className="absolute -top-4 left-1/2 h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent transform -translate-x-1/2" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                <span className="bg-gradient-to-br from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  {serviceName} Pricing
                </span>
              </h2>
              <div className="absolute -bottom-4 left-1/2 h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent transform -translate-x-1/2" />
            </div>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300/90 font-light px-4 max-w-2xl mx-auto">
              Choose the perfect plan for your project. All plans include professional support and quality assurance.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-3 mb-8 sm:mb-12 items-stretch">
            {Object.entries(plans).map(([planType, plan]) => (
              <div
                key={planType}
                className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:scale-105 flex flex-col ${
                  planType === "common"
                    ? "border-amber-300/50 bg-gradient-to-br from-amber-400/10 via-white/10 to-transparent shadow-2xl shadow-amber-500/20 p-6 sm:p-8 lg:scale-110 z-10"
                    : "border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:border-amber-300/30 hover:shadow-2xl hover:shadow-amber-500/10 p-6 sm:p-8"
                }`}
              >
                
                <div className="text-center mb-6">
                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${
                    planType === "common" ? "text-amber-100" : "text-white"
                  }`}>{plan.title}</h3>
                  <p className={`text-sm sm:text-base mb-4 ${
                    planType === "common" ? "text-amber-200/80" : "text-slate-400"
                  }`}>{plan.subtitle}</p>
                  <div className={`text-3xl sm:text-4xl font-bold mb-6 ${
                    planType === "common" ? "text-amber-300" : "text-amber-300"
                  }`}>{plan.price}</div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className={`flex items-start gap-3 text-sm sm:text-base ${
                      planType === "common" ? "text-slate-200" : "text-slate-300"
                    }`}>
                      <svg className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                        planType === "common" ? "text-amber-300" : "text-amber-400"
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button
                    onClick={() => handlePlanSelect(planType)}
                    className={`w-full transition-all duration-300 text-base py-3 font-semibold ${
                      selectedPlan === planType
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg"
                        : planType === "common"
                        ? "bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-900 hover:from-amber-300 hover:to-yellow-200 hover:text-slate-800 shadow-lg shadow-amber-500/25"
                        : "bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:from-slate-600 hover:to-slate-500 border border-slate-500/50 hover:border-slate-400/70"
                    }`}
                  >
                    {selectedPlan === planType ? "Selected ✓" : "Select Plan"}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {selectedPlan && (
            <div className="text-center px-4 mt-8">
              <Button
                onClick={handleContactUs}
                className="bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-900 hover:from-amber-300 hover:to-yellow-200 hover:text-slate-800 px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 w-full sm:w-auto shadow-lg shadow-amber-500/30"
              >
                Contact Us to Proceed
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
