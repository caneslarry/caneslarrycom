'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Asterisk, MapPin } from 'lucide-react';
import { CSSProperties, MouseEvent } from 'react';

const principles = ['I design systems.', 'I lead teams.', 'I ship products.'];
const capabilities = [
  { index: '01', label: '20+ years engineering' },
  { index: '02', label: 'Hands-on technical lead' },
  { index: '03', label: 'Enterprise + applied AI' },
];

type NeuralNode = {
  id: string;
  x: number;
  y: number;
  driftX: number;
  driftY: number;
  duration: number;
  delay: number;
};

const makeNodes = (
  prefix: string,
  x: number,
  positions: number[],
  direction = 1
): NeuralNode[] =>
  positions.map((y, index) => ({
    id: `${prefix}-${index}`,
    x,
    y,
    driftX: (7 + (index % 3) * 3) * (index % 2 ? -direction : direction),
    driftY: (9 + (index % 2) * 5) * (index % 3 === 0 ? -1 : 1),
    duration: 6.5 + (index % 3) * 1.4,
    delay: -(index * 1.15),
  }));

const motionValues = (base: number, drift: number) =>
  `${base};${base + drift};${base - drift * 0.55};${base}`;

function AttributeMotion({
  node,
  xName,
  yName,
}: {
  node: NeuralNode;
  xName: string;
  yName: string;
}) {
  const timing = {
    dur: `${node.duration}s`,
    begin: `${node.delay}s`,
    repeatCount: 'indefinite',
    calcMode: 'spline',
    keySplines: '.45 0 .55 1;.45 0 .55 1;.45 0 .55 1',
  };
  return (
    <>
      <animate
        attributeName={xName}
        values={motionValues(node.x, node.driftX)}
        {...timing}
      />
      <animate
        attributeName={yName}
        values={motionValues(node.y, node.driftY)}
        {...timing}
      />
    </>
  );
}

function Connections({
  from,
  to,
  stage,
}: {
  from: NeuralNode[];
  to: NeuralNode[];
  stage: number;
}) {
  return (
    <>
      {from.flatMap((start, startIndex) =>
        to.map((end, endIndex) => (
          <line
            key={`${start.id}-${end.id}`}
            className={
              (startIndex * 3 + endIndex + stage) % 4 === 0
                ? 'neural-connection-firing'
                : ''
            }
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
            style={
              {
                '--fire-delay': `${stage * 0.85 + endIndex * 0.12}s`,
              } as CSSProperties
            }
          >
            <AttributeMotion node={start} xName="x1" yName="y1" />
            <AttributeMotion node={end} xName="x2" yName="y2" />
          </line>
        ))
      )}
    </>
  );
}

function NeuralLayer({
  nodes,
  className,
  large = [],
  stage,
}: {
  nodes: NeuralNode[];
  className: string;
  large?: number[];
  stage: number;
}) {
  return (
    <g className={`neural-nodes ${className}`}>
      {nodes.map((node, index) => (
        <circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r={
            large.includes(index)
              ? className === 'neural-hidden'
                ? 10
                : 7
              : className === 'neural-output'
                ? 6
                : 5
          }
          style={
            {
              '--node-delay': `${stage * 0.85 + index * 0.12 + 0.3}s`,
            } as CSSProperties
          }
        >
          <AttributeMotion node={node} xName="cx" yName="cy" />
        </circle>
      ))}
    </g>
  );
}

function SystemsCanvas() {
  const inputNodes = makeNodes('input', 116, [180, 260, 340, 420]);
  const attentionNodes = makeNodes(
    'attention',
    230,
    [145, 215, 285, 355, 425, 495],
    -1
  );
  const hiddenNodes = makeNodes('hidden', 370, [175, 245, 320, 395, 465]);
  const outputNodes = makeNodes('output', 512, [235, 320, 405], -1);

  return (
    <div className="systems-canvas" aria-hidden="true">
      <svg viewBox="0 0 640 640" className="h-full w-full" fill="none">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient
            id="neural-signal"
            x1="95"
            y1="320"
            x2="560"
            y2="320"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#22d3ee" stopOpacity=".15" />
            <stop offset=".48" stopColor="#67e8f9" stopOpacity=".8" />
            <stop offset="1" stopColor="#818cf8" stopOpacity=".25" />
          </linearGradient>
        </defs>
        <circle cx="320" cy="320" r="272" className="neural-boundary" />
        <circle
          cx="320"
          cy="320"
          r="232"
          className="neural-boundary neural-boundary-inner"
        />

        <g className="neural-connections">
          <Connections from={inputNodes} to={attentionNodes} stage={0} />
          <Connections from={attentionNodes} to={hiddenNodes} stage={1} />
          <Connections from={hiddenNodes} to={outputNodes} stage={2} />
        </g>

        <NeuralLayer
          nodes={inputNodes}
          className="neural-input"
          large={[2]}
          stage={0}
        />
        <NeuralLayer
          nodes={attentionNodes}
          className="neural-attention"
          large={[2, 3]}
          stage={1}
        />
        <NeuralLayer
          nodes={hiddenNodes}
          className="neural-hidden"
          large={[2]}
          stage={2}
        />
        <NeuralLayer nodes={outputNodes} className="neural-output" stage={3} />

        <rect
          x="322"
          y="281"
          width="96"
          height="78"
          rx="20"
          className="transformer-activation"
        />
        <rect
          x="330"
          y="289"
          width="80"
          height="62"
          rx="14"
          className="transformer-core"
        />
        <text x="370" y="316" textAnchor="middle" className="core-label">
          GPT
        </text>
        <text x="370" y="334" textAnchor="middle" className="core-caption">
          TRANSFORMER
        </text>

        <g className="layer-labels">
          <text x="116" y="130" textAnchor="middle">
            TOKENS
          </text>
          <text x="230" y="112" textAnchor="middle">
            ATTENTION
          </text>
          <text x="370" y="132" textAnchor="middle">
            REASONING
          </text>
          <text x="512" y="190" textAnchor="middle">
            OUTPUT
          </text>
        </g>
      </svg>
      <span className="canvas-token canvas-token-one">complexity</span>
      <span className="canvas-token canvas-token-two">context</span>
      <span className="canvas-response">
        <i /> clarity generated
      </span>
      <span className="canvas-label canvas-label-one">NEURAL SYSTEM / 5.6</span>
      <span className="canvas-label canvas-label-two">INFERENCE ACTIVE</span>
      <span className="canvas-status">
        <i /> PROCESSING SIGNAL
      </span>
    </div>
  );
}

