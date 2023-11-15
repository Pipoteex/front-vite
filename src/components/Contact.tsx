import styled from "styled-components";

import fondoContacto from "../images/fondoSeparador.svg";
import img1 from "../images/logo/yoga.jpeg";
import InstagramLogo from "../images/icons/instagram.svg";
import FacebookLogo from "../images/icons/facebook.svg";
import Email from "./Email";

/* const StyledImg = styled.div`
    display: flex;
    justify-content: center;
    img {
        width: 40%;
        border-radius: 20px;
        min-width: 300px;
    }
    @media (width < 800px) {
        img {
            width: 80%;
            border-radius: 20px;
            min-width: 200px;
        }
    }
`; */

const StyledFooter = styled.div`
    text-align: center;
    font-size: 20px;
    color: black;
    background-color: #f9f8f3;
    margin-top: 15px;
`;

const StyledInformation = styled.div`
    font-family: "Open Sans", sans-serif;
    display: flex;
    flex-direction: column;
    padding: 5%;
    font-size: 20px;
    @media (width < 800px) {
        align-items: center;
        font-size: 16px;
    }
`;

export const Contact = () => {
    //FUNTIONS
    /* const handleOnClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }; */

    return (
        <div
            className="bg-cover"
            style={{ backgroundImage: `url(${fondoContacto})` }}
            id="contact"
        >
            <div className=" pt-[20px] flex justify-center ">
                <StyledInformation>
                    <div className="text-center font-[800] text-[35px] mb-[20px]">
                        Información de contacto:
                    </div>
                    <div>
                        <div>
                            <b>- Dirección:</b> Corrientes
                        </div>
                        <div>
                            <b>- Correo:</b> yoga.claudiamartinez@gmail.com
                        </div>
                        <div>
                            <b>- Teléfono:</b> 3765401416
                        </div>
                        <div className="flex">
                            <img
                                src={InstagramLogo}
                                style={{ cursor: "pointer", margin: "10px" }}
                            />

                            <img
                                src={FacebookLogo}
                                style={{ cursor: "pointer", margin: "10px" }}
                            />
                        </div>
                    </div>
                </StyledInformation>
            </div>

            <StyledFooter>2023 Claudia Martinez :)</StyledFooter>
        </div>
    );
};
