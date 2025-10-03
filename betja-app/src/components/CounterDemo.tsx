import { useState, useEffect } from "react";

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: (value: number) => void;
}

export const CounterDemo = () => {
  const [hookModule, setHookModule] = useState<{
    useCounter: (initialValue?: number) => UseCounterReturn;
  } | null>(null);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dynamically import the hook from the component library
    import("component_library/useCounter")
      .then((module) => {
        setHookModule(module);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load useCounter hook:", error);
        setIsLoading(false);
      });
  }, []);

  // Use the hook once it's loaded, fallback to local state
  const counter = hookModule?.useCounter?.(0) || {
    count,
    increment: () => setCount((prev) => prev + 1),
    decrement: () => setCount((prev) => prev - 1),
    reset: () => setCount(0),
  };

  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-200">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading counter hook...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-200">
      <h3 className="text-xl font-semibold text-blue-700 mb-4">
        Custom Hook Demo: useCounter
      </h3>
      <p className="text-gray-600 mb-4">
        This demonstrates how custom hooks can be shared via micro frontends!
      </p>

      <div className="space-y-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {counter.count}
          </div>
          <p className="text-sm text-gray-500">Current Count</p>
        </div>

        <div className="flex gap-2 justify-center">
          <button
            onClick={counter.decrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            -
          </button>
          <button
            onClick={counter.reset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={counter.increment}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            +
          </button>
        </div>

        <div className="text-xs text-gray-400 text-center">
          Hook shared from component-library via Module Federation
        </div>
      </div>
    </div>
  );
};
