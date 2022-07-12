import React from 'react'
import { Linguages } from '../Linguages/Linguages'
import { NavBar } from '../NavBar'
import { Profile } from '../Profile'
import* as CP from './styles'

export const StepOne = () => {
    return (
        <CP.Container>
            <CP.Header>
                <NavBar />
                <Profile />
            </CP.Header>
            <CP.Contend>
                <CP.LinksContainer>
                    <CP.Logo src="/svgs/developer.svg" alt="developer" />
                    <CP.Links>
                        <CP.Link href="#">GITHUB</CP.Link>
                        <CP.Link href="#">LINKEDIN</CP.Link>
                    </CP.Links>
                </CP.LinksContainer>
                <Linguages />
            </CP.Contend>
            <CP.Image src="/svgs/vector1.svg" alt="vector1" />
        </CP.Container>
    )
}