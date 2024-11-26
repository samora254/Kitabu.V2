import React from 'react';
import { LessonSection } from './LessonSection';

interface Section {
  id: number;
  title: string;
  content: string;
  isCompleted: boolean;
}

interface LessonCardProps {
  id: number;
  title: string;
  sections: Section[];
  isLocked?: boolean;
  expandedSection: number | null;
  onToggleSection: (id: number) => void;
  onMarkComplete: (lessonId: number, sectionId: number) => void;
}

export const LessonCard: React.FC<LessonCardProps> = ({
  id,
  title,
  sections,
  isLocked,
  expandedSection,
  onToggleSection,
  onMarkComplete
}) => {
  const calculateProgress = () => {
    const completedSections = sections.filter(section => section.isCompleted).length;
    return (completedSections / sections.length) * 100;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex-1">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${calculateProgress()}%` }}
            />
          </div>
        </div>
        {isLocked && <span className="text-xl ml-4">🔒</span>}
      </div>

      {!isLocked && (
        <div className="space-y-4">
          {sections.map(section => (
            <LessonSection
              key={section.id}
              {...section}
              isExpanded={expandedSection === section.id}
              onToggle={onToggleSection}
              onComplete={() => onMarkComplete(id, section.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};