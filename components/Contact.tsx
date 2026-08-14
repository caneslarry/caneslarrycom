'use client';

import { ArrowUpRight, Mail } from 'lucide-react';
import { useState } from 'react';

const starters = [
  'I need technical leadership',
  'I have a product to build',
  'I need help untangling a system',
];

export default function Contact() {
  const [selected, setSelected] = useState(starters[0]);
  const subject = encodeURIComponent(selected);
  return (
    <section id="contact" className="px-5 pb-8 pt-20 sm:px-8 sm:pt-28">
      <div className="contact-panel relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-14 sm:px-12 sm:py-20 lg:px-20">
        <div className="relative z-10 max-w-4xl">
          <p className="eyebrow">Bring me the difficult problem</p>
          <h2 className="font-display mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            What should we solve together?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Choose a starting point—or ignore the boxes and tell me what is
            keeping your team up at night.
          </p>
          <div
            className="mt-8 flex flex-wrap gap-2"
            role="group"
            aria-label="Conversation starters"
          >
            {starters.map((starter, index) => (
              <button
                key={starter}
                type="button"
                onClick={() => setSelected(starter)}
                aria-pressed={selected === starter}
                className={`contact-starter ${selected === starter ? 'contact-starter-active' : ''}`}
              >
                <span>0{index + 1}</span>
                {starter}
              </button>
            ))}
          </div>
          <a
            href={`mailto:me@caneslarry.com?subject=${subject}`}
            className="button-primary mt-9"
          >
            <Mail size={18} aria-hidden="true" />
            Start this conversation
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
