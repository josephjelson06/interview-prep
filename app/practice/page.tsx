'use client';

import { Eye, ArrowLeft, ArrowRight, EyeOff } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, Suspense } from 'react';
import { curriculumQuestions } from '@/lib/questions';
import ReactMarkdown from 'react-markdown';

function PracticeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const qId = searchParams.get('q');
  
  const [showAnswer, setShowAnswer] = useState(false);

  const questionIndex = curriculumQuestions.findIndex(q => q.id === qId);
  // Default to a random index if not provided or valid
  const currentQuestionIndex = questionIndex >= 0 ? questionIndex : 0;
  const question = curriculumQuestions[currentQuestionIndex];
  
  const prevQuestion = currentQuestionIndex > 0 ? curriculumQuestions[currentQuestionIndex - 1] : null;
  const nextQuestion = currentQuestionIndex < curriculumQuestions.length - 1 ? curriculumQuestions[currentQuestionIndex + 1] : null;

  const handleNext = () => {
    if (nextQuestion) {
      setShowAnswer(false);
      router.push(`/practice?q=${nextQuestion.id}`);
    }
  };

  const handlePrev = () => {
    if (prevQuestion) {
      setShowAnswer(false);
      router.push(`/practice?q=${prevQuestion.id}`);
    }
  };

  if (!question) {
    return <div className="p-10 text-center">Question not found.</div>;
  }

  return (
    <main className="flex-grow pt-8 pb-32 px-6 max-w-5xl mx-auto w-full relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 border-b border-outline pb-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="text-on-surface-variant font-label text-[10px] tracking-[0.2em] uppercase">{question.category}</span>
            <span className="w-1.5 h-1.5 bg-primary"></span>
            <span className="text-on-surface font-label text-[10px] tracking-[0.2em] uppercase">{question.topic}</span>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-[10px] font-mono text-on-surface-variant tracking-[0.1em] uppercase">
              Question {currentQuestionIndex + 1} of {curriculumQuestions.length}
            </span>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="relative bg-surface border border-outline p-10 md:p-16">
          <div className="flex items-center gap-3 mb-10">
            <div className="flex items-center gap-3 px-4 py-2 border border-outline">
              <span className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">Difficulty</span>
              <span className="w-[1px] h-3 bg-outline"></span>
              <span className={`text-[10px] uppercase font-bold tracking-[0.1em] ${
                question.difficulty === 'Junior' ? 'text-primary' : 
                question.difficulty === 'Intermediate' ? 'text-tertiary' : 'text-secondary'
              }`}>{question.difficulty}</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-[56px] font-headline font-light text-on-surface leading-[1.2] mb-12 max-w-3xl">
            {question.title}
          </h2>

          {question.snippet && (
            <div className="mb-12 border border-outline bg-surface-container-low text-left">
              <div className="bg-surface-container px-6 py-3 border-b border-outline">
                <span className="text-[10px] font-mono text-outline uppercase tracking-[0.2em]">{question.snippet.filename}</span>
              </div>
              <pre className="p-8 font-mono text-[13px] overflow-x-auto text-on-surface-variant leading-[1.8]"><code>{question.snippet.code}</code></pre>
            </div>
          )}
          
          {!showAnswer ? (
            <div className="flex flex-col items-center justify-center py-20 px-8 bg-surface-container-low border border-outline">
              <button 
                onClick={() => setShowAnswer(true)}
                className="group relative px-10 py-5 bg-on-surface text-background font-label text-[12px] uppercase tracking-[0.1em] font-semibold hover:opacity-90 transition-opacity flex items-center gap-3"
              >
                <Eye className="w-4 h-4" />
                Reveal Answer
              </button>
              <p className="mt-8 text-on-surface-variant text-[12px] tracking-[0.05em] text-center max-w-md leading-relaxed">
                Take a moment to formulate your answer structurally before revealing.
              </p>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-outline">
                <h3 className="font-headline text-2xl font-light text-primary">Curated Answer</h3>
                <button 
                  onClick={() => setShowAnswer(false)}
                  className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2"
                >
                  <EyeOff className="w-3 h-3" /> Hide
                </button>
              </div>
              <div className="prose prose-invert prose-headings:font-headline prose-headings:font-light prose-p:font-body prose-p:leading-relaxed prose-a:text-primary max-w-none text-on-surface-variant">
                <ReactMarkdown>
                  {question.answerMarkdown}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-16 flex justify-between items-center gap-4">
        <button 
          onClick={handlePrev}
          disabled={!prevQuestion}
          className={`flex items-center gap-3 px-8 py-4 border border-outline transition-colors ${
            prevQuestion ? 'text-on-surface-variant hover:bg-outline-variant hover:text-on-surface cursor-pointer' : 'opacity-30 cursor-not-allowed'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-label text-[10px] uppercase tracking-[0.2em]">Previous</span>
        </button>
        
        <div className="hidden md:flex items-center gap-3">
          {curriculumQuestions.slice(Math.max(0, currentQuestionIndex - 1), Math.min(curriculumQuestions.length, currentQuestionIndex + 3)).map((q, idx) => {
            const actualIndex = Math.max(0, currentQuestionIndex - 1) + idx;
            const isActive = actualIndex === currentQuestionIndex;
            return (
              <div 
                key={q.id} 
                className={`w-1.5 h-1.5 ${isActive ? 'bg-primary' : 'border border-outline'}`}
              ></div>
            );
          })}
        </div>

        <button 
          onClick={handleNext}
          disabled={!nextQuestion}
          className={`flex items-center gap-3 px-8 py-4 transition-opacity ${
            nextQuestion ? 'bg-on-surface text-background hover:opacity-90 cursor-pointer' : 'bg-surface-container text-outline cursor-not-allowed border border-outline'
          }`}
        >
          <span className="font-label text-[10px] uppercase tracking-[0.2em] font-semibold">Next</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="fixed top-1/2 left-0 w-full h-[1px] bg-primary/5 pointer-events-none -z-10"></div>
    </main>
  );
}

export default function PracticePage() {
  return (
    <Suspense fallback={<div className="p-10 text-center font-mono text-[10px] uppercase tracking-[0.2em]">Loading Exhibition...</div>}>
      <PracticeContent />
    </Suspense>
  );
}
