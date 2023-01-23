import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductProvider';

const Cart = () => {
    const { state: { loading, error,cart } } = useProducts();
    let content;
    if (loading) {
        content = <p>Loading</p>
    }
    if (error) {
        content = <p>Something went wrong</p>
    }
    if (!loading && !error && cart.length === 0) {
        content = <p>No product remains here. List is empty</p>
    }
    if (!loading && !error && cart.length) {
        content = cart.map((product,index) => <ProductCard product={product} key={index}></ProductCard>)
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 max-w-7xl mx-auto my-10'>
            {
                content
            }
        </div>
    );
};

export default Cart;