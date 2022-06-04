// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const API_KEY= "53e49a3f63f347af01773560db28ed78"

export default async function handler(req, res) {

  let query = req.query.filmeId

  const response = await fetch(`https://api.themoviedb.org/3/movie/${query}?api_key=${API_KEY}&language=pt-BR`)
  const movie = await response.json()

  res.status(200).json({movie: movie})
}
