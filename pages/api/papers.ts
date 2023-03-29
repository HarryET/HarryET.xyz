import type { NextApiRequest, NextApiResponse } from 'next'
import papers from "../../data/papers.json";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(papers)
}
