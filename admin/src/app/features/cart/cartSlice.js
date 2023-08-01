import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  cart: { products: [], cartTotal: 0 },
};

const cartSlice = createSlice({
  name: "user-cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cart = state.cart;
      const alReadyAdded = cart.products.findIndex(
        (prod) =>
          prod.color === action.payload.color &&
          prod.size === action.payload.size &&
          prod.product.id === action.payload.product.id
      );
      if (alReadyAdded >= 0) {
        const newProduct = {
          ...cart.products[alReadyAdded],
          quantity: cart.products[alReadyAdded].quantity + 1,
        };
        cart.products[alReadyAdded] = newProduct;
        // notifyInfo("تم تحديث الكميه");
      } else {
        const newProduct = {
          product: action.payload.product,
          quantity: 1,
          color: action.payload.color,
          size: action.payload.size,
          price: action.payload.product.price,
        };
        cart.products.push(newProduct);
      }
      let totalPrice = 0;
      for (let i = 0; i < cart.products.length; i++) {
        totalPrice =
          totalPrice + cart.products[i].price * cart.products[i].quantity;
      }
      cart.cartTotal = totalPrice;
      state.cart = cart;
    },
    updateCartQuantity(state, action) {
      let prodIndex = state.cart.products.findIndex(
        (prod) =>
          prod.product.id === action.payload.prodId &&
          prod.color === action.payload.color &&
          prod.size === action.payload.size
      );
      const exsitProd = state.cart.products[prodIndex];
      // console.log(state.cart.products[prodIndex]);
      state.cart.cartTotal =
        state.cart.cartTotal -
        state.cart.products[prodIndex].quantity *
          state.cart.products[prodIndex].price;

      if (action.payload.quantity > 0) {
        state.cart.products[prodIndex].quantity = action.payload.quantity;
      } else if (action.payload.quantity <= 0) {
        state.cart.products = state.cart.products.filter(
          (prod) =>
            prod.product.id !== action.payload.prodId ||
            prod.color !== action.payload.color ||
            prod.size !== action.payload.size
        );
      }
      console.log(exsitProd.price);
      console.log(action.payload.quantity);
      state.cart.cartTotal += exsitProd.price * action.payload.quantity;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, updateCartQuantity } = cartSlice.actions;
