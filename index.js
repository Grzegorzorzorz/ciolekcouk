import { render } from "ejs";
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use((req, res, next) => {
  if (req.url.endsWith("favicon.ico")) {
    next();
    return;
  }

  if (
    fs.existsSync(path.join(app.get("views"), req.url)) ||
    fs.existsSync(path.join(app.get("views"), req.url + ".ejs"))
  ) {
    next();
  } else {
    res
      .status(404)
      .render("partials/error", { errorCode: 404, msg: "Page not found." });
  }
});

app.get("/partials/error*", (req, res) => {
  res
    .status(418)
    .render("partials/error", { errorCode: "418", msg: "I am a tea pot!" });
});

app.get("*", (req, res) => {
  let url = (req.url.endsWith("/") ? path.join(req.url, "index") : req.url)
    .slice(1)
    .split("?")[0];

  res.render(url, {});
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

export default (req, res) => {
  return app(req, res);
};
