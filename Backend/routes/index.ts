import {Router} from 'express';
const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to API" });
});

router.post("/", (req, res) => {
  const data = [{ a: 1 }, { b: 2 }];
  res.status(200).json({ result: data });
});

module.exports = router;
