import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`

export const Welcome = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: max-content;

    h2{
        font-weight: 400;
        font-size: 64px;
        line-height: 80px;
    }

    @media(max-width: 800px){
        h2{
            font-size: 32px;
        }
    }
`