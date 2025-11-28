function BookAccordion({ book }) {

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${book.id}`} aria-expanded="false" aria-controls={`collapse-${book.id}`}>
            {book.title}
          </button>
        </h2>
        <div id={`collapse-${book.id}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <ul>
              <li>
                <strong>Author: </strong> <span>{book.author}</span>
              </li>
              <li>
                <strong>Release Year: </strong> <span>{book.releaseYear}</span>
              </li>
              <li>
                <strong>Pages: </strong> <span>{book.pages}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookAccordion