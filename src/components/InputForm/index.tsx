import React from 'react'
import { Input } from './styles'

interface InputFormProps {
    type: string
    id: string
    placeholder: string
    value: string
    updateFunction: (value: string) => void
}

function InputForm({ type, id, placeholder, value, updateFunction }: InputFormProps) {
    return (
        <Input 
            type={type} 
            id={id} 
            placeholder={placeholder} 
            value={value} 
            onChange={({ target }) => updateFunction(target.value)} />
    )
}

export default InputForm