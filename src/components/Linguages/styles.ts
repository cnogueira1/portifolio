import styled from 'styled-components'

export const Title = styled.h2 `
    font-weight: 700;
    font-size: 3.3rem;
    text-align: center;
    color: ${props => props.theme.colors.white};
`

export const Icons = styled.div`
    padding-top: 2.1rem;

    img {
        width: 38rem;
        height: 20.3rem;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
`