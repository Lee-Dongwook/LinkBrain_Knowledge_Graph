"use client";

import {
  ReactFlow,
  Controls,
  Background,
  MiniMap,
  Handle,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export const nodes = [
  {
    id: "AI",
    type: "mainNode",
    position: { x: 0, y: 0 },
    data: { label: "AI(인공지능)" },
  },
  {
    id: "overview",
    type: "branchNode",
    position: { x: -300, y: 100 },
    data: { label: "AI 개요" },
  },
  {
    id: "tech",
    type: "branchNode",
    position: { x: 300, y: 100 },
    data: { label: "AI 주요 기술" },
  },
  {
    id: "type1",
    type: "branchNode",
    position: { x: -300, y: 200 },
    data: { label: "인공지능의 유형" },
  },
  {
    id: "type2",
    type: "branchNode",
    position: { x: 300, y: 200 },
    data: { label: "인공지능의 유형" },
  },
  {
    id: "ani1",
    type: "cardNode",
    position: { x: -600, y: 300 },
    data: {
      title: "약인공지능(ANI)",
      keywords: ["#키워드1", "#키워드2", "#키워드3"],
    },
  },
  {
    id: "ani2",
    type: "cardNode",
    position: { x: -450, y: 400 },
    data: {
      title: "약인공지능(ANI)",
      keywords: ["#키워드1", "#키워드2", "#키워드3"],
    },
  },
  {
    id: "ani3",
    type: "cardNode",
    position: { x: -300, y: 500 },
    data: {
      title: "약인공지능(ANI)",
      keywords: ["#키워드1", "#키워드2", "#키워드3"],
    },
  },
  {
    id: "ani4",
    type: "cardNode",
    position: { x: 300, y: 300 },
    data: {
      title: "약인공지능(ANI)",
      keywords: ["#키워드1", "#키워드2", "#키워드3"],
    },
  },
];

export const edges = [
  { id: "e1", source: "AI", target: "overview", label: "포함 관계" },
  { id: "e2", source: "AI", target: "tech", label: "포함 관계" },
  { id: "e3", source: "overview", target: "type1" },
  { id: "e4", source: "tech", target: "type2" },

  { id: "e5", source: "type1", target: "ani1", label: "포함 관계" },
  { id: "e6", source: "type1", target: "ani2", label: "기능/역할 관계" },
  { id: "e7", source: "type1", target: "ani3", label: "종속/세부 관계" },
  { id: "e8", source: "type2", target: "ani4", label: "포함 관계" },
];

const nodeTypes = {
  mainNode: ({ data }: { data: any }) => (
    <div
      style={{
        borderRadius: "0.5rem",
        backgroundColor: "#2c4ddb",
        padding: "0.5rem 1rem",
        fontWeight: 700,
        color: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      {data.label}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  ),
  branchNode: ({ data }: { data: any }) => (
    <div
      style={{
        borderRadius: "0.375rem",
        backgroundColor: "#a5b4fc",
        padding: "0.25rem 0.75rem",
        fontWeight: 600,
        color: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      {data.label}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  ),
  cardNode: ({ data }: { data: any }) => (
    <div
      style={{
        width: "14rem",
        borderRadius: "0.375rem",
        border: "1px solid #e5e7eb",
        backgroundColor: "white",
        padding: "0.75rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          marginBottom: "0.25rem",
          fontWeight: 700,
          fontSize: "0.875rem",
        }}
      >
        {data.title}
        <Handle type="target" position={Position.Top} />
        <Handle type="source" position={Position.Bottom} />
      </div>
      <p
        style={{
          marginBottom: "0.5rem",
          fontSize: "0.75rem",
          color: "#4b5563",
        }}
      >
        해당 제품 관련 3줄 요약이 삽입됩니다...
      </p>
      <div style={{ fontSize: "0.625rem", color: "#8b5cf6" }}>
        {data.keywords?.join(" ")}
      </div>
    </div>
  ),
};

export const Flow = () => {
  return (
    <div style={{ width: "100%", height: "600px" }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};
