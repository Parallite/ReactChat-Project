import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, toggleProfile } from 'src/store/profile/profileSlice';
import { selectName, selectVisible } from 'src/store/profile/selectors';

export const Profile: FC = () => {
  const [value, setValue] = useState('');
  const visible = useSelector(selectVisible);
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  const onChangeName = (value: string) => {
    dispatch(changeName(value));
    setValue('');
  };

  return (
    <>
      <h2>Profile page</h2>
      <p>visible: </p>
      <input type="checkbox" checked={visible} readOnly />
      <button onClick={() => dispatch(toggleProfile())}>change visible</button>
      <p>name: {name}</p>
      <p>Change name:</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => onChangeName(value)}>change name</button>
    </>
  );
};
