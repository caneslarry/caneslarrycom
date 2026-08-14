'use client';

import { Dialog, Transition } from '@headlessui/react';
import { ArrowUp, Command, MessageCircle, Sparkles, X } from 'lucide-react';
import { Fragment, useEffect, useRef, useState } from 'react';

type Message = { role: 'user' | 'assistant'; content: string };
const suggestions = [
  'What kind of teams has Larry led?',
  'Tell me about Larry’s AI work',
  'What problems is Larry best at solving?',
];

export default function ChatbotModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<globalThis.HTMLDivElement>(null);

  useEffect(() => {
    const shortcut = (event: globalThis.KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', shortcut);
    return () => window.removeEventListener('keydown', shortcut);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, loading]);

  const sendMessage = async (value = input) => {
    const message = value.trim();
    if (!message || loading) return;
    const newMessages: Message[] = [
      ...messages,
      { role: 'user', content: message },
    ];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error || 'Unable to answer right now.');
      setMessages([
        ...newMessages,
        { role: 'assistant', content: data.answer },
      ]);
    } catch (error) {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content:
            error instanceof Error
              ? error.message
              : 'Unable to answer right now.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Ask LarryAI about Larry"
        className="ai-launcher"
      >
        <span className="ai-launcher-icon">
          <MessageCircle size={18} />
        </span>
        <span className="hidden sm:block">Ask about Larry</span>
        <kbd className="hidden lg:inline-flex">
          <Command size={10} />K
        </kbd>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[80]"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#020407]/75 backdrop-blur-md" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto p-4 sm:p-8">
            <div className="flex min-h-full items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95 translate-y-4"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="ease-in duration-180"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="ai-dialog">
                  <header className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <Sparkles size={17} />
                      </span>
                      <div>
                        <Dialog.Title className="font-display text-sm font-bold text-white">
                          Ask about Larry
                        </Dialog.Title>
                        <p className="text-[0.65rem] text-slate-500">
                          AI portfolio guide · Answers from site context
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="icon-button"
                      aria-label="Close"
                    >
                      <X size={17} />
                    </button>
                  </header>
                  <div
                    ref={scrollRef}
                    className="h-[min(52vh,28rem)] overflow-y-auto px-5 py-6"
                    aria-live="polite"
                  >
                    {messages.length === 0 ? (
                      <div>
                        <p className="max-w-sm font-display text-2xl font-bold leading-tight text-white">
                          Curious about the work, the stack, or the person?
                        </p>
                        <p className="mt-3 text-sm leading-6 text-slate-400">
                          Pick a question or ask your own. This guide is
                          designed to help you quickly understand where Larry
                          creates the most value.
                        </p>
                        <div className="mt-7 space-y-2">
                          {suggestions.map((suggestion) => (
                            <button
                              key={suggestion}
                              type="button"
                              onClick={() => sendMessage(suggestion)}
                              className="ai-suggestion"
                            >
                              {suggestion}
                              <ArrowUp size={14} className="rotate-45" />
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-5">
                        {messages.map((message, index) => (
                          <div
                            key={`${message.role}-${index}`}
                            className={`ai-message ${message.role === 'user' ? 'ai-message-user' : ''}`}
                          >
                            <span>
                              {message.role === 'user' ? 'You' : 'LarryAI'}
                            </span>
                            <p>{message.content}</p>
                          </div>
                        ))}
                        {loading && (
                          <div
                            className="ai-typing"
                            aria-label="LarryAI is thinking"
                          >
                            <i />
                            <i />
                            <i />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      sendMessage();
                    }}
                    className="border-t border-white/[0.08] p-4"
                  >
                    <label htmlFor="chat-message" className="sr-only">
                      Ask a question about Larry
                    </label>
                    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.035] p-2 focus-within:border-cyan-400/35">
                      <input
                        id="chat-message"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        placeholder="Ask about experience, projects, or fit…"
                        className="min-w-0 flex-1 bg-transparent px-2 text-sm text-white outline-none placeholder:text-slate-600"
                        autoComplete="off"
                      />
                      <button
                        type="submit"
                        disabled={!input.trim() || loading}
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-30"
                        aria-label="Send question"
                      >
                        <ArrowUp size={17} />
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
