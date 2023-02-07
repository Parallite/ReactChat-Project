import { FC } from 'react';

export const About: FC = () => {
  return (
    <>
      <h2>About page</h2>
      <p>visible: </p>

      <input type="checkbox" checked={true} readOnly />
      {/* <button onClick={() => dispatch(visible)}>change visible</button> */}
    </>
  );
};
