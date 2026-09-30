import React, { useState } from 'react';
import { CHECKLIST_DATA } from '../data/checklistData';
import { useDocs } from '../context/DocsContext';
import { 
  CheckSquare, 
  CheckCircle2, 
  RotateCcw, 
  Calendar, 
  Clock, 
  ArrowRight,
  BookOpen,
  Award
} from 'lucide-react';

export const ChecklistView: React.FC = () => {
  const { selectSoftware, selectArticle } = useDocs();
  const [selectedFreq, setSelectedFreq] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});

  const filteredTasks = CHECKLIST_DATA.filter(t => t.frequency === selectedFreq);
  const completedCount = filteredTasks.filter(t => checkedIds[t.id]).length;
  const progressPct = filteredTasks.length > 0 
    ? Math.round((completedCount / filteredTasks.length) * 100) 
    : 0;

  const toggleCheck = (id: string) => {
    setCheckedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const resetCurrentTab = () => {
    const updated = { ...checkedIds };
    filteredTasks.forEach(t => {
      delete updated[t.id];
    });
    setCheckedIds(updated);
  };

  const handleNavigateChapter = (chapterId?: string) => {
    if (chapterId) {
      selectSoftware('falgoon-admin');
      selectArticle(chapterId);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-6 sm:p-8 text-white shadow-lg mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-2 backdrop-blur-sm">
              <CheckSquare className="w-3.5 h-3.5" />
              Administrator Routine
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Operational Maintenance Checklists
            </h1>
            <p className="text-sm text-teal-100 mt-1 max-w-xl">
              Consistent administrative habits ensure your chatbot answers accurately, parent inquiries are answered promptly, and security permissions stay updated.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center min-w-[140px]">
            <div className="text-3xl font-black">{progressPct}%</div>
            <div className="text-[11px] text-teal-200 uppercase font-semibold tracking-wider">
              {completedCount} of {filteredTasks.length} Completed
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-2 mt-6 overflow-hidden">
          <div 
            className="bg-emerald-300 h-full transition-all duration-300 rounded-full"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Tabs & Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          <button
            onClick={() => setSelectedFreq('daily')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              selectedFreq === 'daily'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Daily Routine (5-10m)
          </button>
          <button
            onClick={() => setSelectedFreq('weekly')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              selectedFreq === 'weekly'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Weekly Review (20m)
          </button>
          <button
            onClick={() => setSelectedFreq('monthly')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              selectedFreq === 'monthly'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Monthly Audit (45m)
          </button>
        </div>

        <button
          onClick={resetCurrentTab}
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 bg-white border border-slate-200 px-3 py-2 rounded-xl transition-colors shadow-sm"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Checklist
        </button>
      </div>

      {/* Tasks List */}
      <div className="space-y-3">
        {filteredTasks.map(task => {
          const isDone = !!checkedIds[task.id];
          return (
            <div
              key={task.id}
              className={`p-4 sm:p-5 rounded-xl border transition-all flex items-start gap-4 ${
                isDone 
                  ? 'bg-emerald-50/40 border-emerald-200/80 shadow-none' 
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <input
                type="checkbox"
                checked={isDone}
                onChange={() => toggleCheck(task.id)}
                className="mt-1 w-5 h-5 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500 cursor-pointer flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className={`text-sm sm:text-base font-bold ${
                    isDone ? 'line-through text-slate-400' : 'text-slate-900'
                  }`}>
                    {task.task}
                  </h3>
                  {isDone && (
                    <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">
                      Done
                    </span>
                  )}
                </div>

                <p className={`text-xs mt-1 ${isDone ? 'text-slate-400' : 'text-slate-600'}`}>
                  {task.subtext}
                </p>

                {task.relatedChapterId && (
                  <button
                    onClick={() => handleNavigateChapter(task.relatedChapterId)}
                    className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
                  >
                    <BookOpen className="w-3 h-3" />
                    Open relevant instructions
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {progressPct === 100 && (
        <div className="mt-8 p-6 bg-teal-50 border border-teal-200 rounded-2xl text-center flex flex-col items-center justify-center animate-in zoom-in-95 duration-200">
          <Award className="w-10 h-10 text-teal-600 mb-2" />
          <h3 className="font-extrabold text-slate-900 text-lg">Great work! All {selectedFreq} tasks completed</h3>
          <p className="text-xs text-slate-600 mt-1 max-w-md">
            Your Falgoon Nursery systems are primed and operating smoothly.
          </p>
        </div>
      )}
    </div>
  );
};
