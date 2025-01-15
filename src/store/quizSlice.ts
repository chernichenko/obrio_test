import { IAnswer } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  answers: Record<string, { value: string, label: string }>;
}

const initialState: CounterState = {
  answers: {},
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    saveAnswers: (state, action: PayloadAction<IAnswer>) => {
      state.answers = {
        ...state.answers,
        [action.payload.id]: {
          value: action.payload.value,
          label: action.payload.label,
        },
      }
    },
  },
});

export const { saveAnswers } = quizSlice.actions;