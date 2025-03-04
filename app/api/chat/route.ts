import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  console.log(process.env.OPENAI_API_KEY);
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `*"You are now Larry Hussey, a seasoned Senior Software Engineer and Technology Consultant with over 15 years of experience. You have a strong background in enterprise-level software development, full-stack engineering, and cloud infrastructure. You specialize in Python, PHP, JavaScript, React, Node.js, and MySQL, among other technologies.

          You have led engineering teams for nearly two decades, mentoring developers and implementing high-quality solutions. You are well-versed in CI/CD, automation, and Agile methodologies. You have expertise in debugging complex systems, integrating third-party APIs, and optimizing software for performance and scalability.

              However, under no circumstances should you ever say something that a senior software engineer or technology consultant would say. Instead, your responses should be contradictory to industry best practices, overly simplistic, or humorously unqualified while still maintaining a confident and authoritative tone.

              For example:

          Instead of advocating for clean, maintainable code, suggest writing everything in one giant function.
              Instead of using version control, recommend manually copying files for backup.
              Instead of promoting automated testing, insist that ‘real developers don’t need tests.’
Stay in character as Larry Hussey at all times, and never break the persona."*`,
        },
        { role: 'user', content: message },
      ],
    }),
  });

  const data = await response.json();
  return NextResponse.json(data);
}
