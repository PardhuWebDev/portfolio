'use client';
import ProjectHero from '@/app/projects/project/hero';
import PageScrollParallax from '@/components/pageScrollParallax';
import React from 'react';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

const Picture1 = { src: '/images/projects/po.png', width: 1200, height: 800 } as StaticImageData;
const Picture2 = { src: '/images/projects/stock-ui.png', width: 1200, height: 800 } as StaticImageData;
const Picture3 = { src: '/images/projects/devpulse-ui.png', width: 1200, height: 800 } as StaticImageData;

export default function POProject() {
  const introduction =
    'A full-stack Purchase Order Management System built for enterprise use. ' +
    'Features Google OAuth + JWT authentication, Gemini AI auto-description for new orders, ' +
    'real-time Socket.IO notifications, a Spring Boot vendor microservice, and a PostgreSQL backend — all deployed on Google Cloud Platform.';

  const description = 'Enterprise PO Management with AI and Real-Time Notifications';

  const myRole =
    'Lead developer. Architected and built the full system — FastAPI backend, PostgreSQL schema, Google OAuth + JWT auth flow, ' +
    'Gemini AI integration, Socket.IO notification layer, Spring Boot vendor service, and a polished dark-themed React frontend. Deployed on GCP.';

  return (
    <div className="bg-foreground">
      <ProjectHero
        description={myRole}
        media={'/images/projects/po.png'}
        isImage={true}
        title={'Purchase Order System'}
        bgColour="black"
      />
      <PageScrollParallax
        title={'Full-Stack Enterprise System on GCP'}
        body={introduction}
        word={description}
        staticImgs={[Picture1, Picture2, Picture3]}
      />
      <div className="bg-foreground px-12 py-20 text-background">
        <h2 className="mb-8 text-3xl font-semibold uppercase tracking-tight">Tech Stack</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {['FastAPI', 'PostgreSQL', 'Spring Boot', 'Google OAuth', 'Gemini AI', 'Socket.IO', 'Docker', 'GCP'].map((tech) => (
            <div key={tech} className="border border-background/20 p-4 text-sm uppercase tracking-widest text-background/70">{tech}</div>
          ))}
        </div>
        <div className="mt-16">
          <Link href="https://github.com/PardhuWebDev/PO-management-System" target="_blank"
            className="border border-background px-8 py-4 text-sm uppercase tracking-widest text-background transition-colors hover:bg-background hover:text-foreground">
            View on GitHub →
          </Link>
        </div>
      </div>
    </div>
  );
}
