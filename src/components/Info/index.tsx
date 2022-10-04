import React, { ReactNode } from 'react'
import { Container } from './styles'

function Info({ children }: {children: ReactNode}) {
    return (
        <Container>
            <p>{children}</p>
        </Container>
    )
}

export default Info