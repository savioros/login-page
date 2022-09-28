import styled from "styled-components";

interface ButtonThemeProps {
    themeDark: boolean
}

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    color: #224957;
    position: relative;
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
`

export const ButtonTheme = styled.button<ButtonThemeProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: fixed;
    bottom: 0;
    margin: 0 0 15px 15px;
    background-color: ${({ themeDark }) => themeDark ? '#fff' : '#224957'};
`