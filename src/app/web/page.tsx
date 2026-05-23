'use client';

import React from 'react';
import Layout from '@/components/layout';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHero } from '@/components/ui/SectionHero';

// Work items data
const workItems = [
  {
<<<<<<< HEAD
    id: 'devpulse',
    title: 'DevPulse',
    description:
      'Developer productivity dashboard with DORA metrics, rule-based interpretation engine, and team health signals.',
    imagePath: '/images/projects/devpulse-ui.png',
    link: 'https://github.com/PardhuWebDev/DevPulse',
    tags: ['React', 'Node.js', 'Dashboard']
  },
  {
    id: 'stock',
    title: 'Stock Intelligence Dashboard',
    description:
      'Real-time NSE stock analytics with Black-Scholes Greeks, RSI scanning, and Gemini AI chat integration.',
    imagePath: '/images/projects/stock-ui.png',
    link: 'https://github.com/PardhuWebDev/stock-dashboard',
    tags: ['FastAPI', 'Chart.js', 'Gemini']
  },
  {
    id: 'vela',
    title: 'VELA — Voice AI Agent',
    description:
      'Voice-controlled AI assistant with Whisper STT, LLaMA/Groq inference, and glassmorphism React frontend.',
    imagePath: '/images/projects/vela-ui.png',
    link: 'https://github.com/PardhuWebDev/VELA',
    tags: ['Whisper', 'Groq', 'React']
  },
  {
    id: 'po',
    title: 'Purchase Order System',
    description:
      'Full-stack PO management with Google OAuth, Gemini AI auto-description, Socket.IO notifications, and Spring Boot vendor microservice.',
    imagePath: '/images/projects/po-ui.png',
    link: 'https://github.com/PardhuWebDev/PO-management-System',
=======
    id: 'onethoughtaday',
    title: 'One Thought A Day',
    description:
      'A minimalist journaling application with elegant typography - personal project',
    imagePath: '/images/onethoughtaday/homepage.png',
    link: 'https://www.onethoughtaday.com',
    tags: ['UI/UX Design', 'Minimalism']
  },
  {
    id: 'walletcon',
    title: 'WalletCon',
    description:
      'Annual conference for the WalletConnect ecosystem in Cannes, France - fully built and maintained by me',
    imagePath: '/images/gallery/walletcon.png',
    link: 'https://www.walletcon.com',
    tags: ['Web3', 'Event']
  },
  {
    id: 'walletconnect',
    title: 'WalletConnect Network',
    description:
      'The connectivity layer for the financial internet, powering 700+ wallets and 70K+ apps - full-stack engineer',
    imagePath: '/images/gallery/walletconnect.png',
    link: 'https://walletconnect.com',
    tags: ['Web3', 'Infrastructure']
  },
  {
    id: 'reown',
    title: 'Reown',
    description:
      'Infrastructure for onchain finance — from DeFi and payments to enterprises - full-stack engineer',
    imagePath: '/images/gallery/reown.png',
    link: 'https://reown.com',
    tags: ['Web3', 'DeFi']
  },
  {
    id: 'hivemind',
    title: 'Hivemind',
    description: 'AI-powered crypto marketing strategist (beta) - CTO',
    imagePath: '/images/gallery/hivemind.png',
    link: 'https://hivemind.myosin.xyz',
    tags: ['AI', 'Marketing']
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
  }
];

export default function Work() {
  return (
    <Layout title="Web Gallery">
      <div className="container mx-auto min-h-screen px-4 py-16">
        <SectionHero
<<<<<<< HEAD
          title="Project Gallery"
          subtitle="A visual showcase of my full-stack and AI projects — dashboards, agents, and intelligent systems."
=======
          title="Design & Development"
          subtitle="A collection of my design work and web projects featuring various styles and approaches."
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {workItems.map((item, index) => (
            <ProjectCard
              key={item.id}
              {...item}
              index={index}
              animated
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
