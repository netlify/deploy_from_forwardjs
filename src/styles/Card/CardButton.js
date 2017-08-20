import styled from 'styled-components'

const CardButton = styled.button`
  align-self: flex-start;
  margin: 0;
  margin-top: 12px;

  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  padding: 6px 14px;
  min-width: 168px;
  width: auto;
  border: 2px solid #00C7B7;
  background: #00C7B7;
  color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16);
  text-align: center;
  font-weight: 600;
  line-height: 24px;
  transition: all .2s ease-out;

  &:focus {
    box-shadow: 0 0 10px 0 #EDBF43;
    outline: none;
  }

  &:hover {
    box-shadow: 0 2px 4px 2px rgba(0,0,0,0.16);
  }
`

export default CardButton
