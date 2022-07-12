import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
`

export const Image = styled.img`
    display: none;

    align-self: flex-end;
    justify-self: flex-end;
    margin-top: auto;
    width: 100%;

    @media(max-height: 800px) {
        display: none;
    }

    @media(max-width: 2580px){
        display: block;
    }
`

export const Header = styled.header`
    width: 100%;
    
    display: flex;
    justify-content: space-between;

    padding: 1.4rem 8.4rem 0 8.4rem;

    @media(max-width: 1000px) {
        padding: 1.4rem 4rem 0 4rem;
    }
    
    align-items: center;
`

export const LinksContainer = styled.div`
    width: 30rem;
    padding-bottom: 2rem;
`

export const Logo = styled.img`
    width: 30rem;
`

export const Links = styled.div`
    padding-top: 1.8rem;

    display: flex;
    justify-content: space-around;
`

export const Link = styled.a `
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    font-weight: 700;
    font-size: 1.6rem;
`

export const Contend = styled.div`
    display: flex;
    justify-content: center;
    height: auto;
    gap: 12rem;

    @media(max-width: 1660px) {
        justify-content: space-between;
        align-items: center;

        height: calc(100vh - 300px);
        padding: 1.4rem 10rem 0 8rem;
    }

    @media(max-width: 1660px) and (max-height: 800px) {
        height: auto;
    }

    @media(max-width: 1100px) {
        padding: 0;
        flex-direction: column-reverse;
        justify-content: center;
        height: auto;
        gap: 1rem;

        align-items: center;
        padding-top: 1rem;
    }

    @media(max-width: 900px) {
        flex-direction: column-reverse;
        justify-content: center;
        gap: 5rem;
        padding: 0;

        align-items: center;
    }

    @media(max-width: 700px){
        padding-top: 5rem;
    }
`