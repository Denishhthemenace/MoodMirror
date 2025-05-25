import { useState } from 'react';
import MoodEntry from './components/MoodEntry';
import './App.css';

const moods = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😡", label: "Angry" },
  { emoji: "😨", label: "Anxious" },
  { emoji: "😴", label: "Tired" },
  { emoji: "🤩", label: "Excited" },
];

function App() {
  const [entries, setEntries] = useState([]);

  const logMood = (mood) => {
    const time = new Date().toLocaleString();
    setEntries([{ ...mood, time }, ...entries]);
  };

  return (
    <div className="App">
      <h1>🪞 Mood Mirror</h1>
      <p>How are you feeling right now?</p>

      <div className="mood-buttons">
        {moods.map((mood, idx) => (
          <button key={idx} onClick={() => logMood(mood)}>
            {mood.emoji}
          </button>
        ))}
      </div>

      <h2>Your Mood History</h2>
      {entries.length === 0 ? (
        <p>No moods recorded yet. Start tracking!</p>
      ) : (
        entries.map((entry, idx) => <MoodEntry key={idx} mood={entry} />)
      )}
    </div>
  );
}

export default App;
