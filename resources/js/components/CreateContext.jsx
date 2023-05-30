import React from 'react';

class WatchContext extends React.Component
{
    constructor(...args)
    {
        super(...args);
        this.state = {}

    }

    componentDidMount()
    {
        console.log("mount")
    }

    render()
    {
        return(
            <div>test1</div>
        )
    }
}

export default WatchContext;
