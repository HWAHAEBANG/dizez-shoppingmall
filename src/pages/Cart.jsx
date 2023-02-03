import React from "react";
import Banner from "../components/Banner";
import MainButton from "../components/ui/MainButton";
import CartItem from "../components/CartItem";
import useCart from "../hooks/useCart";

export default function Cart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  const totalPrice =
    products &&
    products.reduce(
      (prev, current) =>
        prev + parseInt(current.price) * current.selectedQuantity,
      0 //초기값은 0
    );

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className='pt-14'>
      <Banner title='Shopping Cart' />
      <section className='flex flex-col lg:flex-row pb-12 pt-0 lg:pt-12 px-5 '>
        <div className='lg:basis-3/4 lg:mr-20'>
          <div className='border-b-2 py-3 font-bold hidden lg:flex'>
            <p className='basis-1/12'>PRODUCT</p>
            <p className='basis-4/12'>(Color / Size)</p>
            <p className='basis-2/12'>PRICE</p>
            <p className='basis-3/12'>QUANTITY</p>
            <p className='basis-2/12'>SUBTOTAL</p>
          </div>
          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
        <div className='lg:basis-1/4 bg-gray-200 flex flex-col px-10 py-10'>
          <p className='border-b-2 pb-3 text-2xl border-gray-400 font-bold'>
            Order Summary
          </p>
          {products.map((product) => (
            <div key={product.id}>
              <div className=' flex justify-between py-2'>
                <p>{product.title}</p>
                <p>￦{product.price * product.selectedQuantity}</p>
              </div>
            </div>
          ))}

          <div className='flex justify-between py-5 border-t-2 border-gray-400 text-2xl'>
            <span>TOTAL</span>
            <span className='font-bold'>￦{totalPrice}</span>
          </div>
          <MainButton
            text='PROCEED TO CHECKOUT'
            bgcolor='black'
            color='white'
            length='full'
          />
        </div>
      </section>
    </div>
  );
}
