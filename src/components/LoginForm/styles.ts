import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const MoreOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        display: flex;
        align-items: center;
        gap: 7px;
    }

    a{
        color: #000;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
    }
`