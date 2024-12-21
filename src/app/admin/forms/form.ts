export interface Form {
  id: string;
  title: string;
  questions: FormQuestion[];
}

export interface FormQuestion {
  type: string;
  required: boolean;
  question: string;
  description: string | null;
  imageUrl: string | null;
  options: FormQuestionOption[] | null;
}

export interface FormQuestionOption {
  option: string;
}