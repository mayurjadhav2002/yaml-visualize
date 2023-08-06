import React from 'react';

function Loading() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className="loadingio-spinner-dual-ball-5ly6k3sfvvn">
        <div className="ldio-dls5ybp86z8">
          <div></div><div></div><div></div>
        </div>
      </div>
      <p className="mt-4 text-center text-2xl text-white bg-gradient-to-r from-blue-700 to-green-700 px-4 py-2 rounded-md">
        Redirecting to the Visualizer
      </p>
    </div>
  );
}

export default Loading;
