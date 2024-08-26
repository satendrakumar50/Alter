import { configureStore } from '@reduxjs/toolkit';
import feedbackReducer from './FeedbackSlice';

const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});

export default store;
