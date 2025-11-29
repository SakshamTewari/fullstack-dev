/*
    Emoji Replacer
        - replace words like 'happy', 'pizza', 'cat' with corresponding emojis
        - input is matched case-insensitively
        
*/
function EmojiReplacer() {
  const [text, setText] = React.useState("");

  const handleReplace = (input) => {
    const pattern = new RegExp(
      `\\b(${Object.keys(emojiMap).join("|")})\\b`,
      `gi`
    );
    return input.replace(
      pattern,
      (match) => emojiMap[match.toLowerCase()] || match
    );
  };

  return (
    <div className="app-container">
      <h1>Emoji Replacer</h1>

      <textarea
        placeholder="Type words like 'happy', 'love', 'pizza'..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
      />

      <div className="button-row">
        <button className="clear-btn" onClick={() => setText("")}>
          Clear Text
        </button>
      </div>

      <h2>Output:</h2>
      <div className="output-box">
        {/* TODO: Render replaced text using replaceWithEmojis */}
        {handleReplace(text)}
      </div>
    </div>
  );
}

//  Provided Emoji Mapping — DO NOT MODIFY
const emojiMap = {
  // Emotions
  happy: "😊",
  sad: "😢",
  love: "❤️",
  angry: "😠",
  surprised: "😲",
  laugh: "😂",
  cool: "😎",
  tired: "😴",
  excited: "🤩",
  bored: "🥱",
  scared: "😱",
  confused: "😕",
  wow: "😮",
  cry: "😭",
  nervous: "😬",
  calm: "😌",
  // Greetings
  hello: "👋",
  bye: "👋",
  goodnight: "🌙",
  night: "🌙",
  // Activities
  party: "🥳",
  dance: "💃",
  music: "🎵",
  sleep: "😴",
  work: "💼",
  study: "📚",
  // Weather & Nature
  sun: "☀️",
  rain: "🌧️",
  snow: "❄️",
  cloud: "☁️",
  fire: "🔥",
  tree: "🌳",
  flower: "🌸",
  // Food & Drink
  pizza: "🍕",
  burger: "🍔",
  coffee: "☕",
  cake: "🍰",
  apple: "🍎",
  beer: "🍺",
  // Animals
  dog: "🐶",
  cat: "🐱",
  bird: "🐦",
  fish: "🐟",
  horse: "🐴",
  // Objects & Symbols
  phone: "📱",
  laptop: "💻",
  heart: "❤️",
  star: "⭐",
  thumbs_up: "👍",
  thumbs_down: "👎",
  ok_hand: "👌",
  // Misc
  money: "💰",
  gift: "🎁",
  car: "🚗",
  bike: "🚲",
  airplane: "✈️",
  clock: "⏰",
};

const emojiReplacerRoot = ReactDOM.createRoot(
  document.getElementById("emoji-replacer")
);
emojiReplacerRoot.render(<EmojiReplacer />);
