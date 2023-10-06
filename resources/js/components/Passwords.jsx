import React from 'react';
import axios from 'axios';
import Password from './Password'
import Search from './Search'
import WatchContext from './WatchContext'

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
            typeContext: "defaul",
            componentContext: null,
        }

        this.searchInput = this.searchInput.bind(this);
        this.openPassword = this.openPassword.bind(this);
        this.closeContext = this.closeContext.bind(this);
        this.getContext = this.getContext.bind(this);
    }

    searchInput( e )
    {
        this.setState( { searchText: e.target.value.toLocaleLowerCase() } );
    }

    async getPasswordsList()
    {
        const get = await axios('/web/passwords/list');

        console.log(get.data);
        return await get;
    }

    filterListPassword()
    {
        let filteredElements = this.state.originalPasswords;

        // if (this.state.openProduct > 0)
        // {
        //     let idOpenProduct = this.state.openProduct;
        //     filteredElements.forEach( function(item, index, array)
        //     {
        //         if (item.props.item != idOpenProduct) item.ref.current.toggleOpen( true )
        //
        //     });
        // }

        if (this.state.searchText)
            filteredElements = this.state.originalPasswords.filter(
                pass => { return pass.props.name.indexOf( this.state.searchText ) !== -1 }
            );

        return filteredElements;
    }

    getContext(name)
    {
        switch (name)
        {
            case "watch":
                console.log(" watch - " + this.state.openProduct)
                return (
                    <WatchContext
                        closeContext={this.closeContext}
                        item={this.state.openProduct}
                    />
                )
                break;

            case "create":
                return (
                    <CreateContext closeContext={this.closeContext} />
                )
                break;

            case "edit":
                return (
                    <EditContext
                        closeContext={this.closeContext}
                        item={this.state.openProduct}
                    />
                )
                break;

            default: return null
        }

    }

    openPassword( id )
    {
        this.state.openProduct = id;

        this.setState( {
            openContext: true,
        } );

        this.setState({ componentContext: this.getContext("watch") });
    }

    closeContext()
    {
        this.setState( {
            openProduct: false,
            openContext: false,
            typeContext: "default"
        } );
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
                    { this.state.componentContext }
                </section>
            </>
        )
    }
}

export default Passwords;
