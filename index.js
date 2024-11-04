import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("*", (req, res) => {
  let url = (
    req.url.endsWith("/") ? path.join(req.url, "index") : req.url
  ).slice(1);

  url = url.split("?")[0];

  res.render(url, {});
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

export default (req, res) => {
  return app(req, res);
};
