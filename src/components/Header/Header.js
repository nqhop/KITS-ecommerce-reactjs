import styled from "styled-components";
import logo from 'assets/icons/logo192.png'
const HeaderStyled = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    padding: 4px 20px 4px 12px;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    
`
const Header = () => {
    return <HeaderStyled>
        <img src={logo} style={{ width: '50px' }}/>
        <div>
            <span>Icon</span>
            <span>Icon</span>
        </div>
    </HeaderStyled>
}
export default Header;