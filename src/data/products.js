import PropTypes from 'prop-types';

export const categories = [
    { id: 'all', name: 'ทั้งหมด' },
    { id: 'electronics', name: 'อิเล็กทรอนิกส์' },
    { id: 'clothing', name: 'เสื้อผ้า' },
    { id: 'books', name: 'หนังสือ' }
];

// ข้อมูลสินค้าพื้นฐาน - นักศึกษาจะเพิ่มเติมใน Challenge
export const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro',
        category: 'electronics',
        price: 45900,
        originalPrice: 49900,
        discount: 8, // ลด 8%
        image: 'https://placehold.co/300x300/007bff/ffffff?text=iPhone+15',
        description: 'สมาร์ทโฟนล่าสุดจาก Apple',
        inStock: true,
        rating: 4.8
    },
    {
        id: 2,
        name: 'เสื้อยืดผ้าฝ้าย',
        category: 'clothing',
        price: 299,
        originalPrice: 350,
        discount: 15, // ลด 15%
        image: 'https://placehold.co/300x300/ffc107/000000?text=T-Shirt',
        description: 'เสื้อยืดผ้าฝ้าย 100% นุ่มสบาย',
        inStock: true,
        rating: 4.2
    },
    {
        id: 3,
        name: 'หนังสือ React.js Guide',
        category: 'books',
        price: 650,
        originalPrice: 650,
        discount: 0,
        image: 'https://placehold.co/300x300/17a2b8/ffffff?text=React+Book',
        description: 'คู่มือเรียนรู้ React.js ฉบับสมบูรณ์',
        inStock: false,
        rating: 4.7
    },
    {
        id: 4,
        name: 'MacBook Air M2',
        category: 'electronics',
        price: 42900,
        originalPrice: 46900,
        discount: 9,
        image: 'https://placehold.co/300x300/28a745/ffffff?text=MacBook+Air',
        description: 'โน้ตบุ๊ค Apple เบาแรงและเร็ว',
        inStock: true,
        rating: 4.9
    },
    {
        id: 5,
        name: 'กางเกงยีนส์ผู้ชาย',
        category: 'clothing',
        price: 1200,
        originalPrice: 1500,
        discount: 20,
        image: 'https://placehold.co/300x300/6f42c1/ffffff?text=Jeans',
        description: 'กางเกงยีนส์ฟิตพอดีตัว',
        inStock: true,
        rating: 4.4
    },
    {
        id: 6,
        name: 'หนังสือ JavaScript Handbook',
        category: 'books',
        price: 550,
        originalPrice: 600,
        discount: 8,
        image: 'https://placehold.co/300x300/f06595/ffffff?text=JS+Book',
        description: 'เรียนรู้ JavaScript แบบครบวงจร',
        inStock: true,
        rating: 4.6
    }
];
