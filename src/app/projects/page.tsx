'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProjectLink from '@/app/projects/projectLink';
import Modal from '@/app/projects/project/modal';
import Layout from '@/components/layout';
import { ModalContext } from './modalContext';

const projects = [
  {
<<<<<<< HEAD
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
=======
    title: 'M31 Controller',
    src: 'm31/controller.jpg',
    description:
      'A video/audio game controller to make digital entertainment more approachable to those with visual impairments.',
    href: '/projects/m31',
    tag: 'Prototyping',
    color: '#000000'
  },
  {
    title: 'AXO',
    src: 'axo/astronaut-square.png',
    href: '/projects/axo',
    tag: 'Bio Materials',
    color: '#ee5622'
  },
  {
    title: 'StyleSync',
    src: 'stylesync/stylesync.png',
    href: '/projects/stylesync',
    tag: 'ML / AI',
    color: 'pink'
  },
  {
    title: 'StackeRs',
    description:
      'Reusable packaging made of highly recyclable materials for baby bathing products.',
    src: 'bottles/block.png',
    href: '/projects/stackers',
    tag: 'Packaging',
    color: '#EFE8D3'
  },
  {
    title: 'ASTRA',
    description: 'An interstellar games arcade with a hologram screen.',
    src: 'astra/astra.png',
    href: '/projects/astra',
    tag: 'GIZMO',
    color: '#303030'
  }

  // {
  //   title: 'DAO social network',
  //   src: 'sojo/astra.png',
  //   href: '/projects/catapult-v1',
  //   tag: 'Software',
  //   color: '#303030'
  // },
  // {
  //   title: 'SOJO',
  //   src: 'sojo/astra.png',
  //   href: '/projects/sojo',
  //   tag: 'Software',
  //   color: '#303030'
  // },
  // {
  //   title: 'JENGA',
  //   src: 'jenga.jpg',
  //   href: '/projects/robot-jenga',
  //   tag: 'Robotics',
  //   color: '#706D63'
  // },
  // {
  //   title: 'Woody',
  //   src: 'woody.jpg',
  //   href: '/projects/woody',
  //   tag: 'Electronics',
  //   color: '#706D63'
  // },
  // {
  //   title: 'DAFT(PUNK)BOT',
  //   src: 'cubo/cubo.jpg',
  //   href: '/projects/cubo',
  //   tag: 'Electronics',
  //   color: '#EFE8D3'
  // },
  // {
  //   title: 'Tandem bike',
  //   src: 'bike.png',
  //   href: '/projects/tandem-bike-bike',
  //   tag: 'CAD & optimisation',
  //   color: '#EFE8D3'
  // },
  // {
  //   title: 'TETRIS',
  //   src: 'tetris.png',
  //   href: '/projects/tetris',
  //   tag: 'Software',
  //   color: '#EFE8D3'
  // }
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
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
