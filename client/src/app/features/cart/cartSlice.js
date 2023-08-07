import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartService from "./cartService";
const cart = JSON.parse(window.localStorage.getItem("cart"));
const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  cart: cart || { products: [], cartTotal: 0 },
};

export const getCart = createAsyncThunk("/cart/get", async (thunkApi) => {
  try {
    const res = await cartService.getCart();

    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const createCart = createAsyncThunk(
  "/cart/create",
  async ({ data }, thunkApi) => {
    try {
      return await cartService.createCart(data);
    } catch (error) {
      console.log(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
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

      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateCartQuantity(state, action) {
      let prodIndex = state.cart.products.findIndex(
        (prod) =>
          prod.product.id === action.payload.prodId &&
          prod.color === action.payload.color &&
          prod.size === action.payload.size
      );
      const exsitProd = state.cart.products[prodIndex];
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
      state.cart.cartTotal += exsitProd.price * action.payload.quantity;
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    resetCart(state, action) {
      state.cart = { products: [], cartTotal: 0 };
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        console.log(action.payload);
        if (action.payload?.length > 0) {
          const products = action.payload?.map((prod) => {
            return {
              product: prod.product,
              quantity: prod.quantity,
              price: prod.product.price,
            };
          });
          const totalCart = action.payload
            ?.map((prod) => prod.product.price * prod.quantity)
            .reduce((a, b) => a + b);
          state.cart = { products, totalCart };
          window.localStorage.setItem("cart", JSON.stringify(state.cart));
        }
      })
      .addCase(getCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default cartSlice.reducer;
export const { addToCart, updateCartQuantity, resetCart } = cartSlice.actions;
