import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <div className="px-6 border-4 border-blue-500 rounded-xl bg-blue-50 shadow-lg">
      <div className="flex justify-center items-center mb-4">
        <img src={viteLogo} alt="Remote Logo" className="w-20 h-20" />
      </div>
      <h1 className="text-3xl font-bold text-blue-700">
        🚀 Remote Application
      </h1>
      <p className="text-gray-700 mb-4">
        This is the <span className="font-semibold">Remote app</span>. It serves
        components to the <span className="text-purple-600">Host app</span>.
      </p>

      <div className="space-y-4">
        <Header />
        <Button text="Click Me (from Remote)" />
      </div>
    </div>
  );
}

export default App;
