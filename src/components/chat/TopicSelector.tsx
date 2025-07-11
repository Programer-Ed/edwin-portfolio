'use client';

import { useState } from 'react';
import { Chat } from './Chat';

const TOPICS = [
  "Anime",
  "Skills",
  "Experience",
  "Elevator-pitch",
  "Education",
];

export default function TopicSelector() {
  const [activeTopic, setActiveTopic] = useState<string>("Anime"); // default topic

  return (
    <div className="flex flex-col h-full">
      {/* Topic Selector */}
      <div className="flex flex-wrap gap-2 p-4 border-b border-gray-200 dark:border-gray-700">
        {TOPICS.map((topic) => (
          <button
            key={topic}
            onClick={() => setActiveTopic(topic)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
              ${
                activeTopic === topic
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-700"
              }`}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Chat UI */}
      <div className="flex-1 overflow-y-auto">
        <Chat
          id={activeTopic} // pass the actual Google Doc name
          initialMessages={[]}
          initialChatModel="default-model"
          autoResume
        />
      </div>
    </div>
  );
}
