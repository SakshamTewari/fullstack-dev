/*
    Word Counter
    - dynamically analyze user input text and displays how often each word appears
    - textarea where users can type or paste text.
    - case-insensitive word matching
    - ignore symbols, numbers, punctuation, extra white spaces
    - sorts words by frequency (most used on top)
*/

const WordCounter = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState([]);

  function handleCount() {
    // Count Logic
    const cleanedText = text
      .toLowerCase()
      .replace(/[^a-zA-Z\s]/g, '')
      .trim();
    const words = cleanedText
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    const wordMap = new Map();
    words.forEach((word) => {
      wordMap.set(word, (wordMap.get(word) || 0) + 1);
    });
    const sortedArray = Array.from(wordMap.entries()).sort(
      (a, b) => b[1] - a[1],
    );
    setCount(sortedArray);
  }

  useEffect(() => {
    // Function Call
    handleCount();
  }, [text]);

  return (
    <div className='wordCounter'>
      <h1>Word Counter</h1>

      <div className='container'>
        <textarea
          className='textarea'
          placeholder='Type your text here'
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        {/* Display result on if there are any characters or words */}
        {count.length > 0 && (
          <div className='results'>
            <h3>Word Frequencies</h3>
            <ul>
              {count.map(([word, count], index) => (
                <li key={word} data-testid={`word-${word}`}>
                  <strong>{word} count</strong>: {count}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const wordCounterRoot = ReactDOM.createRoot(
  document.getElementById('word-counter'),
);
wordCounterRoot.render(<WordCounter />);
