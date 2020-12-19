import { State } from "./state";
import { Item } from "../model";

export function reducer(stateBefore: State | any, action: any) {
  switch (action.type) {
    case "toggleMenu": {
      stateBefore.isMenuOpen = !stateBefore.isMenuOpen;
      break;
    }
    case "toggleCart":{
      stateBefore.isCartOpen = !stateBefore.isCartOpen;
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
    case "search": {
      stateBefore.keyword = action.data;
      break;
    }
    case "addCart":{
      stateBefore.cart.push(action.data);
      console.log(stateBefore.cart);
      break;
    }
    case "removeCart":{
      const index = stateBefore.cart.findIndex((e:Item)=>e.id === action.data.id)
      if(index == -1)
        break;
      else{
        stateBefore.cart.splice(index,1)
      }
      console.log(stateBefore.cart);
      break;

    }
    default:
  }
  return stateBefore;
}
