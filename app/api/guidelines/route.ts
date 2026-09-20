import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  // Query aggiornata sulla tabella 'epidata'
  const { data, error } = await supabase
    .from('epidata')
    .select('*');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    meta: {
      source: "Epidemiological Evidence Hub",
      license: "CC-BY-4.0",
      expert_validation: "Reviewed by Epidemiologist"
    },
    results: data
  });
}
