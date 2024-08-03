import React from 'react';

function CharacterDetail({ character }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>{character.name}</h2>
      <p>{character.description || 'No description available'}</p>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        style={{ width: '200px', height: '200px' }}
      />
      <h3>Comics:</h3>
      <ul>
        {character.comics.items.map((comic, index) => (
          <li key={index}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterDetail;


