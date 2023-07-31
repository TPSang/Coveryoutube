class SiteController {
    // GET [Home Page]
    index(req, res) {
      res.render("index");
    }
    
  }
  
  module.exports = new SiteController();
  