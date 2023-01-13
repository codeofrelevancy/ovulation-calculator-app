import { ChangeEvent, ReactNode } from 'react';

interface FormState {
  lastPeriod: string | Date | null;
  cycleLength: number | null;
}

interface OutcomesState {
  fertileWindow: Date[];
  ovulationDate: Date | null;
  nextPeriod: Date | null;
  pregnancyTestDay: Date | null;
  expectedDueDate: Date | null;
}

interface Action {
  type: string;
  payload?: any;
}

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

interface CardProps {
  date: any;
  title: string;
  description: string;
}

interface CycleLengthProps {
  onQuickSelection: (value: number) => void;
}

interface TagProps {
  value: number;
}

interface HeadlineProps {
  primary: string;
  secondary: string;
}

interface InputProps {
  type?: string;
  name: string;
  value?: any;
  legend?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface ChildrenProps {
  children: ReactNode;
}

export type {
  FormState,
  OutcomesState,
  Action,
  ButtonProps,
  CardProps,
  CycleLengthProps,
  TagProps,
  HeadlineProps,
  InputProps,
  ChildrenProps,
};
