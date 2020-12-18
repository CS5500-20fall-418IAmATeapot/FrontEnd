import { State } from "./state";

export function reducer(stateBefore: State | any, action: any) {
  switch (action.type) {
    case "toggleMenu": {
      stateBefore.isMenuOpen = !stateBefore.isMenuOpen;
      break;
    }
    case "login": {
      stateBefore.user = action.data;
      break;
    }
    case "logout": {
      stateBefore.user = undefined;
      break;
    }
    case "search":{
      stateBefore.keyword = action.data;
      break;
    }
    default:
  }
  return stateBefore;
}
