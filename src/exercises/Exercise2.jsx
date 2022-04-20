import React from 'react'
const Exercise2 = () => {
  const [range, setRange] = React.useState([3, 5])
  const [activePage, setActivePage] = React.useState(range[0])
  let start = range[0]; // 3
  let end = range[1]; // 5

  const pages = []

  for(let i = start; i <= end; i++) {
    pages.push((
      <button key={i} onClick={() => setActivePage(i)}>
        {i}
      </button>
    ))
  }

  const handleClick = () => {
    setRange([start, end])
  }

  return (
    <div>
      <p>Страница {activePage}</p>
      <input
        placeholder="От"
        onChange={(e) => {
          start = +e.target.value
        }}
      />
      <input
        placeholder="До"
        onChange={(e) => {
          end = +e.target.value
        }}
      />
      <button onClick={handleClick}>Показать</button>
      <div>
        {pages}
      </div>
    </div>
  );
};


export default Exercise2