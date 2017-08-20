import styled from 'styled-components'

const Default = styled.button`
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  font-size: 16px;
  padding: 6px 14px;
  min-width: 168px;
  width: auto;
  border: 2px solid #e8eaeb;
  background: #fff;
  color: #717e83;
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

export default Default
