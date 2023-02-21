import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'src/services/firebase';


export const SignIn: FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await logIn(login, password);
      navigate('/chats');
    }
    catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('some error');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <p>Email:</p>
        <input
          type="email"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
          required
        />
        <p>Password:</p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <br />
        <button>Login</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};
