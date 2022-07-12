import React from 'react'
import * as CP from './styles'

export const NavBar = () => {
    return (
        <div>
            <CP.Nav>
                <CP.Option href="#">Projetos</CP.Option>
                <CP.Option href="#">Experiência</CP.Option>
                <CP.Option href="#">Contato</CP.Option>
            </CP.Nav>
        </div>
    )
}