// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

/*
const smallBox = <div className="box box--small" style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}>small lightblue box</div>
const mediumBox = <div className="box box--medium" style={{backgroundColor: 'pink', fontStyle: 'italic'}}>medium pink box</div>
const largeBox = <div className="box box--large" style={{backgroundColor: 'orange', fontStyle: 'italic'}}>large orange box</div>
*/

/* extra 1
const Box = ({className='', style, ...otherProps}) => <div className={`box ${className}`} style={{fontStyle: 'italic', ...style}} {...otherProps} />
const smallBox = <Box className="box--small" style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
const mediumBox = <Box className="box--medium" style={{backgroundColor: 'pink'}}>medium pink box</Box>
const largeBox = <Box className="box--large" style={{backgroundColor: 'orange'}}>large orange box</Box>
*/

// extra 2
const Box = ({size, style, ...otherProps}) => {
  const sizeClassName = size ? `box--${size}`: '';
  return <div className={`box ${sizeClassName}`} style={{fontStyle: 'italic', ...style}} {...otherProps} />
}
const smallBox = <Box size="small" style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
const mediumBox = <Box size="medium" style={{backgroundColor: 'pink'}}>medium pink box</Box>
const largeBox = <Box size="large" style={{backgroundColor: 'orange'}}>large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
