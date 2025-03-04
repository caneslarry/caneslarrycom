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
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition  z-[60]"
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
            <Dialog.Panel className="w-full max-w-lg bg-white rounded-lg shadow-lg p-4">
              <Dialog.Title className="text-lg font-bold">
                Chat with LarryAI
              </Dialog.Title>

              <div className="h-64 overflow-y-auto border-b pb-2">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-2 my-1 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}
                  >
                    <strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong>{' '}
                    {msg.content}
                  </div>
                ))}
              </div>

              <div className="flex mt-4">
                <input
                  type="text"
                  className="flex-1 border p-2 rounded-l-lg"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                />
                <button
                  onClick={sendMessage}
                  className="bg-blue-500 text-white p-2 rounded-r-lg"
                >
                  Send
                </button>
              </div>

              <button
                className="mt-4 text-gray-500 hover:text-gray-700"
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
