import styled from 'styled-components'

export const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Courier New', Courier, monospace;
    align-items: center;
    width: 100%;
    background-image: url(${props => props.bgimage});
    background-size: cover;
    color: white;
    height: 80px;
    background-color: ${props => props.bgcoolor};
    color: ${props => props.color};
`