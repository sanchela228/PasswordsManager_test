import React from 'react';

class Password extends React.Component
{
    constructor(...args)
    {
        super(...args);
        this.state = {
            isHovered: false
        }

    }
    render()
    { return(
        <div className="password">
           <p>
               <span className="big-word">{this.props.name.substring(0, 1)}</span>
               <span className="text">{this.props.name}</span>
           </p>
        </div>
    )}
}

export default Password;
