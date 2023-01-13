import { Action, FormState, OutcomesState } from '../types';

const initialFormState: FormState = {
  lastPeriod: null,
  cycleLength: null,
};

const initialOutcomesState: OutcomesState = {
  fertileWindow: [],
  ovulationDate: null,
  nextPeriod: null,
  pregnancyTestDay: null,
  expectedDueDate: null,
};

function formReducer(state: FormState, action: Action) {
  // TODO: formReducer Logic
}

function outcomesReducer(state: OutcomesState, action: Action) {
  // TODO: outcomesReducer Logic
}

export { initialFormState, initialOutcomesState, formReducer, outcomesReducer };
