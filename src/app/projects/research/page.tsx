'use client';
import ProjectHero from '@/app/projects/project/hero';
import PageScrollParallax from '@/components/pageScrollParallax';
import React from 'react';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

const Picture1 = { src: '/images/projects/research.png', width: 1200, height: 800 } as StaticImageData;
const Picture2 = { src: '/images/projects/devpulse-ui.png', width: 1200, height: 800 } as StaticImageData;
const Picture3 = { src: '/images/projects/vela-ui.png', width: 1200, height: 800 } as StaticImageData;

export default function ResearchProject() {
  const introduction =
    'The Autonomous Research Synthesizer is a LangGraph-based multi-agent pipeline that ingests research papers and articles, ' +
    'detects contradictions across sources, and synthesizes a coherent summary with confidence scores. ' +
    'Built for publication-grade technical depth and selected as a primary portfolio piece for its academic significance.';

  const description = 'Multi-Agent Research Intelligence with Contradiction Detection';

  const myRole =
    'Sole architect and developer. Designed the full LangGraph pipeline, implemented the contradiction detection algorithm, ' +
    'built the RAG retrieval layer, and structured the output for academic publication quality.';

  return (
    <div className="bg-foreground">
      <ProjectHero
        description={myRole}
        media={'/images/projects/research.png'}
        isImage={true}
        title={'Research Synthesizer'}
        bgColour="black"
      />
      <PageScrollParallax
        title={'Contradiction Detection Across Research Sources'}
        body={introduction}
        word={description}
        staticImgs={[Picture1, Picture2, Picture3]}
      />
      <div className="bg-foreground px-12 py-20 text-background">
        <h2 className="mb-8 text-3xl font-semibold uppercase tracking-tight">Tech Stack</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {['Python', 'LangGraph', 'LangChain', 'RAG', 'OpenAI', 'Vector DB', 'FastAPI', 'Pandas'].map((tech) => (
            <div key={tech} className="border border-background/20 p-4 text-sm uppercase tracking-widest text-background/70">{tech}</div>
          ))}
        </div>
        <div className="mt-16">
          <Link href="https://github.com/PardhuWebDev/research-synthesizer" target="_blank"
            className="border border-background px-8 py-4 text-sm uppercase tracking-widest text-background transition-colors hover:bg-background hover:text-foreground">
            View on GitHub →
          </Link>
        </div>
      </div>
    </div>
  );
}
