import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 64px;
  width: auto;
  padding: 20px 80px;

  background: #7289da;
  box-shadow: 0 10px 10px rgba(35, 39, 42, 1);

  div {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }

  nav {
    display: flex;
    justify-content: space-between;
    width: 150px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
`

export const LinkTo = styled(Link)`
  justify-content: space-between;
  text-decoration: none;
  color: #fff;

  transition: color 0.2s;

  &:hover {
    color: #2c2f33;
  }
`
