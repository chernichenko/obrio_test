export enum ScreenType {
  SingleChoice = "single-choice",
  Info = "info",
}

export interface IStepOption {
  label: string;
  value: string;
  nextQuestionId: string | null;
  nextInfoId?: string;
}

export interface IStep {
  id: string;
  neededAnswer?: {
    key: string;
    stepId: string;
  };
  screenType: ScreenType | string;
  title: string;
  subtitle?: string;
  description?: string;
  button?: string;
  options?: IStepOption[];
}

export interface IQuizData {
  steps: IStep[];
}

export interface IAnswer {
  id: string;
  value: string;
  label: string;
}
