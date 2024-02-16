import logoBurger from "./assets/logo.png"
import "./css/header.css"

interface HeaderProps {
  onClick: () => void
  admin: boolean
}

export default function Header({
  onClick,
  admin,
}: HeaderProps) {
  return (
    <div className="sidebar">
      <img src={logoBurger} />
      <button onClick={() => onClick()}>
        {admin ? "Desactiver" : "Activer"} le mode admin
      </button>
    </div>
  )
}
