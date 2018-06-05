import React from 'react'
import styled from 'styled-components'

const TableComp = styled.table`
  border-collapse: collapse;
  border-spacing: 0px;
  padding: 5px;
  border: 1px solid black;
`

const Table =({ children }) => {
  return (
    <TableComp>
      <tbody>
        {children}
      </tbody>
    </TableComp>
  )
}
export default Table