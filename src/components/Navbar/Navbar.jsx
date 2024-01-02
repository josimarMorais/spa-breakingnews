import logo from '../../images/LogoBN.png'
//import './Navbar.css'
import styled from 'styled-components'
export function Navbar() {
    return (
        <>
            <nav>
                <div className="input-search-space">
                <i className="bi bi-search"></i>
                    <input type="text" placeholder="Pesquise por um títuo"/>
                </div>

                <img src={logo} alt="Logo do BreakingNews" />

                <Button>Entrar</Button>
            </nav>
        </>
    )
}

const Button = styled.button`
background-color: #0bade3;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.4rem 1rem;
    color: #fff;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    border-radius: 0.3rem;
    font-family: Roboto, arial;
    /* width: 40%; */
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;

    &:hover {
    background-color: #0a86af;
    }
`