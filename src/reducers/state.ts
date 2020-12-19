import { Item, User } from "model";

interface State {
  isMenuOpen: boolean;
  isCartOpen: boolean;
  user?: User;
  keyword: string | undefined;
  cart:Array<Item>
}

const initialState: State = {
  isMenuOpen: false,
  isCartOpen: false,
  keyword: undefined,
  cart:[]
};

export type { State };
export { initialState };
