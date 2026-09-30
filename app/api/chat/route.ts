import { NextResponse } from 'next/server';

const context = `Larry Hussey is a senior software engineer and technical team lead in Palm Beach, Florida, with more than 20 years of experience. He works across product strategy, system design, full-stack engineering, cloud delivery, practical AI, and technical leadership.

Recent roles include Senior Software Engineer / Team Lead at Agora Data, Senior Full Stack Developer at WDG, Senior Software Engineer / Team Lead at Model B, and Senior Software Engineer at ApparelMagic. His stack includes TypeScript, React, Next.js, Node.js, Python, PHP, GraphQL, Postgres, AWS, Google Cloud, Azure, Docker, CI/CD, Salesforce, and API integrations.

Larry's featured career work includes the John Maxwell Digital Platform, the Agora Data dealer platform, and the Model B marketing platform. LiveBTCNow and QuickMealPlan are independent side projects. Larry is strongest where a team needs someone who can connect product judgment, architecture, hands-on delivery, and team leadership.

Larry stays hands-on with frontier AI engineering across OpenAI GPT and Codex, Anthropic Claude and Claude Code, Google Gemini, GitHub Copilot agent mode, MCP servers and clients, agentic AI programming, multi-agent orchestration, function calling, structured outputs, RAG, vector search, evaluations, guardrails, and observability. He helps teams adopt these capabilities with the architecture, security boundaries, human review, and delivery discipline expected from a seasoned engineering leader.`;

export async function POST(req: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey)
    return NextResponse.json(
      {
        error:
          'The portfolio guide is not configured yet. Please email Larry directly.',
      },
      { status: 503 }
    );

  const body = await req.json().catch(() => null);
  const message =
    typeof body?.message === 'string' ? body.message.trim().slice(0, 800) : '';
  if (!message)
    return NextResponse.json(
      { error: 'Please enter a question.' },
      { status: 400 }
    );

  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-5.6-luna',
        instructions: `You are the concise, professional portfolio guide for Larry Hussey. Answer only from the supplied context. Be warm, direct, and specific. Never pretend to be Larry. If the context does not establish an answer, say so and suggest contacting Larry at me@caneslarry.com. Keep answers under 120 words.\n\nPORTFOLIO CONTEXT:\n${context}`,
        input: message,
        max_output_tokens: 300,
      }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error('OpenAI request failed');
    const answer = data.output
      ?.flatMap(
        (item: { content?: { type?: string; text?: string }[] }) =>
          item.content || []
      )
      .find((item: { type?: string }) => item.type === 'output_text')?.text;
    if (!answer) throw new Error('No answer returned');
    return NextResponse.json({ answer });
  } catch {
    return NextResponse.json(
      {
        error:
          'LarryAI is taking a breather. Please try again or email Larry directly.',
      },
      { status: 502 }
    );
  }
}
