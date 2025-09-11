import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import { RemoteComponentWrapper } from "./components/RemoteComponentWrapper";

function App() {
  return (
    <div className="px-6 border-4 border-purple-500 rounded-xl bg-purple-50 shadow-lg">
      <div className="flex justify-center items-center mb-4">
        <img src={viteLogo} alt="Host Logo" className="w-20 h-20" />
      </div>
      <h1 className="text-3xl font-bold text-purple-700">
        🏠 Host Application
      </h1>
      <p className="text-gray-700 mb-4">
        This is the <span className="font-semibold">Host app</span>. Below you
        can see components fetched from the{" "}
        <span className="text-blue-600">Remote app</span>.
      </p>

      <RemoteComponentWrapper />
    </div>
  );
}

export default App;
