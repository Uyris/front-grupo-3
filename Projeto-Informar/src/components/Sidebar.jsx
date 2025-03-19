import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import {
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
  Close as CloseIcon,
} from "@mui/icons-material";

import Logo from "../assets/Logo_gas.png";
import "../App.css";

export default function Sidebar() {
  // Estados para controlar o Drawer e os submenus
  const [open, setOpen] = useState(true);
  const [openAula1, setOpenAula1] = useState(false);
  const [openAula2, setOpenAula2] = useState(false);
  const [openAula3, setOpenAula3] = useState(false);
  const [openAula4, setOpenAula4] = useState(false);
  const [openAula5, setOpenAula5] = useState(false);
  const [openAula6, setOpenAula6] = useState(false);
  const [openExercicio1, setExercicio1] = useState(false);
  const [openExercicio2, setExercicio2] = useState(false);

  // Hooks para responsividade
  const theme = useTheme();
  // Se a tela for menor que 600px, o drawerWidth será 100vw; caso contrário, 300px.
  const isSmall = useMediaQuery("(max-width:600px)");
  const drawerWidth = isSmall ? "100vw" : 300;

  // Função para abrir/fechar o Drawer
  const toggleDrawer = () => setOpen(!open);

  // Função para fechar o Drawer (apenas se a tela for pequena)
  const handleNavClick = () => {
    if (isSmall) {
      setOpen(false);
    }
  };

  // Funções para alternar submenus
  const handleAula1Click = () => setOpenAula1(!openAula1);
  const handleAula2Click = () => setOpenAula2(!openAula2);
  const handleAula3Click = () => setOpenAula3(!openAula3);
  const handleAula4Click = () => setOpenAula4(!openAula4);
  const handleAula5Click = () => setOpenAula5(!openAula5);
  const handleAula6Click = () => setOpenAula6(!openAula6);
  const handleExercicio1Click = () => setExercicio1(!openExercicio1);
  const handleExercicio2Click = () => setExercicio2(!openExercicio2);

  // Estilo para o link ativo (vermelho)
  const activeStyle = { color: "red" };

  // Verifica se o pathname atual começa com a rota da aula ou exercício
  const location = useLocation();
  const isAula1Active = location.pathname.startsWith("/aula-1");
  const isAula2Active = location.pathname.startsWith("/aula-2");
  const isAula3Active = location.pathname.startsWith("/aula-3");
  const isAula4Active = location.pathname.startsWith("/aula-4");
  const isAula5Active = location.pathname.startsWith("/aula-5");
  const isAula6Active = location.pathname.startsWith("/aula-6");
  const isExercicio1Active = location.pathname.startsWith("/Exercicio-1");
  const isExercicio2Active = location.pathname.startsWith("/Exercicio-2");

  return (
    <>
      {/* TOPO FIXO: Logo + Botão */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#fff",
          borderBottom: "1px solid #ccc",
          px: 2,
        }}
      >
        {/* Botão para abrir/fechar */}
        <IconButton onClick={toggleDrawer} sx={{ mr: 1 }}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        {/* Logo ou título */}
        <Box component={NavLink} to="/" onClick={handleNavClick}>
          <Box
            component="img"
            src={Logo}
            alt="Informar GAS"
            sx={{ height: "80px" }}
          />
        </Box>
      </Box>

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer,
          "& .MuiDrawer-paper": {
            top: "100px", // logo fica no topo fixo
            height: "calc(100% - 100px)",
            width: drawerWidth,
            transition: "transform 0.3s ease-out",
            boxSizing: "border-box",
            overflowX: "hidden",
          },
        }}
      >
        {/* Lista de itens do menu */}
        <List>
          {/* HOME */}
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="/"
              onClick={handleNavClick}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItemText
                primaryTypographyProps={{
                  fontWeight: "bold",
                  paddingLeft: "36px",
                  paddingRight: "36px",
                }}
                primary="Home"
              />
            </ListItemButton>
          </ListItem>

          {/* SOBRE */}
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="/sobre"
              onClick={handleNavClick}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItemText
                primaryTypographyProps={{
                  fontWeight: "bold",
                  paddingLeft: "36px",
                  paddingRight: "36px",
                }}
                primary="Sobre"
              />
            </ListItemButton>
          </ListItem>

          {/* AULA-1: item que expande subitens */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleAula1Click}
              style={isAula1Active ? activeStyle : {}}
            >
              <ListItemText
                primaryTypographyProps={{
                  fontWeight: "bold",
                  paddingLeft: "36px",
                  paddingRight: "36px",
                }}
                primary="Aula 1 - Operadores e Variáveis"
              />
              {openAula1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          {/* Sublista de Aula-1 */}
          <Collapse in={openAula1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Início */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-1/inicio"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Início"
                  />
                </ListItemButton>
              </ListItem>
              {/* Operações */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-1/operacoes"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Operações"
                  />
                </ListItemButton>
              </ListItem>
              {/* Variáveis */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-1/variaveis"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Variáveis"
                  />
                </ListItemButton>
              </ListItem>
              {/* Terminal */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-1/terminal"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Terminal"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          {/* AULA-2: item que expande subitens */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleAula2Click}
              style={isAula2Active ? activeStyle : {}}
            >
              <ListItemText
                primaryTypographyProps={{
                  fontWeight: "bold",
                  paddingLeft: "36px",
                  paddingRight: "36px",
                }}
                primary="Aula 2 - Condicionais"
              />
              {openAula2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          {/* Sublista de Aula-2 */}
          <Collapse in={openAula2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Início */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-2/inicio"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Início"
                  />
                </ListItemButton>
              </ListItem>
              {/* Condicionais */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-2/condicionais"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Condicionais"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          {/* AULA-3: item que expande subitens */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleAula3Click}
              style={isAula3Active ? activeStyle : {}}
            >
              <ListItemText
                primaryTypographyProps={{
                  fontWeight: "bold",
                  paddingLeft: "36px",
                  paddingRight: "36px",
                }}
                primary="Aula 3 - Listas e Strings"
              />
              {openAula3 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          {/* Sublista de Aula-3 */}
          <Collapse in={openAula3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Início */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-3/inicio"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Início"
                  />
                </ListItemButton>
              </ListItem>
              {/* Listas */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-3/listas"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Listas"
                  />
                </ListItemButton>
              </ListItem>
              {/* Strings */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-3/strings"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Strings"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          {/* AULA-4: item que expande subitens */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleAula4Click}
              style={isAula4Active ? activeStyle : {}}
            >
              <ListItemText
                primaryTypographyProps={{
                  fontWeight: "bold",
                  paddingLeft: "36px",
                  paddingRight: "36px",
                }}
                primary="Aula 4 - While"
              />
              {openAula4 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          {/* Sublista de Aula-4 */}
          <Collapse in={openAula4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Início */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-4/inicio"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Início"
                  />
                </ListItemButton>
              </ListItem>
              {/* While */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-4/while"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="While"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          {/* AULA-5: item que expande subitens */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleAula5Click}
              style={isAula5Active ? activeStyle : {}}
            >
              <ListItemText
                primaryTypographyProps={{
                  fontWeight: "bold",
                  paddingLeft: "36px",
                  paddingRight: "36px",
                }}
                primary="Aula 5 - For/Range"
              />
              {openAula5 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          {/* Sublista de Aula-5 */}
          <Collapse in={openAula5} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Início */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-5/inicio"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Início"
                  />
                </ListItemButton>
              </ListItem>
              {/* For */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-5/for"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="For"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          {/* AULA-6: item que expande subitens */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleAula6Click}
              style={isAula6Active ? activeStyle : {}}
            >
              <ListItemText
                primaryTypographyProps={{
                  fontWeight: "bold",
                  paddingLeft: "36px",
                  paddingRight: "36px",
                }}
                primary="Aula 6 - Funções"
              />
              {openAula6 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          {/* Sublista de Aula-6 */}
          <Collapse in={openAula6} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Início */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-6/inicio"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Início"
                  />
                </ListItemButton>
              </ListItem>
              {/* Funções */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/aula-6/funcoes"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Funções"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          {/* Exercício-1: item que expande subitens */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleExercicio1Click}
              style={isExercicio1Active ? activeStyle : {}}
            >
              <ListItemText
                primaryTypographyProps={{
                  fontWeight: "bold",
                  paddingLeft: "36px",
                  paddingRight: "36px",
                }}
                primary="Exercício 1 - Python Básico"
              />
              {openExercicio1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openExercicio1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Exercício de Soma */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/Exercicio-1/ex_soma"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Exercício de Soma"
                  />
                </ListItemButton>
              </ListItem>
              {/* Exercício de Máximo */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/Exercicio-1/ex_maximo"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Exercício de Máximo"
                  />
                </ListItemButton>
              </ListItem>
              {/* Exercício da Área do Triângulo */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/Exercicio-1/ex_area_do_triangulo"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Exercício da Área do Triângulo"
                  />
                </ListItemButton>
              </ListItem>
              {/* Exercício da Área do Círculo */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/Exercicio-1/ex_area_do_circulo"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Exercício da Área do Círculo"
                  />
                </ListItemButton>
              </ListItem>
              {/* Exercício de Inverter String */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/Exercicio-1/ex_inverte_string"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Exercício de Inverter String"
                  />
                </ListItemButton>
              </ListItem>
              {/* Exercício de Somar Lista */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/Exercicio-1/ex_soma_positivos"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Exercício de Somar Lista"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          {/* Exercício 2: item que expande subitens */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleExercicio2Click}
              style={isExercicio2Active ? activeStyle : {}}
            >
              <ListItemText
                primaryTypographyProps={{
                  fontWeight: "bold",
                  paddingLeft: "36px",
                  paddingRight: "36px",
                }}
                primary="Exercícios 2 - Python Intermediário"
              />
              {openExercicio2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openExercicio2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Exercício de Média dos Negativos */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/Exercicio-2/ex_media_negativos"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Exercício de Média dos Negativos"
                  />
                </ListItemButton>
              </ListItem>
              {/* Exercício de Ordenar Listas */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/Exercicio-2/ex_ordena_lista"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Exercício de Ordenar Listas"
                  />
                </ListItemButton>
              </ListItem>
              {/* Exercício de Contar Palavras */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/Exercicio-2/ex_conta_palavras"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Exercício de Contar Palavras"
                  />
                </ListItemButton>
              </ListItem>
              {/* Exercício do Eh_primo */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/Exercicio-2/ex_eh_primo"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Exercício do Eh_primo"
                  />
                </ListItemButton>
              </ListItem>
              {/* Exercício do Celsius para Fahrenheit */}
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/Exercicio-2/ex_celsius_para_fahrenheit"
                  onClick={handleNavClick}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      paddingLeft: "36px",
                      paddingRight: "36px",
                    }}
                    primary="Exercício do Celsius para Fahrenheit"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </>
  );
}
