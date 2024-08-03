import React, { useState } from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Marvel Characters</h1>
      <CharacterList onSelectCharacter={setSelectedCharacter} />
      {selectedCharacter && <CharacterDetail character={selectedCharacter} />}
    </div>
  );
}

export default App;



