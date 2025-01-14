export enum ScreenType {
  SingleChoice = "single-choice",
  Info = "info",
}

export interface QuestionOption {
  label: string;
  value: string;
  nextQuestionId: number | null;
  nextInfoId?: number;
}

export interface Question {
  id: number;
  screenType: ScreenType;
  title: string;
  subtitle?: string;
  description?: string;
  button?: string;
  options?: QuestionOption[];
}

export interface Survey {
  questions: Question[];
}
