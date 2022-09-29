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

export const Notification = styled.div`
    position: absolute;
    margin-top: 15px;
    padding: 10px;
    width: max-content;
    height: 45px;
    background-color: #d41935;
    color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    border-radius: 10px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
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

export const ButtonTheme = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: fixed;
    bottom: 0;
    margin: 0 0 15px 15px;
    background-color: #224957;
`