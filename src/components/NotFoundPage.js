import React from 'react';
import styled from 'styled-components'

const Error = styled.div `
margin-top:100px;
margin-right: 180px;
`
const NotFoundPage = () => {
  return <Error><h1>404 Page NotFound</h1> </Error>;
}

export default NotFoundPage;