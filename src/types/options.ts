import { Settings, Callbacks } from '.';

export type Options = {
  readonly element: HTMLElement;
  readonly settings?: Settings;
  readonly callbacks?: Callbacks;
};
