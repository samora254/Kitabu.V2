import React from 'react';
import { TopicCard } from './TopicCard';

interface TopicListProps {
  subjectId: string;
  topics: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  onTopicSelect: (topicId: string) => void;
}

export const TopicList: React.FC<TopicListProps> = ({
  subjectId,
  topics,
  onTopicSelect
}) => {
  return (
    <div className="space-y-4">
      {topics.map(topic => (
        <TopicCard
          key={topic.id}
          subjectId={subjectId}
          topic={topic}
          onClick={() => onTopicSelect(topic.id)}
        />
      ))}
    </div>
  );
};