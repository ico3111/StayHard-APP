import { NavAvatar, NavContainer, NavLinks, NavLogo } from "./styles";

interface NavbarProps {
  userName?: string;
}

const Navbar = ({ userName = "U" }: NavbarProps) => {
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <NavContainer>
      <NavLogo href="/home" style={{ textDecoration: "none" }}>
        Stay Hard
      </NavLogo>
      <NavLinks>
        <a href="/workouts">Treinos</a>
        <a href="/exercises">Exercícios</a>
        <a href="#">Progresso</a>
        <a href="/logout">Logout</a>
      </NavLinks>
      <NavAvatar>{initials}</NavAvatar>
    </NavContainer>
  );
};

export default Navbar;
