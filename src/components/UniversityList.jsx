import React from 'react';

const UniversityList = ({ universities }) => {
  console.log(universities);

  return (
    <div>
      <h2>University List</h2>
      {universities.map((university, i) => (
        <div key={i}>
          <a href=
            {university.url} target="_blank" rel="noopener noreferrer">
            {university.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default UniversityList;
