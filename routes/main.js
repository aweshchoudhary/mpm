const router = require("express").Router();
const { products, category, banner, details } = require("../apps/content");

router.get("/", (req, res) => {
  res.render("home", { products, category, banner, details });
});

router.get("/p/:page", (req, res) => {
  const q = req.params.page;
  res.render(`./pages/${q}`, { category, products, details });
});

router.get("/c/:id", (req, res) => {
  const q = req.params.id;
  let items = [];
  products.map((e) => {
    if (e.category == q) {
      items.push(e);
    }
  });
  let cname;
  category.map((c) => {
    if (q == c.id) {
      cname = c;
    }
  });

  res.render(`./pages/category`, { items, category, cname, products });
});

router.get("/product/:id", (req, res) => {
  const q = req.params.id;
  let p;
  products.map((e) => {
    if (e.id == q) {
      p = e;
    }
  });
  res.render("./pages/product", { p, products, category });
});

module.exports = router;
