'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProjectLink from '@/app/projects/projectLink';
import Modal from '@/app/projects/project/modal';
import Layout from '@/components/layout';
import { ModalContext } from './modalContext';

const projects = [
  {
    title: 'IndiaQuant MCP',
    src: 'projects/indiaQuant.png',
    description:
      'Python MCP server integrating LLMs with live NSE stock data, Black-Scholes Greeks, RSI scanning, and virtual portfolio management via Claude Desktop.',
    href: '/projects/indiaQuant',
    tag: 'Agentic AI',
    color: '#0f172a'
  },
  {
    title: 'Autonomous Research Synthesizer',
    src: 'projects/research.png',
    description:
      'LangGraph multi-agent pipeline with contradiction detection across research sources. Built for publication-grade technical depth.',
    href: '/projects/research',
    tag: 'LangGraph / RAG',
    color: '#1e1b4b'
  },
  {
    title: 'VELA — Voice AI Agent',
    src: 'projects/vela.png',
    description:
      'Voice-controlled AI assistant using Whisper STT, LLaMA/Groq inference, and a custom React glassmorphism frontend.',
    href: '/projects/vela',
    tag: 'Voice AI',
    color: '#0c1a2e'
  },
  {
    title: 'Stock Intelligence Dashboard',
    src: 'projects/stock.png',
    description:
      'Real-time stock analytics with FastAPI, yfinance, Chart.js, and Gemini API chat integration for market intelligence.',
    href: '/projects/stock',
    tag: 'FinTech / AI',
    color: '#111827'
  },
  {
    title: 'Purchase Order System',
    src: 'projects/po.png',
    description:
      'FastAPI + PostgreSQL backend with Google OAuth, Gemini AI, Socket.IO notifications, and a Spring Boot vendor microservice on GCP.',
    href: '/projects/po',
    tag: 'Full-Stack',
    color: '#0f3460'
  }
];

export default function ProjectsHome() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      <Layout title={'My Work'}>
        <div className="m-0">
          <div className="m-0 overflow-hidden">
            {projects.map((project, index) => {
              return (
                <Link href={project.href} key={index}>
                  <ProjectLink
                    index={index}
                    title={project.title}
                    tag={project.tag}
                  />
                </Link>
              );
            })}
          </div>
          <Modal projects={projects} />
        </div>
      </Layout>
    </ModalContext.Provider>
  );
}
