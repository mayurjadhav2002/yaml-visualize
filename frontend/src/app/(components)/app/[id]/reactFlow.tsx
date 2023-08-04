'use client'
import React, { useState } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  getOutgoers,
  Background,
  getConnectedEdges,
  MiniMap,
  Controls
} from "reactflow";
import dagre from "dagre";
import "reactflow/dist/style.css";
// import "./index.css";

export const ReactFlowFunction = () => {
  const position = { x: 0, y: 0 };
  const initialNodes = [
    {
      id: '1',
      
      data: { label: 'My Entity' },
     position: { x: 0, y: 0 }
    },
    {
      id: '2',
      
      data: { label: 'MARKET' },
      position: { x: 0, y: 0 }

    },
    {
      id: '3',
      
      data: { label: 'Sales' },
      position: { x: 0, y: 0 }

    },
    {
      id: '4',
      
      data: { label: 'District 1' },
      position: { x: 0, y: 0 }

    },
    {
      id: '5',
      
      data: { label: 'Area 1' },
     position
    },
    {
      id: '6',
      
      data: { label: 'Mumbai' },
     position
    },
    {
      id: '7',
      
      data: { label: 'Hyderabad' },
     position
    },
    {
      id: '8',
      
      data: { label: 'Area 2' },
     position
    },
    {
      id: '9',
      
      data: { label: 'Karnataka' },
     position
    },
    {
      id: '10',
      
      data: { label: 'Andhra Pradesh' },
     position
    }
  ];  

  const initialEdges =[
    { id: '1->2', source: '1', target: '2' },
    { id: '2->3', source: '2', target: '3' },
    { id: '3->4', source: '3', target: '4' },
    { id: '4->5', source: '4', target: '5' },
    { id: '5->6', source: '5', target: '6' },
    { id: '5->7', source: '5', target: '7' },
    { id: '4->8', source: '4', target: '8' },
    { id: '8->9', source: '8', target: '9' },
    { id: '8->10', source: '8', target: '10' }
  ]

  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const nodeWidth = 172;
  const nodeHeight = 36;

  const getLayoutedElements = (nodes, edges, direction = "LR") => {
    const isHorizontal = direction === "LR";
    dagreGraph.setGraph({ rankdir: direction });

    nodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });

    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      node.targetPosition = isHorizontal ? "left" : "top";
      node.sourcePosition = isHorizontal ? "right" : "bottom";

      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      node.position = {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2
      };

      return node;
    });

    return { nodes, edges };
  };

  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    initialNodes,
    initialEdges
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
  const [hidden, setHidden] = useState(true);
  

  const hide = (hidden, childEdgeID, childNodeID) => (nodeOrEdge) => {
    if (
      childEdgeID.includes(nodeOrEdge.id) ||
      childNodeID.includes(nodeOrEdge.id)
    )
      nodeOrEdge.hidden = hidden;
    return nodeOrEdge;
  };

  const checkTarget = (edge, id) => {
    let edges = edge.filter((ed) => {
      return ed.target !== id;
    });
    return edges;
  };

  let outgoers = [];
  let connectedEdges = [];
  let stack = [];

  const nodeClick = (some, node) => {
    let currentNodeID = node.id;
    stack.push(node);
    while (stack.length > 0) {
      let lastNOde = stack.pop();
      let childnode = getOutgoers(lastNOde, nodes, edges);
      let childedge = checkTarget(
        getConnectedEdges([lastNOde], edges),
        currentNodeID
      );
      childnode.map((goer, key) => {
        stack.push(goer);
        outgoers.push(goer);
      });
      childedge.map((edge, key) => {
        connectedEdges.push(edge);
      });
    }

    let childNodeID = outgoers.map((node) => {
      return node.id;
    });
    let childEdgeID = connectedEdges.map((edge) => {
      return edge.id;
    });

    setNodes((node) => node.map(hide(hidden, childEdgeID, childNodeID)));
    setEdges((edge) => edge.map(hide(hidden, childEdgeID, childNodeID)));
    setHidden(!hidden);
  };


  return (
    <div className="layoutflow" style={{ height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={(connection) => setEdges([...edges, connection])} // Update edges on connect

        nodesDraggable={true}
        zoomOnScroll={true}
        onNodeClick={nodeClick}
        zoomOnPinch={true}
        zoomOnDoubleClick={true}
        attributionPosition="bottom-right"
        
      >
         <MiniMap  zoomable pannable />
      <Controls />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};
