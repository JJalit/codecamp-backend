// index.js

import express from 'express';
import { ProductController } from './mvc/controllers/product.controller.js';
import { CouponController } from './mvc/controllers/coupon.controller.js';
import { CashService } from './mvc/controllers/services/cash.service.js';
import { ProductService } from './mvc/controllers/services/product.service.js';
import { PointService } from './mvc/controllers/services/point.service.js';

const app = express();

// 추가되는 부분
const cashService = new CashService();
const productService = new ProductService();
const pointServcie = new PointService();

// 상품 API
const productController = new ProductController(cashService, productService);
app.post('/products/buy', productController.buyProduct);
app.post('/products/refund', productController.refundProduct);

// 쿠폰 API
const couponController = new CouponController(pointServcie);
app.post('/coupons/buy', couponController.buyCoupon);

app.listen(3000);
