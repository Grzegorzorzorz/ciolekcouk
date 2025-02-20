import { render } from "ejs";
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.use(expressEjsLayouts);

app.set("view engine", "ejs");

app.get("/resources/fonts/*", (req, res) => {
  res
    .set({ "Cache-Control": "max-age=15552000" })
    .sendFile(req.url, { root: path.join(__dirname, "public") });
  console.log(`sent ${req.url}`);
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/partials/error*", (req, res) => {
  res.locals = {
    nav: false,
  };
  res
    .status(418)
    .render("partials/error", { errorCode: "418", msg: "I am a tea pot!" });
});

app.get("/partials*", (req, res) => {
  res.locals = {
    nav: false,
  };
  res
    .status(403)
    .render("partials/error", { errorCode: "403", msg: "Forbidden." });
});

app.get("/layout(.ejs)?", (req, res) => {
  res.locals = {
    nav: false,
  };
  res
    .status(400)
    .render("partials/error", { errorCode: "400", msg: "Bad request." });
});

app.get("*", (req, res) => {
  let url = (req.url.endsWith("/") ? path.join(req.url, "index") : req.url)
    .slice(1)
    .split("?")[0];

  res.locals = {
    nav: true,
    url: req.url,
  };
  res.render(url);
});

app.use((err, req, res, next) => {
  if (err.name !== "Error") {
    next(err);
    return;
  }

  res.locals = {
    nav: false,
  };
  res
    .status(404)
    .render("partials/error", { errorCode: 404, msg: "Page not found." });
});

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.locals = {
    nav: false,
  };
  res.status(500).render("partials/error", {
    errorCode: "500",
    msg: "Internal server error.",
  });
});

app.use((err, req, res, next) => {
  res.status(500);
  res.send("Internal server error.");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

export default (req, res) => {
  return app(req, res);
};
