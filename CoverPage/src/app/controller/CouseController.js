const Couse = require("../models/couse");

class CouseController {
  async showManageCouses(req, res) {
    try {
      const couses = await Couse.find().lean();
      // console.log(couses)
      res.render("couse/manageCouses", { couses });
    } catch (error) {
      console.error("Error getting couses:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  }

  async showCreateCouseForm(req, res) {
    res.render("couse/createCouse");
  }
  async createCouse(req, res) {
    try {
      const dataGet = req.body;
      const img = `https://i.ytimg.com/vi/${dataGet.videoID}/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLD5c5FsEr9XGzAvsSld2wOEslY3ig`;

      const newCouse = await Couse.create({
        name: dataGet.name,
        description: dataGet.description,
        img,
        videoID: dataGet.videoID,
      });

      res.redirect("/couses");
    } catch (error) {
      console.error("Error creating couse:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  }

  async getAllCouses(req, res) {
    try {
      const couses = await Couse.find().lean();
      // res.json(couses);
      res.render("../../resources/views/couse/couses", { couses });
      // console.log(couses);
    } catch (error) {
      console.error("Error getting couses:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  }

  async getCouseBySlug(req, res) {
    try {
      const slug = req.params.slug;
      const couse = await Couse.findOne({ slug }).lean();

      if (!couse) {
        // Nếu không tìm thấy couse với slug tương ứng, xử lý lỗi
        return res.status(404).json({ error: "Couse not found" });
      }

      res.render("couse/couseDetail", { couse });
      // console.log(couse);
    } catch (error) {
      console.error("Error getting couse:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  }

  async showEditCouseForm(req, res) {
    try {
      const slug = req.params.slug;
      const couse = await Couse.findOne({ slug }).lean();

      if (!couse) {
        // Nếu không tìm thấy couse với slug tương ứng, xử lý lỗi
        return res.status(404).json({ error: "Couse not found" });
      }

      res.render("couse/updateCouse", { couse });
      // console.log(couse);
    } catch (error) {
      console.error("Error getting couse:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  }

  async updateCouseBySlug(req, res) {
    try {
      const { slug } = req.params;
      const updateData = req.body;
      const updatedCouse = await Couse.findOneAndUpdate({ slug }, updateData, {
        new: true,
      }).lean();

      if (!updatedCouse) {
        return res.status(404).json({ error: "Couse not found" });
      }

      // Trường hợp cập nhật thành công, điều hướng về trang quản lý danh sách couses
      res.redirect("/couses/manage");
    } catch (error) {
      console.error("Error updating couse:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  }

  async deleteCouseBySlug(req, res) {
    try {
      const { slug } = req.params;
      const deletedCouse = await Couse.findOneAndDelete({ slug }).lean();
      if (!deletedCouse) {
        return res.status(404).json({ error: "Couse not found" });
      }
      res.redirect("/couses/manage");
    } catch (error) {
      console.error("Error deleting couse:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  }
}

module.exports = new CouseController();
