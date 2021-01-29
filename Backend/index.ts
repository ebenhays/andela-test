const express = require('express')
const cors = require("cors");
const indexRouter = require("../dist/routes/");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", indexRouter);

//error handling
app.use(function (err, req, res, next) {
  res.status(err || 500);
  res.render("error", {
    message: err.message,
    error: {},
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
