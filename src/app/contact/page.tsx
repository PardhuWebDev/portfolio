'use client';

import TextDisperse from '@/app/contact/textDisperse/textDisperse';
import { clsx } from 'clsx';
import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { ContactForm } from '@/app/contact/contactForm';
import { useToast } from '@/components/ui/use-toast';

export default function Contact() {
  const background = useRef(null);
  const emailRef = useRef(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const { toast } = useToast();

  const setBackground = (isActive: any) => {
    gsap.to(background.current, { opacity: isActive ? 0.7 : 0 });
  };

  const copyEmail = () => {
<<<<<<< HEAD
    navigator.clipboard.writeText('pardhu.sridhar@gmail.com');
=======
    navigator.clipboard.writeText('bettinasosarohl@gmail.com');
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const scrollToEmail = () => {
    const emailSection = document.getElementById('email');
    copyEmail();
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<<<<<<< HEAD
    <div className="-mt-20 bg-foreground text-white">
      <div className="flex min-h-screen w-full items-center justify-center pt-44 align-middle text-[8.6vw] xs:text-[5.6vw]">
        <div className="p-12 xs:w-1/2 xs:p-0">
          <div className="flex justify-between uppercase">
            <p className="m-0">Pardha</p>
            <p className="m-0">Saradhi</p>
          </div>
          <div className="flex justify-between uppercase">
            <p className="m-0">AIML</p>
            <p className="m-0">&</p>
          </div>
          <div className="flex justify-between uppercase">
            <p className="m-0">Full-Stack</p>
            <p className="m-0">Engineer</p>
          </div>
          <div className="flex justify-between uppercase">
            <p className="m-0">Chennai </p>
            <Link href={'https://linkedin.com/in/pardhuwebdev123'} target="_blank">
=======
    <div className="-mt-20 bg-foreground text-white ">
      <div className="flex min-h-screen w-full items-center justify-center pt-44 align-middle text-[8.6vw] xs:text-[5.6vw]">
        <div className="p-12 xs:w-1/2 xs:p-0">
          <div className="flex justify-between uppercase">
            <p className="m-0">Bettina</p>
            <p className="m-0">Sosa</p>
          </div>
          <div className="flex justify-between uppercase">
            <p className="m-0">software</p>
            <p className="m-0">&</p>
          </div>
          <div className="flex justify-between uppercase">
            <p className="m-0">design</p>
            <p className="m-0">engineer</p>
          </div>
          <div className="flex justify-between uppercase">
            <p className="m-0">Ldn </p>
            <Link href={'https://www.linkedin.com/in/bettina-sosa/'}>
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
              <TextDisperse setBackground={setBackground}>
                <p>→Linkedin</p>
              </TextDisperse>
            </Link>
          </div>
          <div className="flex justify-between uppercase">
            <TextDisperse
              setBackground={setBackground}
              onClick={() => {
                toast({
                  description:
<<<<<<< HEAD
                    'Email copied to clipboard — or drop a message on the form below!'
=======
                    'Email copied to clipboard, alternatively write your enquiry on the form!'
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
                });
                scrollToEmail();
              }}
            >
              <p className="m-0">→Email</p>
            </TextDisperse>

<<<<<<< HEAD
            <Link href={'https://github.com/PardhuWebDev'} target="_blank">
=======
            <Link href={'https://github.com/bettinasosa'}>
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
              <TextDisperse setBackground={setBackground}>
                <p>→Github</p>
              </TextDisperse>
            </Link>
          </div>
          <div
            ref={background}
            className={clsx(
              'pointer-events-none absolute inset-0 h-full w-full bg-foreground text-[5.6vw] opacity-0'
            )}
          ></div>
        </div>
      </div>
      <div className="px-12 sm:px-56" id="email" ref={emailRef}>
        <ContactForm />
      </div>
    </div>
  );
}
