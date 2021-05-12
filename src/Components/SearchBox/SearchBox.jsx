import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './SearchBox.scss';

const SearchBox = (props) => {

    const [name, setName] = useState('');

    return(
        <div className="search_box">
            <form>
                <input type="text" name="q" id="q" onChange={(e) => setName(e.target.value)}/>
            </form>
            <Link to={`/search/${name}`}>
                <span>Buscar</span>
            </Link>
        </div>
        
    )
}

export default SearchBox