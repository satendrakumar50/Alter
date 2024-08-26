import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setComment,
  deleteComment,
  setRating,
  deleteRating,
  setStarRating,
  deleteStarRating,
  setOpinion,
  deleteOpinion,
  setSuggestion,
  deleteSuggestion,
  setSelectedOption,
  deleteSelectedOption,
  setSubjectFeedback,
  deleteSubjectFeedback,
  saveFeedback,
  deleteUserFeedback,
  editUserFeedback,
} from "./FeedbackSlice";

function App() {
  const dispatch = useDispatch();
  const { currentFeedback, userFeedbacks } = useSelector(
    (state) => state.feedback
  );

  const emojiOptions = ["😀", "😐", "😞"];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveFeedback());
  };

  return (
    <div className="App">
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        {/* 1. Comment Section */}
        <div className="form-group">
          <label>Would you like to add a comment?</label>
          <textarea
            value={currentFeedback.comment}
            onChange={(e) => dispatch(setComment(e.target.value))}
            placeholder="Add your comment here"
          />
          <button type="button" onClick={() => dispatch(deleteComment())}>
            Delete
          </button>
        </div>

        {/* 2. Rating 1 to 10 */}
        <div className="form-group">
          <label>Rate this page (1-10):</label>
          <input
            type="number"
            value={currentFeedback.rating}
            onChange={(e) => dispatch(setRating(e.target.value))}
            min="1"
            max="10"
          />
          <button type="button" onClick={() => dispatch(deleteRating())}>
            Delete
          </button>
        </div>

        {/* 3. Star Rating */}
        <div className="form-group">
          <label>Give a star rating for the website:</label>
          {[...Array(5)].map((star, index) => (
            <span
              key={index}
              onClick={() => dispatch(setStarRating(index + 1))}
              style={{
                cursor: "pointer",
                color: currentFeedback.starRating > index ? "gold" : "grey",
              }}
            >
              ★
            </span>
          ))}
          <span>{currentFeedback.starRating} / 5</span>
          <button type="button" onClick={() => dispatch(deleteStarRating())}>
            Delete
          </button>
        </div>

        {/* 4. Opinion with Emoji */}
        <div className="form-group">
          <label>What is your opinion of this page, with emoji:</label>
          <div>
            {emojiOptions.map((emoji, index) => (
              <span
                key={index}
                onClick={() => dispatch(setOpinion(emoji))}
                style={{ cursor: "pointer", fontSize: "24px", margin: "0 5px" }}
              >
                {emoji}
              </span>
            ))}
          </div>
          <p>Selected: {currentFeedback.opinion}</p>
          <button type="button" onClick={() => dispatch(deleteOpinion())}>
            Delete
          </button>
        </div>

        {/* 5. Suggestions */}
        <div className="form-group">
          <label>Do you have any suggestions to improve our website?</label>
          <textarea
            value={currentFeedback.suggestion}
            onChange={(e) => dispatch(setSuggestion(e.target.value))}
            placeholder="Your suggestions here"
          />
          <button type="button" onClick={() => dispatch(deleteSuggestion())}>
            Delete
          </button>
        </div>

        {/* 6. Multiple Choice - 1 Answer */}
        <div className="form-group">
          <label>Multiple choice - 1 answer:</label>
          <div>
            <input
              type="radio"
              value="Radio 1"
              checked={currentFeedback.selectedOption === "Radio 1"}
              onChange={(e) => dispatch(setSelectedOption(e.target.value))}
            />{" "}
            Radio 1
            <input
              type="radio"
              value="Radio 2"
              checked={currentFeedback.selectedOption === "Radio 2"}
              onChange={(e) => dispatch(setSelectedOption(e.target.value))}
            />{" "}
            Radio 2
            <input
              type="radio"
              value="Radio 3"
              checked={currentFeedback.selectedOption === "Radio 3"}
              onChange={(e) => dispatch(setSelectedOption(e.target.value))}
            />{" "}
            Radio 3
          </div>
          <button
            type="button"
            onClick={() => dispatch(deleteSelectedOption())}
          >
            Delete
          </button>
        </div>

        {/* 7. Pick a subject and provide your feedback */}
        <div className="form-group">
          <label>Pick a subject and provide your feedback:</label>
          <select
            value={currentFeedback.subjectFeedback}
            onChange={(e) => dispatch(setSubjectFeedback(e.target.value))}
          >
            <option value="">Select a subject</option>
            <option value="Design">Design</option>
            <option value="Usability">Usability</option>
            <option value="Content">Content</option>
            <option value="Performance">Performance</option>
          </select>
          <textarea
            value={currentFeedback.subjectFeedback}
            onChange={(e) => dispatch(setSubjectFeedback(e.target.value))}
            placeholder="Your feedback on the selected subject"
          />
          <button
            type="button"
            onClick={() => dispatch(deleteSubjectFeedback())}
          >
            Delete
          </button>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit Feedback</button>
      </form>

      {/* Display User Feedback */}
      <div className="user-feedbacks">
        <h2>User Feedback</h2>
        {userFeedbacks.map((feedback, index) => (
          <div key={index} className="feedback-item">
            <p>
              <strong>Comment:</strong> {feedback.comment}
            </p>
            <p>
              <strong>Rating:</strong> {feedback.rating}
            </p>
            <p>
              <strong>Star Rating:</strong> {feedback.starRating} / 5
            </p>
            <p>
              <strong>Opinion:</strong> {feedback.opinion}
            </p>
            <p>
              <strong>Suggestion:</strong> {feedback.suggestion}
            </p>
            <p>
              <strong>Selected Option:</strong> {feedback.selectedOption}
            </p>
            <p>
              <strong>Subject Feedback:</strong> {feedback.subjectFeedback}
            </p>
            <button onClick={() => dispatch(editUserFeedback(index))}>
              Edit
            </button>
            <button onClick={() => dispatch(deleteUserFeedback(index))}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
