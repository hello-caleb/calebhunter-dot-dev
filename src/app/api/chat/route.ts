import { NextRequest, NextResponse } from 'next/server'

// TODO: implement full chat endpoint with:
// - Anthropic SDK integration (import Anthropic from '@anthropic-ai/sdk')
// - Rate limiting (20 msgs/session)
// - Input sanitization
// - System prompt from PROJECT_VISION.md

export async function POST(_request: NextRequest) {
  return NextResponse.json({ message: 'Chat API stub — TODO: implement' }, { status: 200 })
}
