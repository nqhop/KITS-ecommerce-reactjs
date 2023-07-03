import styled from "styled-components"
import '../../App.css'
const SliderStyled = styled.div`
    height: 1000px;
    background-color: orange;
    width: calc(100vw - var(--scrollbar-width));
    margin-left: calc(50% - 50vw);
    /* background: #F7F7F7; */

    .welcome-wrapper{
        max-width: var(--max-width-home);
        margin: 0 auto;
    }
    .welcome-header{
    }
`
const Slider = () => {
    return <SliderStyled>
        <div className="wrapper-home-details-about-pricing">
            <div className="welcome">

                <p className="welcome-header">
                    Access Your Class From
                    <span className="welcome-header-blue">Anywhere & Anytime</span>
                </p>
                <p className="welcome-desc">
                    A solution for easy and flexible online learning, you can study anywhere and at anytime on this platform
                </p>
            </div>
        </div>
    </SliderStyled>
}

export default Slider