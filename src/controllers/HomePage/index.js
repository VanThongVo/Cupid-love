import React from 'react';
import NavBar from './component/NavBar';
import Footer from './component/Footer';

import {Container, Header, Content} from './styles';

export default function HomePage() {
    const leuleu  = ' thong dang leu leu'
    return (
        <Container >
            <Header style={{backgroundImage: `url('./images/bg-heade1r.png')` }}>
                <NavBar name='xxxx' status={leuleu} />
            </Header>
            <Content></Content>
            <Footer></Footer>
        </Container>
    )
}

