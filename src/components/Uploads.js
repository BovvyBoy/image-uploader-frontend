import React from 'react'

function Uploads(props) {
  return <div>
      <h1>Processed Uploads </h1>
      {props.uploads.map((upload) => {
          return <div key={upload.id}>
              <h2>{upload.title}</h2>
              <img alt="" src={'http://localhost:3000/public/pictures/download.png'}/>
          </div>
      })}
      
      </div>
  
}

export default Uploads;