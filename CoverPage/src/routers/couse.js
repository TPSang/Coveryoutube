const express = require("express");
const couseController = require("../app/controller/CouseController");
const router = express.Router();

// Hiển thị trang quản lý danh sách couses
router.get("/manage", couseController.showManageCouses);

// Hiển thị form tạo mới couse
router.get("/create", couseController.showCreateCouseForm);

// Tạo mới couse
router.post("/create", couseController.createCouse);

// Hiển thị danh sách tất cả couses
router.get("/", couseController.getAllCouses);

// Hiển thị chi tiết couse bằng slug
router.get("/:slug", couseController.getCouseBySlug);

// Hiển thị form chỉnh sửa couse bằng slug
router.get("/:slug/edit", couseController.showEditCouseForm);

// Xử lý cập nhật couse bằng slug
router.post("/:slug/edit", couseController.updateCouseBySlug);
// Xử lý cập nhật couse bằng slug
router.put("/:slug/edit", couseController.updateCouseBySlug);

// Xóa couse bằng slug
router.post("/:slug/delete", couseController.deleteCouseBySlug);

module.exports = router;
