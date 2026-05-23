'use client';
import ProjectHero from '@/app/projects/project/hero';
import PageScrollParallax from '@/components/pageScrollParallax';
import React from 'react';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

const Picture1 = { src: '/images/projects/indiaQuant.png', width: 1200, height: 800 } as StaticImageData;
const Picture2 = { src: '/images/projects/stock-ui.png', width: 1200, height: 800 } as StaticImageData;
const Picture3 = { src: '/images/projects/research.png', width: 1200, height: 800 } as StaticImageData;

export default function IndiaQuantProject() {
  const introduction =
    'IndiaQuant MCP is a Python-based Model Context Protocol server that connects Large Language Models directly to live NSE (National Stock Exchange) data. ' +
    'It enables real-time stock queries, Black-Scholes options Greeks calculation, RSI-based scanning, and full virtual portfolio management — all orchestrated through Claude Desktop.';

  const description = 'Agentic Finance Intelligence for Indian Markets';

  const myRole =
    'Sole architect and developer. Built the full MCP server from scratch — integrating live NSE APIs, implementing Black-Scholes Greeks, designing the RSI scanner, and wiring it all into a virtual portfolio manager accessible via Claude Desktop.';

  return (
    <div className="bg-foreground">
      <ProjectHero
        description={myRole}
        media={'/images/projects/indiaQuant.png'}
        isImage={true}
        title={'IndiaQuant MCP'}
        bgColour="black"
      />
      <PageScrollParallax
        title={'Real-Time NSE Intelligence via LLMs'}
        body={introduction}
        word={description}
        staticImgs={[Picture1, Picture2, Picture3]}
      />
      <div className="bg-foreground px-12 py-20 text-background">
        <h2 className="mb-8 text-3xl font-semibold uppercase tracking-tight">Tech Stack</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {['Python', 'MCP Protocol', 'NSE API', 'Black-Scholes', 'RSI Scanner', 'Claude Desktop', 'FastAPI', 'Pandas'].map((tech) => (
            <div key={tech} className="border border-background/20 p-4 text-sm uppercase tracking-widest text-background/70">{tech}</div>
          ))}
        </div>
        <div className="mt-16">
          <Link href="https://github.com/PardhuWebDev/indiaquant-mcp" target="_blank"
            className="border border-background px-8 py-4 text-sm uppercase tracking-widest text-background transition-colors hover:bg-background hover:text-foreground">
            View on GitHub →
          </Link>
        </div>
      </div>
    </div>
  );
}
