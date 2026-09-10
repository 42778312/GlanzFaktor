export default function LegalPage({ title, note, children }) {
  return (
    <section className="mx-auto max-w-[760px] px-5 pb-24 pt-36 lg:pt-44">
      <h1 className="mb-5 font-display text-4xl font-semibold text-navy-800">{title}</h1>
      {note && (
        <p className="mb-10 rounded-xl border border-border bg-muted px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          {note}
        </p>
      )}
      <div className="flex flex-col gap-5 text-[15px] leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-teal-dark [&_h2]:mt-3 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-navy-800">
        {children}
      </div>
    </section>
  );
}
