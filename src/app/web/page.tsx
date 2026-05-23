'use client';

import React from 'react';
import Layout from '@/components/layout';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHero } from '@/components/ui/SectionHero';

// Work items data
const workItems = [
  {
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
  }
];

export default function Work() {
  return (
    <Layout title="Web Gallery">
      <div className="container mx-auto min-h-screen px-4 py-16">
        <SectionHero
          title="Project Gallery"
          subtitle="A visual showcase of my full-stack and AI projects — dashboards, agents, and intelligent systems."
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
