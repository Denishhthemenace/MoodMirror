function MoodEntry({ mood }) {
    return (
      <div style={{
        border: '1px solid #ddd',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
      }}>
        <p style={{ fontSize: '24px' }}>{mood.emoji} - {mood.label}</p>
        <small>{mood.time}</small>
      </div>
    );
  }
  
  export default MoodEntry;
  