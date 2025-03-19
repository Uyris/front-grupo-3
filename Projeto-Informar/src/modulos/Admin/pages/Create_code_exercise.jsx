import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react"; // Importando o Monaco Editor

class CreateExercisePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      type: "multiple_choice",
      options: ["", "", "", ""],
      answer: "",
      difficulty: "easy",
      testCode: "",
      releaseDate: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      question,
      type,
      options,
      answer,
      difficulty,
      testCode,
      releaseDate,
    } = this.state;

    // Monta o objeto de dados de exercício a ser enviado para o backend
    const exerciseData = {
      question,
      type,
      options:
        type === "multiple_choice"
          ? options.filter((option) => option.trim() !== "")
          : null, // Filtra as opções vazias
      answer: type === "multiple_choice" ? answer : "", // Só envia a resposta se for tipo múltipla escolha
      difficulty,
      test_code: type === "coding" ? testCode : null, // Envia código de teste apenas se for 'coding'
      release_date: releaseDate,
    };
    console.log(exerciseData);
    try {
      const response = await fetch(
        "https://back-grupo-3.vercel.app/exercicios",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(exerciseData), // Envia o JSON corretamente
        }
      );

      if (response.ok) {
        alert("Exercício criado com sucesso!");
      } else {
        alert("Erro ao criar exercício");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  render() {
    const {
      question,
      type,
      options,
      answer,
      difficulty,
      testCode,
      releaseDate,
    } = this.state;

    return (
      <div className="create-exercise-container">
        <h1>Criar Exercício</h1>
        <form className="exercise-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Pergunta:</label>
            <textarea
              className="input-field"
              value={question}
              onChange={(e) => this.setState({ question: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Tipo:</label>
            <select
              className="input-field"
              value={type}
              onChange={(e) => this.setState({ type: e.target.value })}
            >
              <option value="multiple_choice">Múltipla Escolha</option>
              <option value="coding">Código</option>
            </select>
          </div>

          {type === "multiple_choice" &&
            options.map((option, index) => (
              <div className="form-group" key={index}>
                <input
                  className="input-field"
                  type="text"
                  placeholder={`Opção ${index + 1}`}
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[index] = e.target.value;
                    this.setState({ options: newOptions });
                  }}
                />
              </div>
            ))}

          {/* Mostrar o campo de resposta apenas se o tipo for múltipla escolha */}
          {type === "multiple_choice" && (
            <div className="form-group">
              <label>Resposta correta:</label>
              <input
                className="input-field"
                type="text"
                value={answer}
                onChange={(e) => this.setState({ answer: e.target.value })}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Dificuldade:</label>
            <select
              className="input-field"
              value={difficulty}
              onChange={(e) => this.setState({ difficulty: e.target.value })}
            >
              <option value="easy">Fácil</option>
              <option value="medium">Médio</option>
              <option value="hard">Difícil</option>
            </select>
          </div>

          {type === "coding" && (
            <div className="form-group">
              <label>Código de Teste:</label>
              <MonacoEditor
                className="monaco-editor"
                height="400px"
                language="python"
                value={testCode}
                onChange={(newValue) => this.setState({ testCode: newValue })}
                theme="vs-dark"
                options={{
                  selectOnLineNumbers: true,
                  minimap: { enabled: false },
                }}
              />
            </div>
          )}

          <div className="form-group">
            <label>Data de Liberação:</label>
            <input
              className="input-field"
              type="datetime-local"
              value={releaseDate}
              onChange={(e) => this.setState({ releaseDate: e.target.value })}
              required
            />
          </div>

          <button className="submit-button" type="submit">
            Criar Exercício
          </button>
        </form>
      </div>
    );
  }
}

export default CreateExercisePage;
