import { useEffect, useState } from 'react'

function App() {
  const url = 'https://randomuser.me/api/'
  const [user, setUser] = useState(null)
  const [person, setPerson] = useState('')

  const fetchData = async () => {
    const data = await fetch(url).then((res) => res.json())

    const single = data.results[0]
    const {
      gender,
      name: { first, last },
      picture: { large: image },
    } = single

    const newPerson = {
      name: `${first} ${last}`,
      gender,
      image,
    }

    setPerson(newPerson)
    setUser(data.results)
  }
  useEffect(() => {
    fetchData()
  }, [])

  console.log(person)

  return (
    <div className=''>
      <div className='container'>
        <img src={person.image} alt={person.name} />
        <h2>{person.name}</h2>
        <p>{person.gender}</p>
      </div>
      <h3>Person</h3>
      <pre className=''>{JSON.stringify(person, undefined, 2)}</pre>
      <hr style={{ margin: '10px' }} />
      <h3>All</h3>

      <pre className=''>{JSON.stringify(user, undefined, 2)}</pre>
    </div>
  )
}

export default App
