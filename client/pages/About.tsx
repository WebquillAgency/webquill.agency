import Section from "./shared/Section";

export default function About() {
  return (
    <Section>
      <div className="container py-24">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">About Webquill Agency</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          We’re a boutique team crafting premium, conversion-focused web experiences. Share your story or differentiators and I’ll enrich this section.
        </p>
      </div>
    </Section>
  );
}
