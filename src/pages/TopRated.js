import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductProvider';

const TopRated = () => {
    const { state: { products, loading, error } } = useProducts();
    let content;
    if (loading) {
        content = <p>Loading</p>
    }
    if (error) {
        content = <p>Something went wrong</p>
    }
    if (!loading && !error && products.length === 0) {
        content = <p>No product remains here. List is empty</p>
    }
    if (!loading && !error && products.length) {
        content = products.filter((product) => product.rating >= 4).map(product => <ProductCard product={product} key={product.price}></ProductCard>)
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 max-w-7xl mx-auto my-10'>
          {content}
        </div>
    );
};

export default TopRated;