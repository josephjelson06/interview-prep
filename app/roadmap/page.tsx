import { Rocket, Box, Database, Sparkles, Hand, Settings, List, Keyboard, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function RoadmapPage() {
  const syllabus = [
    {
      level: 'Beginner',
      description: 'Foundations of web development. Build a strong base in language syntax and core framework concepts.',
      items: [
        { title: 'Variables, Types & Functions', category: 'JavaScript' },
        { title: 'JSX & Components', category: 'React' },
        { title: 'Props & Basic State', category: 'React' },
        { title: 'Routing Basics', category: 'Next.js' },
        { title: 'Intro to Node.js', category: 'Node.js / Express' },
      ],
    },
    {
      level: 'Intermediate',
      description: 'Moving beyond basics. Deepen your understanding of state management, async programming, and APIs.',
      items: [
        { title: 'Promises & Async/Await', category: 'JavaScript' },
        { title: 'Hooks & Effects', category: 'React' },
        { title: 'Context API', category: 'React' },
        { title: 'Data Fetching & Caching', category: 'Next.js' },
        { title: 'Express Middleware', category: 'Node.js / Express' },
      ],
    },
    {
      level: 'Advanced',
      description: 'Mastering the architecture. Prepare for senior-level questions on architecture, performance, and advanced patterns.',
      items: [
        { title: 'Closures & Prototypes', category: 'JavaScript' },
        { title: 'Performance Optimization', category: 'React' },
        { title: 'Server Components & Actions', category: 'Next.js' },
        { title: 'Authentication', category: 'Node.js / Express' },
      ],
    },
    {
      level: 'Coding Practice',
      description: 'Hands-on algorithm and system design challenges that often accompany technical interviews.',
      items: [
        { title: 'DOM Manipulation', category: 'JavaScript' },
        { title: 'Custom Hooks', category: 'React' },
        { title: 'Building REST APIs', category: 'Node.js / Express' },
      ],
    }
  ];

  return (
    <main className="pt-8 pb-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <section className="relative mb-24 lg:mb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-12 z-10 border-b border-outline pb-16">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="text-[10px] font-label uppercase tracking-[0.2em] text-primary border border-primary px-3 py-1">Roadmap</span>
              <span className="w-8 h-[1px] bg-outline"></span>
              <span className="text-[10px] font-label uppercase tracking-[0.2em] text-on-surface-variant">Syllabus</span>
            </div>
            <h2 className="text-5xl lg:text-[72px] font-headline font-light text-on-surface leading-[1.1] tracking-tight mb-8">
              Suggested <span className="italic text-primary">Progression</span>.
            </h2>
            <p className="text-on-surface-variant text-[16px] max-w-2xl leading-[1.6] font-body">
              A structured path from fundamental concepts to advanced architectural patterns. Use this syllabus as a guide to focus your interview preparation effectively.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-24 space-y-16">
        {syllabus.map((stage, index) => (
          <div key={stage.level} className="border border-outline bg-surface-container relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[40px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-outline bg-surface-container-high relative">
                <div className="absolute top-8 left-0 w-1 h-12 bg-primary"></div>
                <span className="text-[10px] font-mono text-on-surface-variant uppercase tracking-[0.2em] mb-4 block">Stage 0{index + 1}</span>
                <h3 className="text-3xl font-headline font-light mb-4">{stage.level}</h3>
                <p className="text-on-surface-variant text-[14px] leading-[1.6]">
                  {stage.description}
                </p>
              </div>
              
              <div className="md:col-span-8 p-8 md:p-12">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {stage.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex flex-col gap-1 border-l border-outline pl-4 hover:border-primary transition-colors">
                      <span className="font-headline text-[16px] text-on-surface">{item.title}</span>
                      <span className="font-label text-[10px] uppercase tracking-[0.1em] text-on-surface-variant">{item.category}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-12 pt-8 border-t border-outline flex justify-end">
                  <Link href={`/questions`} className="text-primary font-label text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 group/link hover:text-on-surface transition-colors">
                    Explore Questions 
                    <ArrowRight className="group-hover/link:translate-x-1 transition-transform w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-surface border border-outline p-10 md:p-16 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[40px] pointer-events-none"></div>
        <div className="relative z-10 md:flex items-center gap-16">
          <div className="flex-shrink-0 w-24 h-24 border border-outline flex items-center justify-center mb-8 md:mb-0">
            <Rocket className="text-primary w-8 h-8" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-3xl font-headline font-light mb-6">Ready to Start?</h2>
            <p className="text-on-surface-variant mb-10 max-w-xl leading-[1.6]">Dive right into practice mode, where you can quiz yourself randomly on our entire collection of questions.</p>
            <Link href="/practice" className="inline-block px-10 py-5 bg-on-surface text-background font-label text-[12px] uppercase tracking-[0.1em] font-semibold hover:opacity-90 transition-opacity">Start Practicing</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
