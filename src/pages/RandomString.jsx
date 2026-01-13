import { useState, useEffect, useCallback } from "react";

function RandomString() {
  const [text, setText] = useState("");

  const generateString = useCallback(() => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";

    for (let i = 0; i < 8; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }

    setText(result);
  }, []);

  useEffect(() => {
    generateString();
  }, [generateString]);

  return (
    <div className="bg-white p-6 rounded shadow w-fit">
      <h2 className="text-xl font-semibold mb-3">
        Random String Generator
      </h2>

      <p className="mb-3 text-lg">{text}</p>

      <button
        onClick={generateString}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Generate
      </button>
    </div>
  );
}

export default RandomString;
