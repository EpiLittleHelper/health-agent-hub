export default function Home() {
  return (
    <main style={{ padding: '3rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Epidemiological & Clinical Evidence Hub</h1>
      <p>API per agenti LLM e assistenti clinici.</p>
      <ul>
        <li><a href="/llms.txt">/llms.txt</a></li>
        <li><a href="/api/guidelines">/api/guidelines</a></li>
      </ul>
    </main>
  );
}
