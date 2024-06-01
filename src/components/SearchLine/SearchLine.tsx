import {ChangeEvent, FC, KeyboardEventHandler, useState} from 'react';
import './SearchLine.css'

type SearchLineProps = {
    onSearch: (query: string) => void
}
export const SearchLine: FC<SearchLineProps> = ({onSearch}) => {
    const [value, setValue] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSearch = () => {
        onSearch(value);
    };

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="container_search">
            <button onClick={handleSearch} className="button_search">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     style={{display: "block", width: "24px", height: "24px"}}>
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </button>
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Search by name..."
                className="input"
            />
        </div>
    );
};
