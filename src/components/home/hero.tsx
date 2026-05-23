'use client';
import React, { useEffect, useState } from 'react';

const roles = [
  'AIML Engineer',
  'Software Developer',
  'Full-Stack Developer',
  'Generative AI Specialist',
  'LLM Pipeline Builder'
];

export default function Hero() {
  const [nameVisible, setNameVisible] = useState(false);
  const [rolesVisible, setRolesVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [roleAnim, setRoleAnim] = useState<'enter' | 'exit'>('enter');

  useEffect(() => {
    const t1 = setTimeout(() => setNameVisible(true), 300);
    const t2 = setTimeout(() => setRolesVisible(true), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (!rolesVisible) return;
    const cycle = setInterval(() => {
      setRoleAnim('exit');
      setTimeout(() => {
        setCurrentRole(prev => (prev + 1) % roles.length);
        setRoleAnim('enter');
      }, 400);
    }, 2500);
    return () => clearInterval(cycle);
  }, [rolesVisible]);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-foreground overflow-hidden">

      {/* Cinematic grain overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        opacity: 0.4, pointerEvents: 'none'
      }} />

      {/* Subtle vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
        pointerEvents: 'none'
      }} />

      {/* Thin horizontal line accent */}
      <div style={{
        position: 'absolute', left: '8%', right: '8%',
        top: '50%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
        zIndex: 1
      }} />

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 2rem' }}>

        {/* Name */}
        <div style={{
          overflow: 'hidden',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontFamily: "'Georgia', serif",
            fontSize: 'clamp(2.5rem, 7vw, 7rem)',
            fontWeight: 300,
            color: '#ffffff',
            letterSpacing: '0.15em',
            margin: 0,
            lineHeight: 1,
            transform: nameVisible ? 'translateY(0)' : 'translateY(110%)',
            opacity: nameVisible ? 1 : 0,
            transition: 'transform 1.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.4s ease',
            textTransform: 'uppercase'
          }}>
            Pardha Saradhi
          </h1>
        </div>

        {/* Thin divider line */}
        <div style={{
          width: nameVisible ? '120px' : '0px',
          height: '1px',
          background: 'rgba(255,255,255,0.3)',
          margin: '0 auto 3rem',
          transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.8s'
        }} />

        {/* Role line */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          opacity: rolesVisible ? 1 : 0,
          transition: 'opacity 0.8s ease',
          height: '3rem',
          overflow: 'hidden'
        }}>
          {/* Static "I am a" */}
          <span style={{
            fontFamily: "'Georgia', serif",
            fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.45)',
            letterSpacing: '0.08em',
            whiteSpace: 'nowrap',
            fontStyle: 'italic'
          }}>
            I am a
          </span>

          {/* Animated role */}
          <div style={{ overflow: 'hidden', height: '3rem', display: 'flex', alignItems: 'center' }}>
            <span style={{
              display: 'block',
              fontFamily: "'Georgia', serif",
              fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
              fontWeight: 400,
              color: '#ffffff',
              letterSpacing: '0.06em',
              whiteSpace: 'nowrap',
              transform: roleAnim === 'enter' ? 'translateY(0)' : 'translateY(-120%)',
              opacity: roleAnim === 'enter' ? 1 : 0,
              transition: roleAnim === 'enter'
                ? 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease'
                : 'transform 0.4s cubic-bezier(0.7, 0, 1, 0.5), opacity 0.3s ease'
            }}>
              {roles[currentRole]}
            </span>
          </div>
        </div>

        {/* Bottom subtle text */}
        <div style={{
          marginTop: '4rem',
          opacity: rolesVisible ? 0.3 : 0,
          transition: 'opacity 1s ease 0.5s'
        }}>
          <span style={{
            fontFamily: 'sans-serif',
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#ffffff'
          }}>
            Chennai, India · SRM IST · 2027
          </span>
        </div>
      </div>

      {/* Bottom letterbox bars — cinematic feel */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '80px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
        zIndex: 1, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '80px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)',
        zIndex: 1, pointerEvents: 'none'
      }} />
    </div>
  );
}
