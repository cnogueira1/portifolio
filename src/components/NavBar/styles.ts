import styled from 'styled-components'

export const Option = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    font-weight: 700;
    font-size: 1.2rem;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 2.4rem;
`