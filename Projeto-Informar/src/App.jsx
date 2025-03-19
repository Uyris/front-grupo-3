import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./ScrollToTop";
import Home from "./modulos/Home/pages/Home";
import Sobre from "./modulos/Sobre/pages/Sobre";
import "./App.css";

//Págunas de Admin
import CreateExercisePage from "./modulos/Admin/pages/Create_code_exercise";

// Páginas de Aula-1
import InicioAula1 from "./modulos/Aula-1/pages/Inicio";
import Variaveis from "./modulos/Aula-1/pages/Variaveis";
import Operacoes from "./modulos/Aula-1/pages/Operacoes";
import Terminal from "./modulos/Aula-1/pages/Terminal";

// Páginas de Aula-2
import InicioAula2 from "./modulos/Aula-2/pages/Inicio";
import Condicionais from "./modulos/Aula-2/pages/Condicionais";

// Páginas de Aula-3
import InicioAula3 from "./modulos/Aula-3/pages/Inicio";
import Listas from "./modulos/Aula-3/pages/Listas";
import Strings from "./modulos/Aula-3/pages/Strings";

// Páginas de Aula-4
import InicioAula4 from "./modulos/Aula-4/pages/Inicio";
import While from "./modulos/Aula-4/pages/While";

// Páginas de Aula-5
import InicioAula5 from "./modulos/Aula-5/pages/Inicio";
import For from "./modulos/Aula-5/pages/For";

// Páginas de Aula-6
import InicioAula6 from "./modulos/Aula-6/pages/Inicio";
import Funcoes from "./modulos/Aula-6/pages/Funcoes";

//Páginas de Exercicios-1
import InicioExercicio1 from "./modulos/Exercícios 1/pages/Ex_soma";
import Ex_maximo from "./modulos/Exercícios 1/pages/Ex_maximo";
import Ex_area_do_triangulo from "./modulos/Exercícios 1/pages/Ex_area_do_triangulo";
import Ex_area_do_circulo from "./modulos/Exercícios 1/pages/Ex_area_do_circulo";
import Ex_inverte_string from "./modulos/Exercícios 1/pages/Ex_inverte_string";
import Ex_soma_positivos from "./modulos/Exercícios 1/pages/Ex_soma_positivos";

//Páginas de Exercícios-2
import Ex_media_negativos from "./modulos/Exercícios 2/pages/Ex_media_negativos";
import Ex_ordena_lista from "./modulos/Exercícios 2/pages/Ex_ordena_lista";
import Ex_conta_palavras from "./modulos/Exercícios 2/pages/Ex_conta_palavras";
import Ex_eh_primo from "./modulos/Exercícios 2/pages/Ex_eh_primo";
import Ex_celsius_para_fahrenheit from "./modulos/Exercícios 2/pages/Ex_coverte_para_fahrenheit";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <Routes>
            {/* Rota para Home */}
            <Route path="/" element={<Home />} />

            {/* Rota para Sobre */}
            <Route path="/sobre" element={<Sobre />} />

            {/* Rota para Admin */}
            <Route path="/admin/exercicios" element={<CreateExercisePage />} />

            {/* Rotas de Aula-1 */}
            <Route path="/aula-1/inicio" element={<InicioAula1 />} />
            <Route path="/aula-1/variaveis" element={<Variaveis />} />
            <Route path="/aula-1/operacoes" element={<Operacoes />} />
            <Route path="/aula-1/terminal" element={<Terminal />} />

            {/* Rotas de Aula-2 */}
            <Route path="/aula-2/inicio" element={<InicioAula2 />} />
            <Route path="/aula-2/condicionais" element={<Condicionais />} />

            {/* Rotas de Aula-3 */}
            <Route path="/aula-3/inicio" element={<InicioAula3 />} />
            <Route path="/aula-3/listas" element={<Listas />} />
            <Route path="/aula-3/strings" element={<Strings />} />

            {/* Rotas de Aula-4 */}
            <Route path="/aula-4/inicio" element={<InicioAula4 />} />
            <Route path="/aula-4/while" element={<While />} />

            {/* Rotas de Aula-5 */}
            <Route path="/aula-5/inicio" element={<InicioAula5 />} />
            <Route path="/aula-5/for" element={<For />} />

            {/* Rotas de Aula-6 */}
            <Route path="/aula-6/inicio" element={<InicioAula6 />} />
            <Route path="/aula-6/funcoes" element={<Funcoes />} />

            {/* Rotas de Exercícios 1*/}
            <Route path="/Exercicio-1/ex_soma" element={<InicioExercicio1 />} />
            <Route path="/Exercicio-1/ex_maximo" element={<Ex_maximo />} />
            <Route
              path="/Exercicio-1/ex_area_do_triangulo"
              element={<Ex_area_do_triangulo />}
            />
            <Route
              path="/Exercicio-1/ex_area_do_circulo"
              element={<Ex_area_do_circulo />}
            />
            <Route
              path="/Exercicio-1/ex_inverte_string"
              element={<Ex_inverte_string />}
            />
            <Route
              path="/Exercicio-1/ex_soma_positivos"
              element={<Ex_soma_positivos />}
            />

            {/* Rotas de Exercícios 2*/}
            <Route
              path="/Exercicio-2/ex_media_negativos"
              element={<Ex_media_negativos />}
            />
            <Route
              path="/Exercicio-2/ex_ordena_lista"
              element={<Ex_ordena_lista />}
            />
            <Route
              path="/Exercicio-2/ex_conta_palavras"
              element={<Ex_conta_palavras />}
            />
            <Route
              path="/Exercicio-2/ex_eh_primo"
              element={<Ex_eh_primo />}
            />
            <Route
              path="/Exercicio-2/ex_celsius_para_fahrenheit"
              element={<Ex_celsius_para_fahrenheit />}
            />

            {/* Adicione outras rotas conforme precisar */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
