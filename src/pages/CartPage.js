import CartList from "../Components/cartList/CartList";
import Section from "../Components/section/Section";

const CartPage = () => {
  return (
    <Section title={"Корзина"}>
      <h2>CartPage</h2>
      <CartList />
    </Section>
  );
};

export default CartPage;
