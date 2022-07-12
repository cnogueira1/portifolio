import styled from 'styled-components'

const backgroundColors: {[key: string]: string} = {
    '1': 'linear-gradient(180deg, #000000 0%, #1C093D 100%)',
    '2': 'linear-gradient(180deg, #B72323 0%, #1C093D 51.67%), linear-gradient(180deg, #FFFFFF 0%, #8050CE 100%), linear-gradient(180deg, #FFFFFF 0%, #8050CE 100%);'
}

export const ContainerStep = styled.div<{idColor: string}>`
    min-height: 100vh;
    height: 100%;
    position: relative;

    background: ${props => backgroundColors[props.idColor]};
`
