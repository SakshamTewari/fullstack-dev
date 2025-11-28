/*
    Star Rating
        - display 5 stars
        - change colors based on rating (gold, gray)
        - display current rating: X
        - reset button to reset rating to 0
*/

function StarRating() {
  const [rating, setRating] = React.useState(0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Star Rating</h1>

      {/*Render 5 stars using a loop ★★★★★ */}
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: star <= rating ? "gold" : "gray",
          }}
        >
          ★
        </span>
      ))}
      <p>Current Rating: {rating}</p>

      <button
        onClick={() => setRating(0)}
        style={{
          cursor: "pointer",
          marginTop: "10px",
          padding: "8px 15px",
          fontSize: "16px",
        }}
      >
        Reset Rating
      </button>
    </div>
  );
}

const starRatingRoot = ReactDOM.createRoot(
  document.getElementById("star-rating")
);
starRatingRoot.render(<StarRating />);
