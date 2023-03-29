import type { NextApiRequest, NextApiResponse } from 'next'
import experience from "../../data/experience.json";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(experience)
}
