import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { message } = req.body;
  //const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
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
  res.status(200).json(data);
}
