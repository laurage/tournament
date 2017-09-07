import styled from "styled-components";

export const Tile = styled.div`
  width: 330px;
  padding: 20px;
  margin: 10px auto;
  border-radius: 5px;
  border-width: 5px;
  border: solid;
`
// replace with modifiers
export const AddTile = styled(Tile)`
  background-color: ${props => props.theme.colors.primaryHue};
  border-color: ${props => props.theme.colors.primaryDarker};
  color: ${props => props.theme.colors.primaryDarkest};

  &:hover {
  	color: ${props => props.theme.colors.primaryLightest};
    background-color: ${props => props.theme.colors.primaryDarker};
  	border-color: ${props => props.theme.colors.primaryDarker};
  }
`

export const NextTile = styled(Tile)`
  background-color: ${props => props.theme.colors.primaryHue};
  border-color: ${props => props.theme.colors.primaryLightest};
  color: ${props => props.theme.colors.primaryLightest};

  &:hover {
    background-color: ${props => props.theme.colors.primaryLightest};
  	color: ${props => props.theme.colors.primaryDarkest};
  }
`

export const PlayerTile = styled(Tile)`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.secondaryHueOne};
  color: ${props => props.theme.colors.secondaryDarkerOne};
  border-color: ${props => props.theme.colors.secondaryHueOne};
`
