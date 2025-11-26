import express from "express";
const crawlRouter = express.Router();
crawlRouter.post("/", async (req, res) => {
  // TODO: Validate request, enqueue crawl job
  res.json({ ok: true });
});
export default crawlRouter;
