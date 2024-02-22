import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import './styleSearch.css';

interface SearchProps {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
}

export const Search: FC<SearchProps> = ({ searchText, setSearchText }) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value);

  return (
    <div>
      <input
        value={searchText}
        type="text"
        name="name"
        className="input"
        onChange={handleOnChange}
        placeholder="Search your trip"
      />
    </div>
  );
};
