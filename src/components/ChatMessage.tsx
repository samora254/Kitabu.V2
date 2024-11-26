import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ role, content }) => {
  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[80%] rounded-lg p-4 ${
          role === 'user'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-800'
        }`}
      >
        <ReactMarkdown
          className="prose prose-sm max-w-none"
          components={{
            p: ({ children }) => <p className="m-0">{children}</p>,
            pre: ({ children }) => (
              <pre className="bg-gray-800 text-white p-2 rounded mt-2 overflow-x-auto">
                {children}
              </pre>
            ),
            code: ({ children }) => (
              <code className="bg-gray-800 text-white px-1 rounded">{children}</code>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};