import { GetServerSideProps } from 'next';

import SEO from '@/components/SEO';
import { Title  } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }: HomeProps) {
  async function handleSoma() {


    const math = (await import('../lib/math')).default;
    alert(math.soma(3, 5));
  }
  return (
    <div>
      <SEO 
        title="Zulmiera, Bu loja!"
        image="boot.png"
        shouldExcludeTitleSuffix 
      />

      <section>
        <Title>Produtos</Title>

        <ul>
          {recommendedProducts.map(recommendedProduct => {
            return(
              <li key={recommendedProduct.id}>
                {recommendedProduct.title}
              </li>
            );
          })}
        </ul>
      </section>

      <button onClick={handleSoma}>Somar</button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommended`);
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  }
}