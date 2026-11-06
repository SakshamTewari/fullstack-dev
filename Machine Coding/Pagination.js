const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const ITEMS_PER_PAGE = 25;

const Pagination = () => {
  const [list, setList] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [titleName, setTitleName] = React.useState('');

  const makeApiCall = (url, page, per_page, beerName) => {
    const fullUrl = `${url}?page=${page}&per_page=${per_page}&${
      title ? `beer_name=${titleName}` : ''
    }`;
    fetch(fullUrl)
      .then((resp) => resp.json())
      .then((list) => {
        if (!Array.isArray(list)) setList([]);
        else setList(list);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    makeApiCall(API_URL, page, ITEMS_PER_PAGE, beerName);
  }, [page, beerName]);

  return (
    <div>
      <div>
        <select id='page' onChange={(e) => setPage(e.target.value)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <input
          placeholder='Enter beer name'
          onChange={(e) => setBeerName(e.target.value)}
        ></input>
      </div>
      {list.map((e) => (
        <Beer {...e} key={e.name} />
      ))}
    </div>
  );
};

const Beer = ({ name, tagLine, image_url }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{tagline}</p>
      <img src={image_url} alt={name} width='100px' />
    </div>
  );
};

const paginationRoot = ReactDOM.createRoot(
  document.getElementById('pagination'),
);
paginationRoot.render(<Pagination />);
