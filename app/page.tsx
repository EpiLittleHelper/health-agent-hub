export default function Home() {
  return (
    <main style={{ padding: '3rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <h1>Epidemiological & Clinical Evidence Hub</h1>
      <p>Infrastruttura dati e API strutturate per l'integrazione con agenti LLM e assistenti clinici.</p>
      
      <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px' }}>
        <h3 style={{ marginTop: 0 }}>Endpoint disponibili per gli Agenti AI:</h3>
        <ul>
          <li><a href="/llms.txt" target="_blank"><strong>/llms.txt</strong></a> — Documentazione e contesto per LLM</li>
          <li><a href="/api/guidelines" target="_blank"><strong>/api/guidelines</strong></a> — Endpoint JSON-LD / Data Feed (Tabella: <em>epidata</em>)</li>
        </ul>
      </div>
    </main>
  );
}
