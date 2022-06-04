// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { API_KEY } from './key'

export default async function handler(req, res) {
  const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
  const json = await response.json()

  res.status(200).json({movie: json.results})
}
