import React from 'react';
import { SubtopicCard } from './SubtopicCard';
import { ProgressBar } from './ProgressBar';

interface SubtopicListProps {
  subjectId: string;
  topicId: string;
  title: string;
  subtopics: Array<{
    id: string;
    title: string;
    content: string;
  }>;
  progress: number;
  onSubtopicSelect: (subtopicId: string) => void;
  onBack: () => void;
}

export const SubtopicList: React.FC<SubtopicListProps> = ({
  subjectId,
  topicId,
  title,
  subtopics,
  progress,
  onSubtopicSelect,
  onBack
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">{title}</h2>
        <button
          onClick={onBack}
          className="text-gray-600 hover:text-gray-800"
        >
          ← Back to Topics
        </button>
      </div>
      
      <ProgressBar progress={progress} />

      <div className="grid gap-4 mt-6">
        {subtopics.map(subtopic => (
          <SubtopicCard
            key={subtopic.id}
            subjectId={subjectId}
            topicId={topicId}
            subtopic={subtopic}
            onSelect={() => onSubtopicSelect(subtopic.id)}
          />
        ))}
      </div>
    </div>
  );
};