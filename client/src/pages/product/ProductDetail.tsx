import { useNavigate, useParams } from "react-router";
import { useAppSelector } from "../../hooks/reduxHooks";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = useAppSelector((state) =>
    state.cart.itemList.find((item) => item.id === productId)
  );

  if (!product) {
    return <section>Not found!</section>;
  }

  return (
    <section>
      <button onClick={()=> navigate('/vite-ecommerce/cart')}>Back</button>
      <article className="post">
        <h2>{product.name}</h2>
        <p className="post-content">{product.description}</p>
      </article>
    </section>
  );
};

export default ProductDetail;
