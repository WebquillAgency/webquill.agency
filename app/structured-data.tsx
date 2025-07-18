import React from 'react';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Webquill",
    "url": "https://webquill.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://webquill.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "description": "Webquill is a powerful platform for creating, managing, and publishing web content with ease.",
    "publisher": {
      "@type": "Organization",
      "name": "Webquill",
      "logo": {
        "@type": "ImageObject",
        "url": "https://webquill.com/wq.png"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}