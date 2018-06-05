import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { okaidia } from 'react-syntax-highlighter/styles/prism';
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 10px;
  background-color: #2f363d;
  border-radius: 15px;
`

const customStyle = {
  backgroundColor: '#2f363d',
}

/*
    language: css, html, js, jsx
 */

// Takes an array of strings
// Currently you can only send one of linesAdded, linesRemoved or linesBold
const Pre = ({ linesAdded, linesRemoved, linesBold, code, caption, language  }) => {

  let removed = !linesRemoved ? [] : linesRemoved
  let added = !linesAdded ? [] : linesAdded
  let newCode = code.join('\n')

  const codeCaption = caption
    ? <p>{caption}</p>
    : null
  return (
    <Wrapper id='camel'>
      {codeCaption}
      <SyntaxHighlighter
        language={language}
        customStyle={customStyle}
        showLineNumbers
        style={okaidia}
        wrapLines={true}
        lineStyle={lineNumber => {
          let style = { display: 'block', textAlign: 'left' };
          if (added.includes(lineNumber)) {
            style.backgroundColor = '#dbffdb';
          }
          else if (removed.includes(lineNumber)) {
            style.backgroundColor = '#ffecec';
          }
          return style;
        }}
      >
        {`${newCode}`}
      </SyntaxHighlighter>
    </Wrapper>
  )
};

export default Pre;