const child = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const canvasX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const canvasY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);
  const trackPointer = (event: MouseEvent<globalThis.HTMLElement>) => {
    const rect = (
      event.currentTarget as globalThis.HTMLElement
    ).getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="top"
      onMouseMove={trackPointer}
      className="hero-grid relative min-h-screen overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pt-32"
    >
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="relative mx-auto flex min-h-[calc(100vh-9rem)] max-w-[90rem] flex-col justify-between">
        <div className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:py-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
            className="relative z-10"
          >
            <motion.div
              variants={child}
              className="mb-8 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-slate-400"
            >
              <span className="flex items-center gap-2 text-emerald-300">
                <span className="status-dot" /> Available for the right problem
              </span>
              <span className="h-px w-8 bg-white/15" />
              <span className="hidden sm:inline">Palm Beach, FL</span>
            </motion.div>
            <motion.p
              variants={child}
              className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300"
            >
              <Asterisk size={14} /> Senior engineer · Technical lead
            </motion.p>
            <h1 className="font-display max-w-5xl text-[clamp(3.4rem,7.3vw,7.8rem)] font-extrabold leading-[0.88] tracking-[-0.065em] text-white">
              <motion.span variants={child} className="block">
                Complexity in.
              </motion.span>
              <motion.span variants={child} className="text-outline block">
                Clarity out.
              </motion.span>
            </h1>
            <motion.p
              variants={child}
              className="mt-8 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
            >
              I&apos;m Larry Hussey, a senior software engineer and hands-on
              technical leader with 20+ years of experience turning difficult
              product, architecture, and team problems into dependable
              enterprise software.
            </motion.p>
            <motion.div
              variants={child}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a href="#work" className="button-primary group">
                See the work{' '}
                <ArrowDownRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
              <a
                href="mailto:me@caneslarry.com"
                className="button-secondary group"
              >
                Start a conversation{' '}
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            style={{ x: canvasX, y: canvasY }}
            className="relative mx-auto aspect-square w-full max-w-[35rem] lg:max-w-none"
          >
            <SystemsCanvas />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="grid border-y border-white/[0.09] sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_auto]"
        >
          <div className="flex items-center gap-3 border-b border-white/[0.09] py-4 pr-6 sm:col-span-2 lg:col-span-1 lg:border-b-0 lg:border-r">
            <MapPin size={15} className="text-cyan-400" />
            <span className="text-xs font-medium text-slate-400">
              Building from South Florida
            </span>
          </div>
          {capabilities.map((item) => (
            <div
              key={item.index}
              className="flex items-center gap-3 border-b border-white/[0.09] py-4 sm:odd:border-r lg:border-b-0 lg:border-r lg:px-6"
            >
              <span className="font-mono text-[0.62rem] text-cyan-400">
                {item.index}
              </span>
              <span className="text-xs font-semibold text-slate-300">
                {item.label}
              </span>
            </div>
          ))}
          <a
            href="#work"
            aria-label="Scroll to selected work"
            className="hidden items-center justify-center px-5 text-slate-500 transition hover:text-cyan-300 lg:flex"
          >
            <ArrowDownRight size={19} />
          </a>
        </motion.div>
        <div className="pointer-events-none absolute bottom-28 left-0 hidden -translate-x-full -rotate-90 items-center gap-3 text-[0.6rem] font-bold uppercase tracking-[0.24em] text-slate-600 xl:flex">
          <span>Scroll to explore</span>
          <span className="block h-px w-10 bg-slate-700" />
        </div>
      </div>
      <div className="principle-marquee" aria-label="Working principles">
        <div className="principle-track">
          {[...principles, ...principles].map((principle, index) => (
            <span key={`${principle}-${index}`}>
              {principle}
              <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
