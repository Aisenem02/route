import React from 'react'

const books = [
  "12 правил жизни",
  "Символы человека",
  "Преступление и наказание",
  "Падение",
  "Эгоистичный ген"
];

function Exercise5() {
  const [search, setSearch] = React.useState('');

  return (
    <div className="exercise">
      <h1 className="exercise__title">Задание 5</h1>
      <Search onChange={(value) => setSearch(value)} />
      <ul>
        {books
          .filter((book) => book.toLowerCase().includes(search.toLowerCase()))
          .map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

function Search({ onChange }) {
  return <input type="text" onChange={(e) => onChange(e.target.value)} />;
}

export default Exercise5;