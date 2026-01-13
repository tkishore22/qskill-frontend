import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Translator from "./pages/Translator";
import RandomString from "./pages/RandomString";

function App() {
  return (
    <BrowserRouter>
      <div className="p-6 bg-gray-100 min-h-screen">
        <nav className="mb-6 space-x-4">
          <Link to="/translator" className="text-blue-600">
            Translator
          </Link>
          <Link to="/random" className="text-blue-600">
            Random String
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Translator />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/random" element={<RandomString />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
