import React from 'react';
import axios from 'axios';

class Passwords extends React.Component
{
    constructor(...args)
    {
        super(...args);
        this.state = {
            passwords: null
        }

        this.handleClick = this.handleClick.bind(this);
    }

    async getPasswordsList()
    {
        const get = await axios('/api/passwords/list');
        return await get;
    }

    componentDidMount()
    {
        if (!this.state.passwords)
        {
            this.getPasswordsList().then(
                passwords => this.setState({ passwords: passwords.data.data })
            );
        }
    }

    handleClick()
    {
        console.log(this.state)
    }

    render()
    { return(
        <div onClick={this.handleClick} className="test">
            test
        </div>
    )}
}

export default Passwords;
