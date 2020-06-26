import styled from 'styled-components'
const color = 'blue'

const Button = styled.button`
/* color: white; */
color: ${(props)=>props.color};
background: ${color};
/* font-size: 1rem; */
font-size: ${props => props.big?"3rem":"1rem"};
padding: .5rem 1rem;
outline: none;
margin: 1rem;
`

export default Button