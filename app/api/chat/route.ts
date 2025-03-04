import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();
  const OPENAI_API_KEY =
    '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';

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: message },
      ],
    }),
  });

  const data = await response.json();
  return NextResponse.json(data);
}
