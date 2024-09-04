import React, { useState } from "react";

function BookList({ books, deleteBook, updateBook }) {
  const [editingBook, setEditingBook] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const startEditing = (book) => {
    setEditingBook(book.id);
    setTitle(book.title);
    setAuthor(book.author);
  };

  const handleUpdate = () => {
    updateBook({ id: editingBook, title, author });
    setEditingBook(null);
  };

  return (
    <div className="lista">
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {editingBook === book.id ? (
              <div className="libros">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
                <button className="save" onClick={handleUpdate}>
                  Save
                </button>
                <button className="cancel" onClick={() => setEditingBook(null)}>
                  Cancel
                </button>
              </div>
            ) : (
              <>
                {book.title} by {book.author}
                <button className="delete" onClick={() => deleteBook(book.id)}>
                  Delete
                </button>
                <button className="update" onClick={() => startEditing(book)}>
                  Update
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
