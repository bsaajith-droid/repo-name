export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>iPhone Screen Time (Quick Guide)</h1>

      <div style={{ marginTop: 16, width: "100%", maxWidth: 900 }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dmJNYfhAxZw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ width: "100%", aspectRatio: "16/9" }}
        />
      </div>
    </main>
  );
}
