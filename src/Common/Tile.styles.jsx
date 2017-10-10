import styled from "styled-components";

export const Tile = styled.div`
  width: 330px;
  padding: 20px;
  margin: 10px auto;
  border-radius: 5px;
  border-width: 5px;
  border: solid;

  ${props => props.styleAddTile &&`
    background-color: ${props.theme.colors.primaryHue};
    border-color: ${props.theme.colors.primaryDarker};
    color: ${props.theme.colors.primaryDarkest};

    &:hover {
      color: ${props.theme.colors.primaryLightest};
      background-color: ${props.theme.colors.primaryDarker};
      border-color: ${props.theme.colors.primaryDarker};
    }
  `}

  ${props => props.styleNextTile &&`
    background-color: ${props.theme.colors.primaryHue};
    border-color: ${props.theme.colors.primaryLightest};
    color: ${props.theme.colors.primaryLightest};

    &:hover {
      background-color: ${props.theme.colors.primaryLightest};
      color: ${props.theme.colors.primaryDarkest};
    }
  `}

  ${props => props.stylePlayerTile &&`
    display: flex;
    justify-content: space-between;
    //background-color: ${props => props.colour ? props.theme.colors.secondaryHueOne : props.theme.colors.secondaryHueTwo};//How to pass a random colour?
    color: ${props.theme.colors.secondaryDarkerOne};
    border-color: ${props.theme.colors.secondaryHueOne};
  `}
`
