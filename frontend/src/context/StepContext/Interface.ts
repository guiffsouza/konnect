export interface IStepContext {
  step: number;
  nextStep: () => void;
}
