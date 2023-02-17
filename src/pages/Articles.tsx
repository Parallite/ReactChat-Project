import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/store';
import { fetchArticles } from 'src/store/articles/articlesSlice';

// interface Art {
//     id: string;
//     title: string;
// }

export const Articles: FC = () => {
  const loading = useSelector((state: RootState) => state.articles.loading);
  const error = useSelector((state: RootState) => state.articles.error);
  const articles = useSelector((state: RootState) => state.articles.articles);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    handleFetchArticles();
  }, []);

  const handleFetchArticles = () => {
    dispatch(fetchArticles());
  };
  // const [loading, setLoading] = useState(false)
  // const [articles, setArticles] = useState<Art[]>([])
  // const [error, setError] = useState('')

  // useEffect(() => {
  //     getFetchArticles();
  // }, [])

  // const getFetchArticles = async () => {
  // setLoading(true);
  // setError('');
  // setArticles([]);

  // await new Promise((resolve) => setTimeout(resolve, 1000));

  //     try {
  //         const res = await fetch(`${api}/v3/articles`);

  //         const data: Art[] = await res.json();
  //         setArticles(data);
  //     } catch (err) {
  //         if (err instanceof Error) {
  //             setError(err.message);
  //         } else {
  //             setError('error');
  //         }
  //     } finally {
  //         setLoading(false);
  //     }
  // };

  // const getFetchArticles = () => {
  //     setLoading(true)
  //     fetch(`${api}/v3/articles`)
  //         .then((response) => response.json())
  //         .then((data) => setArticles(data))
  //         .catch((err: Error) => setError(err.message))
  //         .finally(() => setLoading(false))
  // }

  return (
    <>
      <h2>Articles</h2>
      {loading && <div>Loading...</div>}
      <button onClick={handleFetchArticles}>reload</button>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};
