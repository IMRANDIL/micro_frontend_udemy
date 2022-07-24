import { mount as Productmount } from "products/ProductsIndex";
import { mount as Cartmount } from "cart/CartShow";

console.log("container");
Productmount(document.querySelector("#dev-products"));
Cartmount(document.querySelector("#dev-cart"));
