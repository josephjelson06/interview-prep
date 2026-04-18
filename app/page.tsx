import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { curriculumQuestions } from '@/lib/questions';

export default function Home() {
  const categories = [
    { name: 'React', description: 'Core principles, hooks, architecture, and advanced patterns.' },
    { name: 'Next.js', description: 'App router, rendering strategies, and full-stack features.' },
    { name: 'JavaScript', description: 'Language fundamentals, async programming, and ES6+.' },
    { name: 'Node.js / Express', description: 'Backend basics, APIs, middleware, and routing.' },
  ];

  return (
    <main className="flex-grow pb-28 md:pb-16 px-4 md:px-8 max-w-[1400px] mx-auto w-full relative">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <section className="pt-20 pb-16 relative">
        <div className="absolute inset-0 bg-grid-pattern -z-20 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        
        <div className="space-y-8 z-10 max-w-3xl">
          <div className="inline-flex items-center gap-4">
            <span className="font-label text-[10px] tracking-[0.2em] text-primary uppercase">Frontend & Backend</span>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>
          
          <h1 className="font-headline text-5xl md:text-[64px] font-light tracking-tight leading-[1.1] text-on-surface">
            Technical<br/>
            Interview Prep.
          </h1>
          
          <p className="font-body text-[16px] text-on-surface-variant leading-[1.6]">
            A comprehensive, structured study library for modern web developers.
            Review foundational concepts, drill into architectural patterns, and rehearse for your technical interviews.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-20">
        {categories.map((category) => {
          const categoryQuestions = curriculumQuestions.filter(q => q.category === category.name);
          const topicsCount = new Set(categoryQuestions.map(q => q.topic)).size;
          
          return (
            <Link href={`/questions?category=${encodeURIComponent(category.name)}`} key={category.name} className="block group">
              <div className="bg-surface-container border border-outline hover:border-primary/50 transition-colors p-8 relative overflow-hidden h-full flex flex-col justify-between min-h-[250px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[40px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div>
                  <h2 className="text-3xl font-headline font-light mb-4">{category.name}</h2>
                  <p className="text-on-surface-variant leading-[1.6]">
                    {category.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-outline">
                  <div className="flex gap-6">
                    <div className="flex flex-col gap-1">
                      <span className="font-label text-[10px] uppercase tracking-[0.1em] text-on-surface-variant">Topics</span>
                      <span className="font-mono text-[14px] text-on-surface">{topicsCount}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-label text-[10px] uppercase tracking-[0.1em] text-on-surface-variant">Questions</span>
                      <span className="font-mono text-[14px] text-on-surface">{categoryQuestions.length}</span>
                    </div>
                  </div>
                  
                  <span className="font-label text-[10px] uppercase tracking-[0.1em] text-on-surface hover:text-primary transition-colors flex items-center gap-2">
                    Study <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      {/* About Me Section */}
      <section className="mt-20 pt-16 border-t border-outline flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left relative">
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        
        <div className="shrink-0 relative w-40 h-40 md:w-56 md:h-56">
          {/* Replace this placeholder src with the actual path to your picture, e.g., src="/jelson-joseph.jpg" */}
          <Image
            src="https://picsum.photos/seed/jelson/400/400"
            alt="Jelson Joseph"
            fill
            referrerPolicy="no-referrer"
            className="object-cover rounded-full border border-outline p-2 bg-surface-container"
          />
        </div>
        
        <div className="space-y-6 max-w-2xl bg-surface-container-low border border-outline p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[40px] -z-10"></div>
          
          <h2 className="font-headline text-3xl font-light text-on-surface">About Me</h2>
          
          <p className="font-body text-[15px] text-on-surface-variant leading-[1.8]">
            Hello Everyone! My name is Jelson Joseph, and I am a Software Engineer with a passion for crafting innovative solutions. I have a strong background in software development, and I am always eager to take on new challenges and learn new technologies. I believe in the power of collaboration and teamwork, and I am committed to delivering high-quality results in every project I undertake.
          </p>
          
          <div className="pt-2">
             <span className="font-label text-[10px] tracking-[0.2em] text-primary uppercase inline-block px-3 py-1.5 border border-primary/20 bg-primary/5">
               Jelson Joseph &bull; Software Engineer
             </span>
          </div>
        </div>
      </section>

    </main>
  );
}
