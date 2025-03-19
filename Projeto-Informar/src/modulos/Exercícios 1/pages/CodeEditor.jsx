import React, { useState, useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";

const CodeEditor = ({ exerciseId }) => {
  const [code, setCode] = useState("");
  const [testResults, setTestResults] = useState("");
  const [result, setResult] = useState(null);
  const [testId, setTestId] = useState(null); // Estado para o test_id do exercício

  // Função para lidar com mudanças no código
  const handleEditorChange = (value) => {
    setCode(value);
  };

  // Função para pegar o exercício e o test_id do backend
  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const response = await fetch(
          `https://back-grupo-3.vercel.app/exercicios/${exerciseId}`
        );
        const exercise = await response.json();

        // Pegue o test_id associado ao exercício
        if (exercise && exercise.id) {
          setTestId(exercise.id);
        } else {
          console.error("Test ID não encontrado para este exercício");
        }
      } catch (error) {
        console.error("Error ao buscar exercício:", error);
      }
    };

    fetchExercise();
  }, [exerciseId]); // Dependência para recarregar sempre que o exerciseId mudar

  // Função para enviar o código para o backend
  const submitCode = async () => {
    try {
      const response = await fetch("https://back-grupo-3.vercel.app/run-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: code }), // Enviando o código para o backend
      });

      const result = await response.json();
      setResult(result); // Aqui você pode armazenar o resultado e exibir
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Função para rodar os testes
  const runTests = async () => {
    if (!testId) {
      console.error("Test ID não encontrado.");
      return;
    }

    try {
      const response = await fetch(
        "https://back-grupo-3.vercel.app/run-tests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code: code, test_id: testId }), // Enviando o código e test_id para o backend
        }
      );

      const result = await response.json();
      setTestResults(result.test_feedback); // Armazenando o feedback dos testes
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <h2>Escreva seu código</h2>
      <MonacoEditor
        height="350px" // Aumentei de 400px para 500px
        language="python"
        value={code}
        onChange={handleEditorChange}
        className="codespace"
        theme="vs-dark"
        options={{ minimap: { enabled: false } }}
      />
      <div className="terminal_buttons_div">
        <button onClick={submitCode} className="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#e3e3e3"
          >
            <path d="M320-202v-560l440 280-440 280Zm66.67-280Zm0 158.67L636-482 386.67-640.67v317.34Z" />
          </svg>
        </button>
        <button onClick={runTests} className="button">
          Testar Código
        </button>
      </div>
      {result && (
        <div className="results-panel">
          <h3>Terminal</h3>
          {/* Exibe o output apenas se não houver erro */}
          {result.error
            ? null
            : result.output && (
                <pre className="program-output">{result.output}</pre>
              )}
          {result.error && <pre>{result.error}</pre>}
        </div>
      )}
      <div className="results-panel">
        <h3>Resultado dos Testes</h3>
        <pre className="test-feedback">{testResults}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;
