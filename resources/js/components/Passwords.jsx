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
            searchText: "",
            openContext: false,
            openProduct: false,
        }

        this.searchInput = this.searchInput.bind(this);
        this.openPassword = this.openPassword.bind(this);
    }

    searchInput( e )
    {
        this.setState( { searchText: e.target.value.toLocaleLowerCase() } );
    }

    async getPasswordsList()
    {
        const get = await axios('/web/passwords/list');
        return await get;
    }

    filterListPassword()
    {
        let filteredElements = this.state.originalPasswords;


        console.log(filteredElements)

        // if (this.state.openProduct > 0)
        // {
        //     let idOpenProduct = this.state.openProduct;
        //     filteredElements.forEach( function(item, index, array)
        //     {
        //         console.log(item)
        //
        //         if (item.props.item == idOpenProduct) item.props.item = 123;
        //     });
        // }

        if (this.state.searchText)
            filteredElements = this.state.originalPasswords.filter(
                pass => { return pass.props.name.indexOf( this.state.searchText ) !== -1 }
            );

        return filteredElements;
    }

    openPassword( id )
    {
        this.setState( { openProduct: id } );
        this.setState( { openContext: true } );
    }

    componentDidMount()
    {
        if (!this.state.originalPasswords)
        {
            let thisObj = this;
            this.getPasswordsList().then(
                passwords => this.setState({ originalPasswords: passwords.data.data.map(pass =>
                    <Password
                        click={this.openPassword}
                        openProduct={this.state.openProduct}
                        item={pass.id}
                        key={pass.id}
                        name={pass.name}
                        link={pass.link}
                    />
                )})
            );
        }
    }

    render()
    {
        return(
            <>
                <section className={this.state.openContext ? "field with-context" : "field"}>
                    <Search input={this.searchInput}/>
                    <section className="password-list-field">
                        {this.filterListPassword()}
                    </section>
                </section>
                <section className="context">

                </section>
            </>
        )
    }
}

export default Passwords;
