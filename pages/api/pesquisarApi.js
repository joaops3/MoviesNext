import { API_KEY } from './api/key'

export default async function handler(req, res) {

  const query = req.query.pesquisar

  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`)
  const json = await response.json()

  res.status(200).json({list: json.results})
}