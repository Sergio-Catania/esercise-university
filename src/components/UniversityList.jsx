import React from 'react';


export default UniversityList = ({universities }) => {
    return (
        <div>
      {universities.map((university, index) => (
        <div key={index}>
          <a href={university.url} target="_blank" rel="noopener noreferrer">
            {university.name}
          </a>
        </div>
      ))}
        </div>
    )


}

