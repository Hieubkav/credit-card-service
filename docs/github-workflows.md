# GitHub Workflows

Dự án này sử dụng GitHub Actions để tự động build và deploy lên GitHub Pages.

## Workflows

### 1. CI Workflow (`.github/workflows/ci.yml`)
- **Trigger**: Push và Pull Request vào main/master branch
- **Chức năng**: Build và kiểm tra dự án
- **Không deploy**: Chỉ kiểm tra code có build được không

### 2. Deploy Workflow (`.github/workflows/deploy.yml`)
- **Trigger**: Push vào main/master branch
- **Chức năng**: Build và deploy lên GitHub Pages
- **Output**: Website được deploy tại `https://your-username.github.io/repository-name`

## Cách setup

### 1. Bật GitHub Pages
1. Vào repository Settings
2. Scroll xuống phần "Pages"
3. Chọn Source: "Deploy from a branch"
4. Chọn branch: `gh-pages`
5. Folder: `/ (root)`

### 2. Cập nhật base URL
Trong file `vite.config.js`, đảm bảo `base` đúng với tên repository:
```js
export default defineConfig({
  base: '/tên-repository-của-bạn/',
  // ...
})
```

### 3. Cập nhật package.json
Trong file `package.json`, cập nhật homepage:
```json
{
  "homepage": "https://your-username.github.io/tên-repository"
}
```

## Lưu ý
- Workflow sẽ tự động chạy khi push code lên main/master
- Nếu build thất bại, deployment sẽ không chạy
- Có thể xem log chi tiết trong tab "Actions" của repository
- Website sẽ có sẵn sau vài phút kể từ khi deployment thành công
