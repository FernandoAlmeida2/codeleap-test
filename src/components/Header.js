import styled from "styled-components";
import { COLORS } from "../constants/colors";

export default function Header(){
    return(
        <HeaderStyle>
            <h1>CodeLeap Network</h1>
        </HeaderStyle>
    )
}


const HeaderStyle = styled.div`
    width: 100%;
    min-height: 80px;
    background-color: ${COLORS.blue};
    padding-left: 37px;
    border: 1px solid #999999;
    display: flex;
    align-items: center;
    h1{
        color: #FFFFFF;
        font-size: 22px;
        font-weight: 700;
    }
`