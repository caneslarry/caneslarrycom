'use client';

import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { MessageCircle } from 'lucide-react';

export default function ChatbotModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Error communicating with chatbot');
      }

      const data = await response.json();
      setMessages([
        ...newMessages,
        { role: 'assistant', content: data.choices[0].message.content },
      ]);
    } catch (error) {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          // @ts-ignore
          content: 'Error: Unable to fetch response.' + error.message,
        },
      ]);
    }
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open LarryAI chat"
        className="fixed bottom-6 right-6 z-[60] rounded-full border border-cyan-300/30 bg-cyan-400 p-4 text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-300"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chatbot Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            aria-hidden="true"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-lg rounded-2xl border border-white/10 bg-slate-950 p-5 text-slate-200 shadow-2xl">
              <Dialog.Title className="font-display text-lg font-bold text-white">
                Chat with LarryAI
              </Dialog.Title>

              <div
                className="mt-4 h-64 overflow-y-auto border-b border-white/10 pb-2"
                aria-live="polite"
              >
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-2 my-1 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}
                  >
                    <strong>{msg.role === 'user' ? 'You' : 'LarryAI'}:</strong>{' '}
                    {msg.content}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex">
                <label htmlFor="chat-message" className="sr-only">
                  Message LarryAI
                </label>
                <input
                  id="chat-message"
                  type="text"
                  className="min-w-0 flex-1 rounded-l-lg border border-white/10 bg-slate-900 p-2.5 text-white placeholder:text-slate-500"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') sendMessage();
                  }}
                  placeholder="Type a message..."
                />
                <button
                  type="button"
                  onClick={sendMessage}
                  className="rounded-r-lg bg-cyan-400 px-4 font-bold text-slate-950 hover:bg-cyan-300"
                >
                  Send
                </button>
              </div>

              <button
                type="button"
                className="mt-4 text-sm text-slate-400 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
