'use client';

import { Search, ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, Suspense } from 'react';
import { curriculumQuestions, Category } from '@/lib/questions';

const categories = ['React', 'Next.js', 'JavaScript', 'Node.js / Express'];

function QuestionsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const categoryParam = searchParams.get('category') as Category;
  const activeCategory = categoryParam && categories.includes(categoryParam) ? categoryParam : 'React';
  const activeTopic = searchParams.get('topic');

  const [searchQuery, setSearchQuery] = useState('');

  const questionsInCategory = curriculumQuestions.filter(q => q.category === activeCategory);
  const topics = Array.from(new Set(questionsInCategory.map(q => q.topic)));

  // If no active topic or topic not in category, select first topic
  const selectedTopic = activeTopic && topics.includes(activeTopic) ? activeTopic : topics[0];

  const displayedQuestions = questionsInCategory.filter(q => {
    const matchesTopic = q.topic === selectedTopic;
    const matchesSearch = q.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch && (searchQuery ? true : matchesTopic);
  });

  return (
    <main className="pt-8 pb-32 px-4 md:px-8 max-w-[1400px] mx-auto w-full">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-12">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-on-surface">{activeCategory}</span>
        {selectedTopic && !searchQuery && (
          <>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary">{selectedTopic}</span>
          </>
        )}
      </nav>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            <div>
              <h3 className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSearchQuery('');
                      router.push(`/questions?category=${encodeURIComponent(cat)}`);
                    }}
                    className={`block w-full text-left px-4 py-2 font-mono text-[12px] uppercase tracking-[0.1em] transition-colors ${
                      activeCategory === cat 
                        ? 'bg-primary text-background font-bold' 
                        : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface border border-transparent hover:border-outline'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4">Topics</h3>
              <div className="space-y-2">
                {topics.map(topic => (
                  <button
                    key={topic}
                    onClick={() => {
                      setSearchQuery('');
                      router.push(`/questions?category=${encodeURIComponent(activeCategory)}&topic=${encodeURIComponent(topic)}`);
                    }}
                    className={`block w-full text-left px-4 py-2 font-body text-[14px] transition-colors border-l-2 ${
                      selectedTopic === topic && !searchQuery
                        ? 'border-primary text-primary bg-primary/5' 
                        : 'border-transparent text-on-surface-variant hover:border-outline hover:text-on-surface'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Panel */}
        <div className="flex-grow">
          <section className="mb-10">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-on-surface-variant w-4 h-4" />
              <input 
                className="w-full bg-surface-container-low border border-outline focus:border-primary focus:ring-0 py-4 pl-12 pr-6 text-on-surface placeholder:text-outline transition-all font-body text-[14px]" 
                placeholder={`Search ${activeCategory} questions...`}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </section>

          <header className="mb-8 border-b border-outline pb-4 flex justify-between items-end">
            <h2 className="text-3xl font-headline font-light">
              {searchQuery ? 'Search Results' : selectedTopic}
            </h2>
            <span className="font-mono text-[12px] text-on-surface-variant">
              {displayedQuestions.length} Questions
            </span>
          </header>

          <div className="grid grid-cols-1 gap-6">
            {displayedQuestions.length > 0 ? displayedQuestions.map(q => (
              <div key={q.id} className="bg-surface-container border border-outline p-6 hover:border-primary/50 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <div className="flex gap-3 mb-3">
                    <span className="text-on-surface-variant font-label text-[10px] uppercase tracking-[0.2em]">{q.topic}</span>
                    <span className="w-[1px] h-3 bg-outline"></span>
                    <span className={`font-label text-[10px] uppercase tracking-[0.2em] ${
                      q.difficulty === 'Junior' ? 'text-primary' : 
                      q.difficulty === 'Intermediate' ? 'text-tertiary' : 'text-secondary'
                    }`}>
                      {q.difficulty}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-headline font-light leading-[1.4] max-w-2xl">{q.title}</h3>
                </div>
                
                <Link href={`/practice?q=${q.id}`} prefetch={false} className="shrink-0 flex items-center justify-center bg-on-surface text-background px-6 py-3 text-[10px] font-label uppercase tracking-[0.1em] hover:opacity-90 transition-opacity">
                  Study <ArrowRight className="w-3 h-3 ml-2" />
                </Link>
              </div>
            )) : (
              <div className="text-center py-20 text-on-surface-variant font-body">
                No questions found. Try adjusting your search.
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function QuestionsPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center font-mono text-[10px] uppercase tracking-[0.2em]">Loading Library...</div>}>
      <QuestionsContent />
    </Suspense>
  );
}
