'use client';

import { useState } from 'react';
import { TopicSelector } from './TopicSelector';
import { Chat } from './Chat';

export default function Canvas() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-full">
      {!activeTopic ? (
        <TopicSelector onSelectTopic={(topic) => setActiveTopic(topic)} />
      ) : (
        <Chat
          id={activeTopic}
          initialMessages={[]}
          initialChatModel="default-model"
          autoResume={true}
          onBack={() => setActiveTopic(null)}
        />
      )}
    </div>
  );
}
