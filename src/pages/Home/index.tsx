import React from 'react'
import Header from '../../components/Header'
import { Container, Welcome } from './styles'

function Home() {
    return (
        <Container>
            <Header/>
            <Welcome>
                <h2>Welcome to Chrones! :)</h2>
            </Welcome>
        </Container>
    )
}

export default Home