import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MenuBar, LogoImage, MenuItems, Items, UserContainer, Button, LoggedUser, LoggedUserContainer, LogoutButton } from "./style";
import routes from "../../defaults/routes";
// import UserContext from "../../context/UserContext";
// import { useContext } from "react";


const Menu = () => {
  // const navigate = useNavigate()
  // const {user, handleLogout, authenticated } = useContext(UserContext)

  // const onClickLogout = () => {
  //   handleLogout()
  //   navigate('/', {replace:true})
  //   window.location.reload()
  // }

  return (
    <MenuBar>
      <LogoImage
        src='../../logo1.jpeg'
        alt="logo-div-edu"
      />
      <MenuItems>
        {routes.map((route) => (
          <Items key={route.key}>
            <Link style={{color:"#5d0683"}} to={route.path}>{route.label}</Link>
          </Items>
        ))}
      </MenuItems>
      {/* {(!authenticated)? ( */}
        <UserContainer>
          <Button><Link style={{color:"#5d0683"}} to='/login'><CgProfile/>Entrar</Link></Button>
          <Button><Link style={{color:"#5d0683"}} to='/cadastro'>Cadastre-se</Link></Button>
        </UserContainer>
      {/* ):
      (<LoggedUserContainer>
        <LoggedUser>Bem vindo {user.user.name}!</LoggedUser>
        <LogoutButton onClick={onClickLogout}>Sair</LogoutButton>
      </LoggedUserContainer>)
      }  */}
      
      
    </MenuBar>
  );
};

export default Menu;
