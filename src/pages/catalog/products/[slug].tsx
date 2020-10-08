import { useRouter } from 'next/router';
import dynamic  from 'next/dynamic';
import { useState } from 'react';

const AddToCartModal = dynamic(
  () => import('@/components/AddToCardModal'),
  { loading: () => <p>Carregando...</p> }
);

export default function product() {
  const router = useRouter();
  const [isAddToCartModalVisible, setIsAddToCartModalVisible] = useState(false);

  function handleAddTocart() {
    setIsAddToCartModalVisible(true)
  }

  return (
    <div>
      <h1>{router.query.slug}</h1>

      <button onClick={handleAddTocart}>Add produto</button>

      { isAddToCartModalVisible && <AddToCartModal /> }
    </div>
  );
}