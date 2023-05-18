import React from 'react';
import axios from 'axios';
import Password from './Password'
import Search from './Search'

class Passwords extends React.Component
{
    constructor(...args)
    {
        super(...args);
        this.state = {
            originalPasswords: null,
            searchText: ""
        }

        this.handleClick = this.handleClick.bind(this);
        this.searchInput = this.searchInput.bind(this);
    }

    searchInput( e )
    {
        this.setState( { searchText: e.target.value.toLocaleLowerCase() } );
    }

    async getPasswordsList()
    {
        const get = await axios('/api/passwords/list');
        return await get;
    }

    filterListPassword()
    {
        let filteredElements = this.state.originalPasswords;

        if (this.state.searchText)
            filteredElements = this.state.originalPasswords.filter(
                pass => { return pass.props.name.indexOf( this.state.searchText ) !== -1 }
            );

        return filteredElements;
    }

    componentDidMount()
    {
        if (!this.state.originalPasswords)
        {
            this.getPasswordsList().then(
                passwords => this.setState({ originalPasswords: passwords.data.data.map(pass =>
                    <Password
                        key={pass.id}
                        name={pass.name}
                        link={pass.link}
                    />
                )})
            );
        }
    }

    handleClick()
    {
        console.log(this.state)
    }



    render()
    {
        return(
            <>
                <Search input={this.searchInput}/>
                <section onClick={this.handleClick} className="password-list-field">
                    {this.filterListPassword()}
                </section>
            </>

        )
    }
}

export default Passwords;
