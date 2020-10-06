import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

interface IProduct {
  id: string;
  title: string;
}

interface CategoryProps {
  products: IProduct[];
}

const Product = () => {
  const router = useRouter();
  
  return(
    <h1>{router.query.rota_dinamica}</h1>
  );
};

export default Product;

export const getStaticProps: GetStaticProps<CategoryProps> = async (context) => {
  const { slug } = context.params;

  const response = await fetch(`http://localhost:3333/products?category_id=${slug}`);
  const products = await response.json();
  return {
    props: {
      products,
    },
    revalidate: 60,
  }
}