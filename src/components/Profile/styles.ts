import styled from 'styled-components'

export const ContainerProfile = styled.div`
    display: flex;
    gap: 0.4rem;
    height: 5.2rem;
`

export const VectorImage = styled.div`
    img {
        margin-top: 0.5rem;
        width: 3.4rem;
        height: 4.7rem;
    }

`

export const Detail = styled.div `
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: flex-end;
    color: ${props => props.theme.colors.white};

    h1 {
        font-weight: 700;
        font-size: 1.6rem;
    }

    p {
        font-weight: 600;
        font-size: 1rem;
    }
`