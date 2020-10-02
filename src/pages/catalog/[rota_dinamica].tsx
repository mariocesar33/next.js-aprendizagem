import { useRouter } from 'next/router';

const Product = () => {
  const router = useRouter();
  
  return(
    <h1>{router.query.rota_dinamica}</h1>
  );
};

export default Product;