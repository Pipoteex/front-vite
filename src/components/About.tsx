import image from "../images/claudia_martinez.jpeg";
import styled from "styled-components";
import Separator from "./global/Separator";
import { About } from "../types/types";

const StyledImage = styled.img`
    -webkit-box-shadow: 0px 10px 35px -15px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 35px -15px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 35px -15px rgba(0, 0, 0, 0.75);
    width: 100%;
    border-radius: 50px;
`;

const StyledText = styled.p`
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    font-weight: 400;
    -webkit-text-stroke: 0.2px pink;
    @media (width > 800px) {
        font-size: 18px;
    }
`;

export const AboutComponent = ({ data }: { data?: About }) => {
    return (
        <>
            <Separator>
                <p>Sobre mi</p>
            </Separator>
            <div id="about" style={{ margin: "20px 0px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <StyledImage
                                src={image}
                                className="img-responsive"
                                alt=""
                            />
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div
                                className="about-text"
                                style={{ marginTop: "20px" }}
                            >
                                <StyledText>
                                    {data && data?.paragraph}
                                </StyledText>
                                <StyledText>{data && data?.another}</StyledText>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
