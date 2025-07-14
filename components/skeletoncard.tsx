import { useEffect, useState } from "react";
import Image from "next/image";

export default function SkeletonCard() {
  const [loading, setLoading] = useState(true);

  // Function to simulate API call and loading
  const simulateLoading = () => {
    setLoading(true); // Reset to loading state
    const timer = setTimeout(() => setLoading(false), 3000); // Simulate API delay
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    simulateLoading(); // Start loading when component mounts
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto p-4 border border-white/20 rounded-2xl bg-neutral-900 text-white shadow-lg h-[500px]">
      <div className="w-full h-full flex flex-col">
        {loading ? (
          <div className="animate-pulse flex flex-col h-full">
            <div className="flex-grow space-y-4">
              <div className="h-48 bg-white/10 rounded-lg w-full" />    {/* Image */}
              <div className="py-4 h-4 bg-white/10 rounded-lg w-1/2" />    {/* Title */}
              <div className="py-4 h-14 bg-white/10 rounded-lg w-full" />    {/* Copy */}
              <div className="py-4 h-14 bg-white/10 rounded-lg w-full" />    {/* Copy */}
            </div>
            <div className="mt-auto">
              <div className="h-10 bg-white/10 rounded-lg w-full" />    {/* Button */}
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex-grow space-y-4">
              <Image
                src="/ESBV.jpg"
                alt="Example Content"
                width={400}
                height={300}
                className="h-48 w-full object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold">useState & useEffect</h3>
              <p className="text-sm text-white/50">
              By using Tailwind CSS's animate-pulse class instead of a skeleton loading 
              library, the build stays lightweight and fully customizable.
              </p>
              <p className="text-sm text-white/50">
                By clicking the button below, you can simulate an API call and 
                watch the skeleton placeholders animate (3s) before the content appears.
              </p>
            </div>
            <button
              onClick={simulateLoading}
              className="mt-auto px-4 py-2 border border-white/20 hover:border-white/10 
              hover:bg-white/10 hover:scale-95 rounded-xl transition"
            >
              Reload
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
