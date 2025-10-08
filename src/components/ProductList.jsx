import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ products, categories, onAddToCart, onViewDetails }) {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('none');

    // กรองสินค้าตามหมวดหมู่ + ค้นหา + เรียงลำดับ
    const filteredProducts = useMemo(() => {
        let result = [...products];

        // ✅ Filter by category
        if (selectedCategory !== 'all') {
            result = result.filter(product => product.category === selectedCategory);
        }

        // ✅ Search filter (name + description)
        if (searchQuery.trim() !== '') {
            const lowerQuery = searchQuery.toLowerCase();
            result = result.filter(product =>
                product.name.toLowerCase().includes(lowerQuery) ||
                product.description.toLowerCase().includes(lowerQuery)
            );
        }

        // ✅ Sort
        if (sortBy === 'name') {
            result.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'price') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'rating') {
            result.sort((b, a) => a.rating - b.rating); // มากไปน้อย
        }

        return result;
    }, [products, selectedCategory, searchQuery, sortBy]);

    return (
        <div className="product-list-container">
            {/* Header */}
            <div className="header">
                <h1>🛍️ ร้านค้าออนไลน์</h1>
                <p>Lab 3.2 - การสร้าง Components และ Props</p>
            </div>

<div className="filter-bar">
    {/* Category Filter */}
    <div className="filter-item">
        <label htmlFor="category-select">หมวดหมู่</label>
        <select 
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
        >
            {categories.map(category => (
                <option key={category.id} value={category.id}>
                    {category.name}
                </option>
            ))}
        </select>
    </div>

    {/* Search Box */}
    <div className="filter-item">
        <label htmlFor="search">ค้นหา</label>
        <input
            id="search"
            type="text"
            placeholder="ค้นหาชื่อหรือคำอธิบาย..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="filter-input"
        />
    </div>

    {/* Sort Dropdown */}
    <div className="filter-item">
        <label htmlFor="sort">เรียงตาม</label>
        <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
        >
            <option value="none">-- ไม่เรียง --</option>
            <option value="name">ชื่อ</option>
            <option value="price">ราคา</option>
            <option value="rating">Rating</option>
        </select>
    </div>
</div>
            {/* Products Display */}
            <div className="products-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                            onViewDetails={onViewDetails}
                        />
                    ))
                ) : (
                    <p style={{ textAlign: 'center', width: '100%' }}>
                        ❌ ไม่พบสินค้าที่ตรงกับการค้นหา
                    </p>
                )}
            </div>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onViewDetails: PropTypes.func.isRequired
};

export default ProductList;
