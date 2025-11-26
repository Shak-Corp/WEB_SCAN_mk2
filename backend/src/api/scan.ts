import express from "express";
const scanRouter = express.Router();
scanRouter.post("/", async (req, res) => {
  // TODO: Validate request, enqueue scan job, audit
  res.json({ ok: true });
});
export default scanRouter;
