import React from 'react'
import { ButtonStyle } from './styles'

interface ButtonProps {
    name: string
}

function Button({ name }: ButtonProps) {
    return (
        <ButtonStyle>{name}</ButtonStyle>
    )
}

export default Button