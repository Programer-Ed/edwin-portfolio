// 'use client';

// import type { UIMessage } from 'ai';
// import { useChat } from '@ai-sdk/react';
// import { useEffect, useState } from 'react';
// import { generateUUID } from '@/lib/utils';
// import { MultimodalInput } from './multimodalinput';
// import { Messages } from './messages';
// import { toast } from "sonner"
// import { useSearchParams } from 'next/navigation';

// export function Chat({
//   id,
//   initialMessages,
//   initialChatModel,
//   autoResume,
// }: {
//   id: string;
//   initialMessages: Array<UIMessage>;
//   initialChatModel: string;
//   autoResume: boolean;
// }) {

//   const {
//     messages,
//     handleSubmit,
//     input,
//     setInput,
//     setMessages,
//     append,
//     status,
//     stop,
//     experimental_resume,
//   } = useChat({
//     id,
//     initialMessages,
//     experimental_throttle: 100,
//     sendExtraMessageFields: true,
//     generateId: generateUUID,
//     experimental_prepareRequestBody: (body) => ({
//       id,
//       message: body.messages.at(-1),
//       selectedChatModel: initialChatModel,
//     }),
//     // onFinish: () => {
//     // },
//     onError: (error) => {
//       toast.error(error.message)
//     },
//   });

//   useEffect(() => {
//     if (autoResume) {
//       experimental_resume();
//     }

//     // note: this hook has no dependencies since it only needs to run once
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const searchParams = useSearchParams();
//   const query = searchParams.get('query');

//   const [hasAppendedQuery, setHasAppendedQuery] = useState(false);

//   useEffect(() => {
//     if (query && !hasAppendedQuery) {
//       append({
//         role: 'user',
//         content: query,
//       });

//       setHasAppendedQuery(true);
//       // window.history.replaceState({}, '', `/chat/${id}`);
//     }
//   }, [query, append, hasAppendedQuery, id]);

//   return (
//     <div className='relative'>
//       <div className="flex flex-col h-full">
//         <Messages
//           chatId={id}
//           status={status}
//           messages={messages}
//         />

//         <form className="flex mx-auto bg-transparent gap-2 fixed bottom-4 left-4 right-4">
//           <MultimodalInput
//               chatId={id}
//               input={input}
//               setInput={setInput}
//               handleSubmit={handleSubmit}
//               status={status}
//               stop={stop}
//               messages={messages}
//               setMessages={setMessages}
//               append={append}
//             />
//         </form>
//       </div>
//     </div>
//   );
// }

'use client';

import type { UIMessage } from 'ai';
import { useChat } from '@ai-sdk/react';
import { useEffect, useState } from 'react';
import { generateUUID } from '@/lib/utils';
import { MultimodalInput } from './multimodalinput';
import { Messages } from './messages';
import { toast } from 'sonner';

export function Chat({
  id,
  initialMessages,
  initialChatModel,
  autoResume,
  onBack,
}: {
  id: string;
  initialMessages: Array<UIMessage>;
  initialChatModel: string;
  autoResume: boolean;
  onBack?: () => void; // optional callback to exit chat
}) {
  const {
    messages,
    handleSubmit,
    input,
    setInput,
    setMessages,
    append,
    status,
    stop,
    experimental_resume,
  } = useChat({
    id,
    initialMessages,
    experimental_throttle: 100,
    sendExtraMessageFields: true,
    generateId: generateUUID,
    experimental_prepareRequestBody: (body) => ({
      id,
      message: body.messages.at(-1),
      selectedChatModel: initialChatModel,
    }),
    onError: (error) => {
      toast.error(error.message);
    },
  });

  useEffect(() => {
    if (autoResume) {
      experimental_resume();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <Messages chatId={id} status={status} messages={messages} />
      </div>

      <div className="flex mx-auto bg-transparent gap-2 fixed bottom-4 left-4 right-4">
        <MultimodalInput
          chatId={id}
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          status={status}
          stop={stop}
          messages={messages}
          setMessages={setMessages}
          append={append}
        />
      </div>

      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-2 left-2 px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
        >
          ← Back
        </button>
      )}
    </div>
  );
}
