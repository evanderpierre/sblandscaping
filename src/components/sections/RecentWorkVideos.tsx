"use client";

import React from "react";
import { EyebrowLabel } from "@/components/ui/design-system";
import { Reveal } from "@/components/ui/primitives";

type WorkVideo = {
  category: string;
  title: string;
  src: string;
  poster: string;
  alt: string;
};

const VIDEOS: WorkVideo[] = [
  {
    category: "Plant Installation",
    title: "Plant Installation in Progress",
    src: "/images/client-media/videos/optimized/plant-installation-in-progress-01.mp4",
    poster: "/images/client-media/videos/posters/plant-installation-in-progress-01.webp",
    alt: "S.B. Landscaping crew installing hostas in a residential garden bed",
  },
  {
    category: "Finished Work",
    title: "Finished Shrub Trimming",
    src: "/images/client-media/videos/optimized/shrub-trimming-finished-01.mp4",
    poster: "/images/client-media/videos/posters/shrub-trimming-finished-01.webp",
    alt: "Finished shaped shrubs and maintained lawn by S.B. Landscaping",
  },
  {
    category: "Shrub Care",
    title: "Shrub Trimming in Action",
    src: "/images/client-media/videos/optimized/shrub-trimming-in-progress-01.mp4",
    poster: "/images/client-media/videos/posters/shrub-trimming-in-progress-01.webp",
    alt: "S.B. Landscaping trimming and shaping an evergreen shrub",
  },
];

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 7.7v8.6L16 12 9 7.7Z" fill="currentColor" />
    </svg>
  );
}

function VideoCard({ video }: { video: WorkVideo }) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [active, setActive] = React.useState(false);

  const playVideo = () => {
    const element = videoRef.current;
    if (!element) return;
    setActive(true);
    void element.play().catch(() => setActive(false));
  };

  return (
    <article className="work-video-card">
      <div className="work-video-media">
        <video
          ref={videoRef}
          controls={active}
          preload="none"
          playsInline
          poster={video.poster}
          aria-label={video.alt}
          onEnded={() => setActive(false)}
        >
          <source src={video.src} type="video/mp4" />
        </video>
        {!active && (
          <button
            type="button"
            className="work-video-play"
            onClick={playVideo}
            aria-label={`Play ${video.title}`}
          >
            <span className="work-video-play-icon"><PlayIcon /></span>
            <span>Play video</span>
          </button>
        )}
      </div>
      <div className="work-video-caption">
        <span>{video.category}</span>
        <h3 className="ed-head">{video.title}</h3>
      </div>
    </article>
  );
}

export function RecentWorkVideos() {
  return (
    <section id="recent-work-videos" className="recent-work-videos">
      <div className="recent-work-videos-inner">
        <Reveal style={{ maxWidth: 700 }}>
          <EyebrowLabel inverse>Recent Work Videos</EyebrowLabel>
          <h2 className="ed-head">See S.B. Landscaping in action.</h2>
          <p>Watch recent maintenance, planting, and trimming work from real S.B. Landscaping projects.</p>
        </Reveal>

        <div className="work-video-grid">
          {VIDEOS.map((video, index) => (
            <Reveal key={video.title} delay={index * 90}>
              <VideoCard video={video} />
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .recent-work-videos {
          background: #101310;
          color: var(--sb-white);
          padding: var(--section-pad-y) clamp(20px, 6vw, 96px);
          border-top: 1px solid rgba(90, 178, 116, .16);
        }
        .recent-work-videos-inner { max-width: 1280px; margin: 0 auto; }
        .recent-work-videos h2 {
          font-size: clamp(2rem, 3.4vw, 3.1rem);
          margin-top: 16px;
          max-width: 650px;
        }
        .recent-work-videos > div > div > p {
          color: rgba(245, 245, 242, .68);
          font-size: 16px;
          line-height: 1.7;
          margin-top: 16px;
          max-width: 620px;
        }
        .work-video-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-top: 44px;
        }
        .work-video-card {
          height: 100%;
          overflow: hidden;
          border: 1px solid rgba(245, 245, 242, .13);
          border-radius: 20px;
          background: #171b17;
          box-shadow: 0 18px 46px rgba(0, 0, 0, .22);
          transition: transform 300ms cubic-bezier(.16,1,.3,1), border-color 300ms ease;
        }
        .work-video-card:hover { transform: translateY(-5px); border-color: rgba(90, 178, 116, .46); }
        .work-video-media {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: #080a08;
        }
        .work-video-media video {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          background: #080a08;
        }
        .work-video-media video[controls] { object-fit: contain; }
        .work-video-play {
          position: absolute;
          inset: 0;
          width: 100%;
          border: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #fff;
          font: inherit;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          cursor: pointer;
          background: linear-gradient(180deg, rgba(7,10,8,.05), rgba(7,10,8,.42));
        }
        .work-video-play-icon {
          width: 60px;
          height: 60px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          color: #0b100c;
          background: var(--sb-flag-green);
          border: 1px solid rgba(255,255,255,.45);
          box-shadow: 0 12px 32px rgba(0,0,0,.28);
          transition: transform 240ms ease, background 240ms ease;
        }
        .work-video-play:hover .work-video-play-icon,
        .work-video-play:focus-visible .work-video-play-icon { transform: scale(1.08); background: #74c88d; }
        .work-video-play:focus-visible { outline: 2px solid #fff; outline-offset: -5px; }
        .work-video-caption { padding: 20px 22px 22px; }
        .work-video-caption span {
          color: var(--sb-flag-green);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .work-video-caption h3 { color: #fff; font-size: 21px; margin-top: 8px; }
        @media (max-width: 900px) {
          .work-video-grid { grid-template-columns: 1fr; max-width: 620px; }
          .work-video-media { aspect-ratio: 16 / 10; }
        }
        @media (max-width: 560px) {
          .work-video-grid { margin-top: 32px; gap: 18px; }
          .work-video-media { aspect-ratio: 4 / 5; }
          .work-video-card:hover { transform: none; }
          .work-video-play-icon { width: 54px; height: 54px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .work-video-card, .work-video-play-icon { transition: none; }
        }
      `}</style>
    </section>
  );
}
