import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import { SignUpShell } from "signup-shell";

function App() {
  return (
    <div className="px-6 border-4 border-purple-500 rounded-xl bg-purple-50 shadow-lg m-20">
      <div className="flex flex-col justify-center items-center mb-4">
        <img src={viteLogo} alt="Host Logo" className="w-20 h-20" />

        <h1 className="text-3xl font-bold text-purple-700">🏠 Betja</h1>
        <p className="text-gray-700 mb-4">
          This is a test betja project installing the signup-shell package from
          npm
        </p>
        <SignUpShell isOpen={true} onClose={() => {}} mode="multi" />
      </div>
    </div>
  );
}

export default App;
