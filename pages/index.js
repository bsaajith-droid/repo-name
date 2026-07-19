import { useState } from "react";
import styles from "../styles/Home.module.css";

const VIDEO_ID = "dmJNYfhAxZw";

function YouTubePlaceholder({ videoId, onLoad }) {
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  return (
    <button className={styles.youtubePlaceholder} onClick={onLoad} aria-label="Load YouTube video">
      <img src={thumbnail} alt="Video thumbnail" className={styles.thumbnail} />
      <div className={styles.playButton} aria-hidden>
        ▶
      </div>
    </button>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className={styles.main}>
      <h1>iPhone Screen Time (Quick Guide)</h1>
      <p className={styles.lead}>A short walkthrough showing how to use Screen Time on iPhone.</p>

      <div className={styles.videoWrap}>
        {loaded ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={styles.iframe}
          />
        ) : (
          <>
            <YouTubePlaceholder videoId={VIDEO_ID} onLoad={() => setLoaded(true)} />
            <noscript>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className={styles.iframe}
              />
            </noscript>
          </>
        )}
      </div>
    </main>
  );
}
