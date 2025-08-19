/*
Color Explorer
- help user explore colors by typing in natural language color names like 'red', 'lavender'
*/

const ColorExplorer = () => {
  const [input, setInput] = React.useState('');
  const [color, setColor] = React.useState(null);
  const [error, setError] = React.useState('');

  const handleSearch = () => {
    const hex = getColorHex(input.trim().toLowerCase());
    if (hex) {
      setColor(hex);
      setError('');
    } else {
      setColor(null);
      setError('Color not found');
    }
  };

  return (
    <div>
      <h1>Color Explorer</h1>
      <div>
        <input
          type='text'
          placeholder='Enter color name'
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className='color-box'>
        <div
          className='preview'
          style={{ ...styles.preview, backgroundColor: color || 'transparent' }}
        ></div>
        <p>Name: {color ? input : '-'}</p>
        <p>Hex: {color || '-'}</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

const styles = {
  preview: {
    width: '100px',
    height: '100px',
    border: '1px solid black',
    borderRadius: '50%',
  },
};

const colors = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
};

const getColorHex = (colorName) => {
  return colors[colorName.replace(/\s+/g, '')];
};

const colorExplorerRoot = ReactDOM.createRoot(
  document.getElementById('color-explorer'),
);
colorExplorerRoot.render(<ColorExplorer />);
