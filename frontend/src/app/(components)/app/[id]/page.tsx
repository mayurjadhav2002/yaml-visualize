'use client'
import React, { useEffect, Suspense } from "react";
import Navbar from "../../Navbar/navbar";
import './index.css';
import Submenu from "./submenu";
import GetProject from "@/app/Axios/Requests/GetProject";
import Head from "next/head";
import { ReactFlowFunction } from "./reactFlow";

export default function Page({ params }: { params: { id: string } }) {
  const { project, loading, getData } = GetProject("?unique_key=" + params.id);
  const data = {
    nodes: project?.data?.nodes || [],
    edges: project?.data?.edges || []
  }

  useEffect(() => {
    if (project?.data?.project_name) {
      document.title = project.data.project_name;
    } else {
      document.title = "Application"; // Set a default title if project data doesn't have it
    }
  }, [project]);
  return (
    <div>
      <Head>
        <title>{project?.data?.project_name || "Application"}</title>
      </Head>
      <div className="w-full h-screen">
        <div className="z-10 absolute w-full">
          <Navbar />
          <Submenu id={params.id} projectData={project?.data} />
        </div>
        <div className="z-0 w-screen h-screen">
          {loading ? (
            <div className="bg-gray-50 h-screen ">
              <h1 className="text-4xl text-center ">Loading</h1>
            </div>
          ) : (
            <Suspense fallback={<p>Loading feed...</p>}>

            <ReactFlowFunction data={data} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}
