import { useEffect } from "react"
import { useState } from "react"
import BookAccordion from "./BookAccordion"

export default function App() {
  const [books, setBooks] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const [filter, setFilter] = useState("All");
  const [allBooks, setAllBooks] = useState(null)


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books");
        const data = await response.json()
        setBooks(data)
        setAllBooks(data)
        setIsLoading(false)
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }
    }
    fetchBooks()
  }, [])


  function handleFilter() {
    if (filter === "All") {
      setBooks(allBooks);
    } else if (filter === "BC") {
      setBooks(allBooks?.filter(book => book.releaseYear <= 0));
    } else if (filter === "AC") {
      setBooks(allBooks?.filter(book => book.releaseYear > 0));
    }
  }
  useEffect(() => {
    handleFilter();
  }, [filter]);


  return (
    <>
      <h1>Books</h1>
      <div>
          <input type="radio" id="AC" value="AC" checked={filter === "AC"} onChange={(e) => setFilter(e.target.value)}/>
          <label htmlFor="AC"> AC </label>

          <input type="radio" id="BC" value="BC" checked={filter === "BC"} onChange={(e) => setFilter(e.target.value)}/>
          <label htmlFor="BC"> BC </label>

          <input type="radio" id="All" value="All" checked={filter === "All"} onChange={(e) => setFilter(e.target.value)}/>
          <label htmlFor="AC"> All </label>
      </div>

      {error ? <div>{error.message}</div> :
        isLoading ? <div>Loading...</div> :
          books?.map(book => (
            <div key={book.id}>
              <BookAccordion book={book}></BookAccordion>
            </div>
          ))
      }
    </>
  )
}


