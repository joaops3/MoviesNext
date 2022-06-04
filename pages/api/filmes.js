// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const API_KEY= "53e49a3f63f347af01773560db28ed78"

export default async function handler(req, res) {
  const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
  const json = await response.json()

  res.status(200).json({list: json.results})
}
