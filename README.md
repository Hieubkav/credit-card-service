# Dịch Vụ Rút Tiền Thẻ Tín Dụng Cần Thơ

Website dịch vụ rút tiền và đáo hạn thẻ tín dụng tại Cần Thơ được xây dựng bằng ReactJS và TailwindCSS.

## 🚀 Tính năng

- **Responsive Design**: Tối ưu cho cả mobile và desktop
- **SEO Optimized**: Meta tags đầy đủ cho SEO
- **Modern UI/UX**: Thiết kế hiện đại, dễ sử dụng
- **Speed Dial**: Nút nổi để liên hệ nhanh
- **Component-based**: Kiến trúc component rõ ràng

## 🛠️ Công nghệ sử dụng

- **ReactJS**: Framework JavaScript
- **TailwindCSS**: CSS Framework
- **Vite**: Build tool
- **React Icons**: Icon library
- **GitHub Pages**: Hosting

## 📦 Cài đặt

### Yêu cầu hệ thống
- Node.js >= 16.0.0
- npm hoặc yarn

### Bước 1: Clone repository
```bash
git clone https://github.com/your-username/credit-card-service.git
cd credit-card-service
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Chạy development server
```bash
npm run dev
```

Website sẽ chạy tại `http://localhost:5173`

## 🏗️ Build và Deploy

### Build cho production
```bash
npm run build
```

### Deploy lên GitHub Pages
```bash
npm run deploy
```

## 📁 Cấu trúc thư mục

```
credit-card-service/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── CreditCards.jsx
│   │   ├── About.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Footer.jsx
│   │   └── SpeedDial.jsx
│   ├── data/
│   │   └── content.js
│   ├── App.jsx
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Thay đổi màu sắc
Chỉnh sửa file `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Thay đổi màu chính tại đây
  }
}
```

### Cập nhật nội dung
Chỉnh sửa file `src/data/content.js` để thay đổi nội dung website.

### Thêm component mới
1. Tạo file component trong `src/components/`
2. Import và sử dụng trong `App.jsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Scripts

- `npm run dev`: Chạy development server
- `npm run build`: Build cho production
- `npm run preview`: Preview build
- `npm run deploy`: Deploy lên GitHub Pages

## 📞 Liên hệ

- **Hotline**: 0939.11.72.82
- **Email**: info@ruttiencantho.com
- **Địa chỉ**: Cần Thơ, Việt Nam

## 📄 License

MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📝 Changelog

### v1.0.0 (2024-07-18)
- Khởi tạo dự án
- Hoàn thành các component chính
- Tích hợp TailwindCSS
- Cấu hình GitHub Pages deployment
