const router = require("express").Router();
const { products, category, banner, details } = require("../apps/content");
const mainMail = require("../apps/mailer.js");

router.get("/", (req, res) => {
  res.render("home", { products, category, banner, details, title: "Home" });
});

router.get("/p/:page", (req, res) => {
  const q = req.params.page;
  res.render(`./pages/${q}`, { category, products, details, title: q });
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

  res.render(`./pages/category`, {
    items,
    category,
    cname,
    products,
    title: cname,
  });
});

router.get("/product/:id", (req, res) => {
  const q = req.params.id;
  let p;
  products.map((e) => {
    if (e.id == q) {
      p = e;
    }
  });
  res.render("./pages/product", { p, products, category, title: p.name });
});

router.get("/sitemap", (req, res) => {
  res.download("sitemap.xml");
});

router.post("/enquiry", async (req, res, next) => {
  const { fname, lname, email, subject, message } = req.body;
  try {
    const fullname = fname + " " + lname;
    await mainMail(fullname, email, subject, message);

    res.render("home");
  } catch (error) {
    console.log(error);
    res.send("Message Could not be Sent");
  }
});

module.exports = router;
