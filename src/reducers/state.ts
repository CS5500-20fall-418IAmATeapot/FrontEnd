import { User } from "model";

interface State {
  isMenuOpen: boolean;
  isCartOpen: boolean;
  user?: User;
}

const initialState: State = {
  isMenuOpen: false,
  isCartOpen: false,
};

export type { State };
export { initialState };
