import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey || '');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { query, timeframe, targetGroup } = body;

    if (!query) {
      return NextResponse.json(
        { error: 'Suchanfrage ist erforderlich' },
        { status: 400 }
      );
    }

    const systemInstruction = `
Du bist das KI-Such- und Didaktik-Gehirn der Plattform "train4free".
Deine Aufgabe ist es, für die Suchanfrage des Nutzers die besten, 100% kostenlosen Online-Trainings aus dem Web zu finden.

STRIKTE QUALITÄTSFILTER:
1. 100% Kostenlos (keine Paywalls, keine Abofallen, kein Zwang zu Kreditkarten).
2. Bevorzuge weltweite Top-Quellen (MIT OpenCourseWare, Harvard, Stanford, Coursera Audit-Modus, YouTube High-End Tutorial-Reihen).
3. Bevorzuge Inhalte ohne aufwendige Registrierungs-Hürden.

ANTWORT-FORMAT (NUR VALIDES JSON):
{
  "mode_used": "LIVE_SEARCH",
  "primary_recommendation": {
    "title": "Titel des Kurses",
    "provider": "Anbieter / Plattform",
    "duration": "Geschätzte Dauer",
    "language": "DE / EN",
    "quality_score": "98% - High Prestige",
    "why_it_fits": "Kurze Begründung",
    "url": "https://beispiel-link.com"
  }
}
`;

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: systemInstruction,
    });

    const userPrompt = `Suchanfrage: "${query}"`;
    const result = await model.generateContent(userPrompt);
    const text = result.response.text();
    
    // Clean potential markdown blocks from response
    const jsonString = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const parsedData = JSON.parse(jsonString);

    return NextResponse.json({ success: true, data: parsedData });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Fehler bei der KI-Anfrage', details: error.message },
      { status: 500 }
    );
  }
}