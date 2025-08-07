"use client";
import { useChat } from "@ai-sdk/react";
import { useEffect, useRef } from "react";

export type DataStreamDelta = {
  type:
    | "text-delta"
    | "code-delta"
    | "sheet-delta"
    | "image-delta"
    | "title"
    | "id"
    | "suggestion"
    | "clear"
    | "finish"
    | "kind";
  content: string;
};

export function useStreamHandler(id: string) {
  const { data: dataStream } = useChat({ id });
  const lastIndex = useRef(-1);

  useEffect(() => {
    if (!dataStream?.length) return;
    const newDeltas = dataStream.slice(lastIndex.current + 1);
    lastIndex.current = dataStream.length - 1;

    (newDeltas as DataStreamDelta[]).forEach((delta) => {
      if (delta.type === "text-delta") {
        console.log("Stream update:", delta.content);
      }
    });
  }, [dataStream]);
}
