import React from 'react';
import { Globe } from 'lucide-react';

function LoadingScreen() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <Globe className="w-16 h-16 text-blue-500 animate-spin mx-auto mb-4" />
        <p className="text-white text-xl">Loading Earth...</p>
      </div>
    </div>
  );
}

export default LoadingScreen;