import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentFeedback: {
    comment: "",
    rating: 5,
    starRating: 0,
    opinion: "",
    suggestion: "",
    selectedOption: "",
    subjectFeedback: "",
  },
  userFeedbacks: [],
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    setComment: (state, action) => {
      state.currentFeedback.comment = action.payload;
    },
    deleteComment: (state) => {
      state.currentFeedback.comment = "";
    },
    setRating: (state, action) => {
      state.currentFeedback.rating = action.payload;
    },
    deleteRating: (state) => {
      state.currentFeedback.rating = 5;
    },
    setStarRating: (state, action) => {
      state.currentFeedback.starRating = action.payload;
    },
    deleteStarRating: (state) => {
      state.currentFeedback.starRating = 0;
    },
    setOpinion: (state, action) => {
      state.currentFeedback.opinion = action.payload;
    },
    deleteOpinion: (state) => {
      state.currentFeedback.opinion = "";
    },
    setSuggestion: (state, action) => {
      state.currentFeedback.suggestion = action.payload;
    },
    deleteSuggestion: (state) => {
      state.currentFeedback.suggestion = "";
    },
    setSelectedOption: (state, action) => {
      state.currentFeedback.selectedOption = action.payload;
    },
    deleteSelectedOption: (state) => {
      state.currentFeedback.selectedOption = "";
    },
    setSubjectFeedback: (state, action) => {
      state.currentFeedback.subjectFeedback = action.payload;
    },
    deleteSubjectFeedback: (state) => {
      state.currentFeedback.subjectFeedback = "";
    },
    saveFeedback: (state) => {
      state.userFeedbacks.push({ ...state.currentFeedback });
      state.currentFeedback = {
        comment: "",
        rating: 5,
        starRating: 0,
        opinion: "",
        suggestion: "",
        selectedOption: "",
        subjectFeedback: "",
      };
    },
    deleteUserFeedback: (state, action) => {
      state.userFeedbacks.splice(action.payload, 1);
    },
    editUserFeedback: (state, action) => {
      state.currentFeedback = state.userFeedbacks[action.payload];
      state.userFeedbacks.splice(action.payload, 1);
    },
  },
});

export const {
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
} = feedbackSlice.actions;

export default feedbackSlice.reducer;
