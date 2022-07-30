import Menu from "../src/components/Menu";
import routes from "./defaults/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Cadastro from "./screens/cadastro";
import CourseContext from "./context/CourseContext";
import Courses from "../Cursos.json";
import CadastroConcluido from "./screens/cadastroConcluído";
import { useEffect, useState } from "react";
import UserContext from "./context/UserContext";
import LoadingContext from "./context/LoadingContext";

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [authenticated, setAuthenticated] = useState();
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(Courses);
  }, [Courses]);

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_LS);
    localStorage.removeItem(USER_LS);
    localStorage.removeItem(CART_LS);
    setAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <CourseContext.Provider
        value={{
          courses,
        }}
      >
        <UserContext.Provider
          value={{
            user,
            setUser,
            setToken,
            token,
            handleLogout,
            authenticated,
            setAuthenticated,
          }}
        >
          <Menu />
          <LoadingContext.Provider
            value={{
              loading,
              setLoading,
            }}
          >
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={route.element}
                />
              ))}
              <Route key="login" path="/login" element={<Login />} />
              <Route key="cadastro" path="/cadastro" element={<Cadastro />} />
              <Route
                key="cadastroConcluido"
                path="/cadastro/sucesso"
                element={<CadastroConcluido />}
              />
            </Routes>
          </LoadingContext.Provider>
        </UserContext.Provider>
      </CourseContext.Provider>
    </BrowserRouter>
  );
}
export default App;
