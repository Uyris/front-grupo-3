import React, { useState, useEffect } from "react";
import "./styles/QuestionCard.css";

function QuestionCard({
  questionTitle,
  questionDescription,
  codeSnippet,
  questionText,
  options,
  correctIndex,
  explanation,
  localStorageKey,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Carrega resposta do localStorage (se existir)
  useEffect(() => {
    if (localStorageKey) {
      const saved = localStorage.getItem(localStorageKey);
      if (saved !== null) {
        const parsed = parseInt(saved, 10);
        setSelectedOption(parsed);
        setIsCorrect(parsed === correctIndex);
        setSubmitted(true);
      }
    }
  }, [localStorageKey, correctIndex]);

  // Marca uma opção
  const handleSelectOption = (index) => {
    if (!submitted) {
      setSelectedOption(index);
    }
  };

  // Envia resposta
  const handleSubmit = () => {
    if (selectedOption !== null) {
      const result = selectedOption === correctIndex;
      setIsCorrect(result);
      setSubmitted(true);
      // Salva no localStorage
      if (localStorageKey) {
        localStorage.setItem(localStorageKey, selectedOption);
      }
    }
  };

  // Refazer
  const handleRetry = () => {
    setSelectedOption(null);
    setSubmitted(false);
    setIsCorrect(false);
    if (localStorageKey) {
      localStorage.removeItem(localStorageKey);
    }
  };

  // Define a classe de estilo para cada opção
  const getAnswerClass = (index) => {
    // Antes de enviar:
    if (!submitted) {
      // Se a opção está selecionada, fica com borda azul
      return index === selectedOption
        ? "question-answer selected-answer"
        : "question-answer";
    } else {
      // Após envio, só destacamos a opção selecionada (certa ou errada)
      if (index === selectedOption) {
        return index === correctIndex
          ? "question-answer correct-answer"
          : "question-answer incorrect-answer";
      } else {
        // As não escolhidas ficam "neutras"
        return "question-answer";
      }
    }
  };

  // Função para definir a classe da letra
  const getAnswerLetterClass = (index) => {
    // Antes de enviar:
    if (!submitted) {
      // Se ainda não enviou, apenas destaque se for a opção selecionada
      return index === selectedOption
        ? "answer-letter selected-letter"
        : "answer-letter";
    } else {
      // Após enviar:
      if (index === selectedOption) {
        // Se é a escolhida, verifica se é correta ou incorreta
        if (index === correctIndex) {
          return "answer-letter correct-letter";
        } else {
          return "answer-letter incorrect-letter";
        }
      } else {
        // Se não foi escolhida, continua com a classe padrão
        return "answer-letter";
      }
    }
  };

  // Ícone de certo/errado apenas para a opção escolhida, após envio
  const getAnswerIcon = (index) => {
    if (!submitted) return null;
    if (index === selectedOption) {
      if (index === correctIndex) {
        return <span className="icon-check">✓</span>;
      } else {
        return <span className="icon-x">✗</span>;
      }
    }
    return null;
  };

  // Retorna a letra da alternativa (A, B, C, D...)
  const getLetter = (index) => {
    return String.fromCharCode(65 + index);
  };

  return (
    <div className="question-card">
      <h1 className="question-title">{questionTitle}</h1>
      <p className="question-description">{questionDescription}</p>

      {codeSnippet && <pre className="question-code">{codeSnippet}</pre>}

      <p className="question-text">{questionText}</p>

      {/* Opções */}
      <div className="question-answers">
        {options?.map((opt, index) => (
          <div
            key={index}
            className={getAnswerClass(index)}
            onClick={() => handleSelectOption(index)}
          >
            {/* Letra da alternativa com fundo colorido */}
            <span className={getAnswerLetterClass(index)}>
              {getLetter(index)}
            </span>

            {/* Ícone (só aparece na escolhida, após envio) */}
            {getAnswerIcon(index)}

            {/* Texto da alternativa */}
            <span className="answer-text">{opt}</span>
          </div>
        ))}
      </div>

      {/* Botão Enviar (some depois de enviado) */}
      {!submitted && (
        <div style={{ textAlign: "right" }}>
          <button className="btn-submit" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      )}

      {/* Feedback e explicação */}
      {submitted && (
        <div
          className={`question-feedback ${isCorrect ? "correct" : "incorrect"}`}
        >
          {isCorrect ? (
            <h2 style={{ color: "green" }}>Você acertou! Parabéns.</h2>
          ) : (
            <h2 style={{ color: "red" }}>
              Resposta incorreta. Tente novamente!
            </h2>
          )}
          <p>{explanation}</p>
          <button className="btn-refazer" onClick={handleRetry}>
            Refazer
          </button>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;
