import styled from "styled-components";

export const Tile = styled.div`
  width: 330px;
  padding: 20px;
  margin: 10px auto;
  border-radius: 5px;
  border-width: 5px;
  border: solid;
`

export const AddTile = styled(Tile)`
  background-color: #B2BAFA;
  border-color: #8192F7;
  color: #5E6FD6;

  &:hover {
  	color: white;
    background-color: #8192F7;
  	border-color: #8192F7;
  }
`

export const NextTile = styled(Tile)`
  background-color: #B2BAFA;
  border-color: white;
  color: white;

  &:hover {
    background-color: white;
  	color: #5E6FD6;
  }
`

export const PlayerTile = styled(Tile)`
  display: flex;
  justify-content: space-between;
  background-color: #FAF0D1;
  color: #D6BE79;
  border-color: #FAF0D1;
`
