'use client';
import ProjectHero from '@/app/projects/project/hero';
import PageScrollParallax from '@/components/pageScrollParallax';
import React from 'react';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

const Picture1 = { src: '/images/projects/vela.png', width: 1200, height: 800 } as StaticImageData;
const Picture2 = { src: '/images/projects/stock-ui.png', width: 1200, height: 800 } as StaticImageData;
const Picture3 = { src: '/images/projects/po-ui.png', width: 1200, height: 800 } as StaticImageData;

export default function VelaProject() {
  const introduction =
    'VELA is a fully voice-controlled AI assistant that listens, thinks, and responds in real time. ' +
    'It uses OpenAI Whisper for speech-to-text, routes through LLaMA or Groq for fast LLM inference, ' +
    'and presents responses through a custom-built React glassmorphism frontend with animated waveforms.';

  const description = 'Voice-First AI with Cinematic Glassmorphism UI';

  const myRole =
    'Sole developer. Built the full voice pipeline — Whisper STT, LLM routing via Groq, ' +
    'and designed the glassmorphism React frontend with animated audio waveforms and real-time transcript display.';

  return (
    <div className="bg-foreground">
      <ProjectHero
        description={myRole}
        media={'/images/projects/vela.png'}
        isImage={true}
        title={'VELA'}
        bgColour="black"
      />
      <PageScrollParallax
        title={'Voice Intelligence Meets Cinematic UI'}
        body={introduction}
        word={description}
        staticImgs={[Picture1, Picture2, Picture3]}
      />
      <div className="bg-foreground px-12 py-20 text-background">
        <h2 className="mb-8 text-3xl font-semibold uppercase tracking-tight">Tech Stack</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {['Python', 'Whisper STT', 'LLaMA', 'Groq', 'React', 'Glassmorphism', 'FastAPI', 'WebSocket'].map((tech) => (
            <div key={tech} className="border border-background/20 p-4 text-sm uppercase tracking-widest text-background/70">{tech}</div>
          ))}
        </div>
        <div className="mt-16">
          <Link href="https://github.com/PardhuWebDev/VELA" target="_blank"
            className="border border-background px-8 py-4 text-sm uppercase tracking-widest text-background transition-colors hover:bg-background hover:text-foreground">
            View on GitHub →
          </Link>
        </div>
      </div>
    </div>
  );
}
