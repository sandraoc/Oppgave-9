// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const movies = [
  {
    movie: 'Emma'
  },
  {
    movie: 'Deathpool'
  }
]

// export default function handler(req, res) {
//   if (req.method ==='POST') {
//     const {movie} = req.body
//     movies.push(movie)
//     res.status(201).json(movies)
//   } else {
//     res.status(200).json(movies)
//   }
// }

export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body

    if (!data?.movie) {
      res
        .status(400)
        .json({ success: false, error: 'Fyll ut all nødvendig data' })
    } else {
      movies.push(data)

      res.status(201).json({ success: true, data: movies })
    }
  } else if (req.method === 'PUT') {
    res.status(405).end()
  } else {
    res.status(200).json({ success: true, data: movies })
  }
}
