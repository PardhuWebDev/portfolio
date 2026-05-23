'use client';
import ProjectHero from '@/app/projects/project/hero';
import PageScrollParallax from '@/components/pageScrollParallax';
import React from 'react';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

const Picture1 = { src: '/images/projects/stock.png', width: 1200, height: 800 } as StaticImageData;
const Picture2 = { src: '/images/projects/devpulse-ui.png', width: 1200, height: 800 } as StaticImageData;
const Picture3 = { src: '/images/projects/vela-ui.png', width: 1200, height: 800 } as StaticImageData;

export default function StockProject() {
  const introduction =
    'The Stock Intelligence Dashboard is a real-time market analytics platform built with FastAPI and yfinance. ' +
    'It provides live price charts, RSI indicators, volume analysis, and an integrated Gemini AI chat panel ' +
    'that answers natural language questions about any stock in real time.';

  const description = 'Real-Time Market Intelligence with Gemini AI';

  const myRole =
    'Sole developer. Built the FastAPI backend with yfinance integration, designed the Chart.js visualizations, ' +
    'and wired in the Gemini API for natural language stock queries — all in a dark-themed responsive dashboard.';

  return (
    <div className="bg-foreground">
      <ProjectHero
        description={myRole}
        media={'/images/projects/stock.png'}
        isImage={true}
        title={'Stock Intelligence Dashboard'}
        bgColour="black"
      />
      <PageScrollParallax
        title={'AI-Powered Stock Analytics in Real Time'}
        body={introduction}
        word={description}
        staticImgs={[Picture1, Picture2, Picture3]}
      />
      <div className="bg-foreground px-12 py-20 text-background">
        <h2 className="mb-8 text-3xl font-semibold uppercase tracking-tight">Tech Stack</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {['Python', 'FastAPI', 'yfinance', 'Chart.js', 'Gemini API', 'React', 'REST API', 'Pandas'].map((tech) => (
            <div key={tech} className="border border-background/20 p-4 text-sm uppercase tracking-widest text-background/70">{tech}</div>
          ))}
        </div>
        <div className="mt-16">
          <Link href="https://github.com/PardhuWebDev/stock-dashboard" target="_blank"
            className="border border-background px-8 py-4 text-sm uppercase tracking-widest text-background transition-colors hover:bg-background hover:text-foreground">
            View on GitHub →
          </Link>
        </div>
      </div>
    </div>
  );
}
