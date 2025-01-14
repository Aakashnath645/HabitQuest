import { NextResponse } from 'next/server'
import { generateText } from 'ai'
import { openai } from '@ai-sdk/openai'

export async function POST(req: Request) {
  try {
    const { goal } = await req.json()
    
    const { text } = await generateText({
      model: openai('gpt-3.5-turbo'),
      prompt: `Suggest a specific, actionable daily habit for someone with the goal of ${goal}. 
      The habit should be easy to start and maintain. Format the habit as a clear, concise action statement.
      Example: "Do 10 minutes of stretching every morning" or "Write down three grateful thoughts before bed"
      Respond with only the habit suggestion, nothing else.`,
    })

    return NextResponse.json({ habit: text.trim() })
  } catch (error) {
    console.error('Error in habit suggestion:', error)
    return NextResponse.json(
      { error: 'Failed to generate habit suggestion' }, 
      { status: 500 }
    )
  }
}

