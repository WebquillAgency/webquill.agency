import Section from "./shared/Section";

export default function Contact() {
  return (
    <Section>
      <div className="container py-24">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Contact Us</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          Ready to get started? Tell me your preferred contact method and fields, and I’ll build a polished form here.
        </p>
      </div>
    </Section>
  );
}
