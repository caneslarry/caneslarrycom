const impact = [
  {
    value: '20+',
    label: 'Years building software',
    detail: 'From enterprise foundations to modern AI-assisted products.',
  },
  {
    value: '20K+',
    label: 'Client sites supported',
    detail: 'A replicated web and CMS platform built for global scale.',
  },
  {
    value: '90K → 800K+',
    label: 'Audience growth enabled',
    detail: 'Marketing attribution and Salesforce-connected customer journeys.',
  },
  {
    value: '6',
    label: 'Person product team led',
    detail: 'Design and engineering aligned around a shared delivery system.',
  },
];

export default function Impact() {
  return (
    <section
      aria-labelledby="impact-heading"
      className="border-b border-white/[0.07] bg-white/[0.015]"
    >
      <div className="section-shell py-16 sm:py-20">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Career impact</p>
            <h2 id="impact-heading" className="section-title">
              Experience you can measure.
            </h2>
          </div>
          <p className="section-intro">
            Two decades of hands-on delivery across enterprise platforms,
            product teams, cloud systems, marketing technology, and applied AI.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.09] sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((item) => (
            <article key={item.label} className="bg-[#05080d] p-7 sm:p-8">
              <strong className="font-display block text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {item.value}
              </strong>
              <h3 className="mt-3 text-sm font-bold text-cyan-300">
                {item.label}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
