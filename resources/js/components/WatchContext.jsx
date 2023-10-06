import React from 'react';
import axios from 'axios';
import password from "./Password";

class WatchContext extends React.Component
{
    constructor(...args)
    {
        super(...args);
        this.state = {
            load: false,
            password: undefined
        }

        this.handlerClick = this.handlerClick.bind(this);
    }

    async getPassword( id )
    {
        const get = await axios('/web/passwords/' + id);
        return await get;
    }

    handlerClick()
    {
        console.log(
            this.state
        )
    }

    componentDidMount()
    {
        this.getPassword(this.props.item).then(
            password => this.setState({
                password: password.data.data,
                load: true
            })
        );
    }

    render()
    {

        if (this.state.password != undefined)
        {
            return(
                <div>
                    <div onClick={this.handlerClick}>{this.state.password.name}</div>
                    <div className="icons">
                        <div className="closeItem" onClick={this.props.closeContext}>
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Menu / Close_MD">
                                    <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                                          stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </svg>
                        </div>
                    </div>


                </div>
            )
        }
        else
        {
            return(
                <div>
                    <div onClick={this.handlerClick}>load</div>

                </div>
            )
        }

    }
}

export default WatchContext;
