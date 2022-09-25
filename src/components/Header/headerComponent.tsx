import { BsCart3 } from 'react-icons/bs'

import './headerStyles.css'

export const Header = () => {
  return (
    <div className="header-container">
      <h2 className="header-title">CLUB CLOTHING</h2>

      <div className="header-items">
        <div className="header-item">Explorar</div>
        <div className="header-item">Login</div>
        <div className="header-item">Criar conta</div>
        <div className="header-item">
          <BsCart3 size={25} />
          <p style={{ marginLeft: 8 }}>5</p>
        </div>
      </div>
    </div>
  )
}
