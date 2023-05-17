import React from 'react';

class Search extends React.Component
{
    constructor(...args)
    {
        super(...args);
        this.state = {}

    }

    render()
    {
        return(
            <section className="search-line">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.45 1.9C14.1227 1.9 17.1 4.87732 17.1 8.55001C17.1 12.2227 14.1227 15.2 10.45 15.2C6.77728 15.2 3.79998 12.2227 3.79998 8.55001C3.79998 4.87732 6.77728 1.9 10.45 1.9ZM19 8.55001C19 3.82797 15.172 0 10.45 0C5.72791 0 1.89998 3.82797 1.89998 8.55001C1.89998 10.5688 2.59965 12.4241 3.76968 13.8868L0.278233 17.3783C-0.0927429 17.7493 -0.0927429 18.3508 0.278233 18.7218C0.649208 19.0927 1.25075 19.0927 1.62172 18.7218L5.11317 15.2303C6.57588 16.4003 8.43124 17.1 10.45 17.1C15.172 17.1 19 13.2721 19 8.55001Z"
                          fill="black"
                    />
                </svg>
                <input type="text" name="search" onChange={this.props.input} placeholder="Здесь нужно вводить поиск, да."/>
            </section>
        )
    }
}

export default Search;
