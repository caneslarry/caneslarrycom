'use client';

import { motion } from 'framer-motion';
import {
  Bot,
  BrainCircuit,
  Database,
  Network,
  ShieldCheck,
  TerminalSquare,
} from 'lucide-react';

const practices = [
  {
    number: '01',
    title: 'Agentic engineering',
    icon: Bot,
    description:
      'Designing coding and product workflows where agents can plan, use tools, modify systems, test their work, and iterate within deliberate guardrails.',
    capabilities: [
      'OpenAI Codex',
      'Claude Code',
      'GitHub Copilot Agent Mode',
      'Agentic AI programming',
      'Multi-agent orchestration',
    ],
  },
  {
    number: '02',
    title: 'Models into products',
    icon: BrainCircuit,
    description:
      'Turning frontier models into useful product capabilities through structured outputs, tool calling, multimodal inputs, and thoughtful human review.',
    capabilities: [
      'OpenAI GPT',
      'Anthropic Claude',
      'Google Gemini',
      'Open-source models',
    ],
  },
  {
    number: '03',
    title: 'Connected AI systems',
    icon: Network,
    description:
      'Building MCP servers and secure tool layers that connect models to business data, internal APIs, development workflows, and real-world actions.',
    capabilities: [
      'MCP servers and clients',
      'Function calling',
      'Claude Code commands',
      'Agent tools and skills',
    ],
  },
  {
    number: '04',
    title: 'Production intelligence',
    icon: ShieldCheck,
    description:
      'Applying the engineering discipline AI systems still require: evaluation, observability, retrieval quality, security boundaries, cost control, and fallbacks.',
    capabilities: [
      'Evals and guardrails',
      'RAG and vector search',
      'Prompt and context engineering',
      'Observability',
    ],
  },
];

const ecosystem = [
  'OpenAI',
  'GPT',
  'Codex',
  'Anthropic Claude',
  'Claude Code',
  'Google Gemini',
  'GitHub Copilot',
  'MCP',
  'LangChain',
  'LangGraph',
  'LlamaIndex',
  'Hugging Face',
  'pgvector',
  'Pinecone',
];

export default function AIFrontier() {
  return (
    <section
      id="ai-frontier"
      className="ai-frontier relative scroll-mt-20 overflow-hidden border-y border-white/[0.07]"
    >
      <div className="ai-frontier-grid" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:gap-20">
          <div>
            <p className="eyebrow">Leading at the AI frontier</p>
            <h2 className="section-title">
              Seasoned judgment.{' '}
              <span className="text-outline-soft">Frontier tools.</span>
            </h2>
          </div>
          <div>
            <p className="section-intro">
              Twenty-plus years of software engineering taught me what makes
              systems last. I bring that experience to the newest generation of
              AI—helping teams adopt agentic development, build connected AI
              products, and move beyond demos into dependable delivery.
            </p>
            <div className="mt-6 flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-cyan-300">
              <span className="status-dot" /> Current, hands-on, and leading
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.09] md:grid-cols-2">
          {practices.map(
            (
              { number, title, icon: Icon, description, capabilities },
              index
            ) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-12%' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="ai-practice group"
              >
                <div className="flex items-start justify-between">
                  <span className="ai-practice-icon">
                    <Icon size={20} />
                  </span>
                  <span className="font-mono text-[0.6rem] text-slate-600">
                    {number} / 04
                  </span>
                </div>
                <h3 className="font-display mt-7 text-2xl font-bold text-white">
                  {title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                  {description}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {capabilities.map((capability) => (
                    <span key={capability} className="ai-capability">
                      {capability}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          )}
        </div>

        <div className="ai-terminal mt-10">
          <div className="ai-terminal-bar">
            <span />
            <span />
            <span />
            <p>frontier-stack.config</p>
          </div>
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div className="flex items-start gap-4">
              <TerminalSquare
                className="mt-1 shrink-0 text-cyan-300"
                size={20}
              />
              <div>
                <p className="font-mono text-xs text-cyan-200">
                  $ lead --with-ai --responsibly
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  I help engineering teams use AI as leverage for better
                  thinking, faster feedback, and stronger software—not as a
                  substitute for architecture or accountability.
                </p>
              </div>
            </div>
            <div className="hidden h-16 w-px bg-white/10 lg:block" />
            <div className="flex items-start gap-4">
              <Database className="mt-1 shrink-0 text-indigo-300" size={20} />
              <div>
                <p className="font-mono text-xs text-indigo-200">
                  production_ready: true
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Security, evaluation, data boundaries, observability, and
                  human approval remain part of the design from the first
                  prototype.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ai-ecosystem" aria-label="AI technology ecosystem">
        <div className="ai-ecosystem-track">
          {[...ecosystem, ...ecosystem].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <i>◆</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
