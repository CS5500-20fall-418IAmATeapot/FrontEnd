import { User } from "model";

interface State {
  isMenuOpen: boolean;
  isCartOpen: boolean;
  user?: User;
  keyword: string | undefined;
}

const initialState: State = {
  isMenuOpen: false,
  isCartOpen: false,
  keyword: undefined,
};

export type { State };
export { initialState };
