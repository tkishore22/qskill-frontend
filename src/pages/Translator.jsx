import { useState } from "react";

function Translator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const translateText = async () => {
    if (!input) return;

    try {
      const response = await fetch(
        "https://google-translate113.p.rapidapi.com/api/v1/translator/json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": "f3299b57a4msh7202f21132ecf42p14ablejsn3f3b25550578",
            "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
          },
          body: JSON.stringify({
            from: "en",
            to: "ta",
            json: {
              text: input,
            },
          }),
        }
      );

      const data = await response.json();

      // ✅ Correct response handling
      if (data && data.translated_text) {
        setOutput(data.translated_text);
      } else {
        setOutput("Translation failed (API limit or issue)");
      }
    } catch (error) {
      setOutput("Error while calling translation API");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-md">
      <h2 className="text-xl font-semibold mb-3">
        Text Translator
      </h2>

      <textarea
        className="border w-full p-2 mb-3"
        placeholder="Enter English text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={translateText}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Translate
      </button>

      {output && (
        <p className="mt-4">
          <strong>Output:</strong> {output}
        </p>
      )}
    </div>
  );
}

export default Translator;
