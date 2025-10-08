import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product, onAddToCart, onViewDetails }) {

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        const stars = [];

        // ดาวเต็ม
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={`full-${i}`}>⭐</span>);
        }

        // ดาวครึ่ง
        if (hasHalfStar) {
            stars.push(<span key="half">✨</span>);
        }

        // ดาวว่าง
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`}>☆</span>);
        }

        return stars;
    };

    return (
        <div className="product-card">
            <div className="product-image">
                <img 
                    src={product.image} 
                    alt={product.name}
                    onError={(e) => {
                        e.target.src = 'https://placehold.co/300x300/cccccc/666666?text=No+Image';
                    }}
                />
            </div>
            
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                {/* ⭐ ส่วนแสดง rating stars */}
                {product.rating && (
                    <div className="product-rating">
                        {renderStars(product.rating)}
                        <span className="rating-number">({product.rating})</span>
                    </div>
                )}

                <div className="product-price">
                    {product.discount > 0 && (
                        <span className="original-price">
                            ฿{product.originalPrice.toLocaleString()}
                        </span>
                    )}
                    <span className="current-price">
                        ฿{product.price.toLocaleString()}
                    </span>
                    {product.discount > 0 && (
                        <span className="discount-badge">
                            ลด {product.discount}%
                        </span>
                    )}
                </div>
                
                <div className="product-actions">
                    <button 
                        className="btn btn-secondary"
                        onClick={() => onViewDetails(product)}
                    >
                        ดูรายละเอียด
                    </button>
                    <button 
                        className="btn btn-primary"
                        onClick={() => onAddToCart(product)}
                        disabled={!product.inStock}
                    >
                        {product.inStock ? 'ใส่ตะกร้า' : 'หมดสินค้า'}
                    </button>
                </div>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        originalPrice: PropTypes.number,
        discount: PropTypes.number,
        image: PropTypes.string,
        description: PropTypes.string,
        inStock: PropTypes.bool,
        rating: PropTypes.number
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onViewDetails: PropTypes.func.isRequired
};

export default ProductCard;