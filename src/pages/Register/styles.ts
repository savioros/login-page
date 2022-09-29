import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    color: #224957;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;

    h1{
        font-weight: 400;
        font-size: 64px;
        line-height: 80px;
    }

    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
    }

    @media(max-width: 700px){
        p{
            font-weight: 300;
            font-size: 14px;
        }
    }
`