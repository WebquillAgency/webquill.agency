import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export default function SEOHead({
  title = "Webquill Agency - Premium Website Development & Digital Marketing",
  description = "Transform your business with premium Shopify, WordPress & custom websites. Expert digital marketing, graphic design & WhatsApp chatbots. 50+ happy clients. Get started today!",
  keywords = "website development, shopify development, wordpress development, digital marketing, graphic design, whatsapp chatbot, web design agency, ecommerce development, SEO optimization, custom websites",
  canonicalUrl = "https://webquill.agency",
  ogImage = "https://webquill.agency/og-image.jpg"
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic SEO meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('author', 'Webquill Agency');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:site_name', 'Webquill Agency', true);
    updateMetaTag('og:locale', 'en_US', true);
    
    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:site', '@webquill_agency');
    
    // Additional SEO tags
    updateMetaTag('theme-color', '#f59e0b');
    updateMetaTag('msapplication-TileColor', '#f59e0b');
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
    
    // JSON-LD Schema Markup
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${canonicalUrl}/#website`,
          "url": canonicalUrl,
          "name": "Webquill Agency",
          "description": description,
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${canonicalUrl}/?s={search_term_string}`
              },
              "query-input": "required name=search_term_string"
            }
          ],
          "inLanguage": "en-US"
        },
        {
          "@type": "Organization",
          "@id": `${canonicalUrl}/#organization`,
          "name": "Webquill Agency",
          "url": canonicalUrl,
          "logo": {
            "@type": "ImageObject",
            "inLanguage": "en-US",
            "@id": `${canonicalUrl}/#/schema/logo/image/`,
            "url": "https://cdn.builder.io/api/v1/image/assets%2F9eca9cb915f54ee99d3e8f0e5548b9ba%2F2c19276b34c8493995e0880e21c54c28?format=webp&width=360",
            "contentUrl": "https://cdn.builder.io/api/v1/image/assets%2F9eca9cb915f54ee99d3e8f0e5548b9ba%2F2c19276b34c8493995e0880e21c54c28?format=webp&width=360",
            "width": 360,
            "height": 120,
            "caption": "Webquill Agency"
          },
          "image": {
            "@id": `${canonicalUrl}/#/schema/logo/image/`
          },
          "sameAs": [
            "https://www.instagram.com/webquill.agency",
            "https://wa.me/9711638511"
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+971-16-385-11",
              "contactType": "customer service",
              "availableLanguage": ["en", "hi"]
            }
          ]
        },
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}/#webpage`,
          "url": canonicalUrl,
          "name": title,
          "isPartOf": {
            "@id": `${canonicalUrl}/#website`
          },
          "about": {
            "@id": `${canonicalUrl}/#organization`
          },
          "description": description,
          "breadcrumb": {
            "@id": `${canonicalUrl}/#breadcrumb`
          },
          "inLanguage": "en-US",
          "potentialAction": [
            {
              "@type": "ReadAction",
              "target": [canonicalUrl]
            }
          ]
        },
        {
          "@type": "LocalBusiness",
          "@id": `${canonicalUrl}/#localbusiness`,
          "name": "Webquill Agency",
          "image": ogImage,
          "telephone": "+971-16-385-11",
          "email": "webquill.agency@gmail.com",
          "url": canonicalUrl,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "AE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.2048,
            "longitude": 55.2708
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday", 
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          },
          "priceRange": "$$",
          "servedCuisine": "Web Development Services"
        },
        {
          "@type": "Service",
          "@id": `${canonicalUrl}/#service`,
          "serviceType": "Website Development & Digital Marketing",
          "provider": {
            "@id": `${canonicalUrl}/#organization`
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Development Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Shopify Website Development",
                  "description": "Custom Shopify themes, headless storefronts, performance optimization, and app integrations"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "WordPress Website Development",
                  "description": "Block-based builds, custom themes/plugins, enterprise-grade security, and SEO"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Custom Website Development",
                  "description": "Next-level experiences with animations, headless CMS, and bespoke UI built to spec"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Digital Marketing",
                  "description": "SEO optimization, social media campaigns, PPC advertising, and conversion tracking"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Graphic Design",
                  "description": "Brand identity, logos, marketing materials, and visual storytelling"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "WhatsApp Chatbot Development",
                  "description": "Automated customer support, lead generation, and 24/7 business communication"
                }
              }
            ]
          }
        }
      ]
    };

    // Remove existing schema script
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new schema script
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(schemaData);
    document.head.appendChild(schemaScript);

  }, [title, description, keywords, canonicalUrl, ogImage]);

  return null;
}
