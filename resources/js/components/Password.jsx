import React from 'react';

class Password extends React.Component
{
    constructor(...args)
    {
        super(...args);
        this.state = {
            isHovered: false
        }

        this.changeHoverStatus = this.changeHoverStatus.bind(this);
    }

    changeHoverStatus()
    {
        this.setState({ isHovered: !this.state.isHovered })
    }

    render()
    { return(
        <div className={this.state.isHovered ? "password hovered" : "password" }
             onMouseEnter={this.changeHoverStatus}
             onMouseLeave={this.changeHoverStatus}
        >
           <p>
               <span className="big-word">{this.props.name.substring(0, 1)}</span>
               <span className="text">{this.props.name}</span>
               <div className="icons">
                   <a className="icon" href={this.props.link}>
                       <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M9.38359 12.3419C9.46529 12.2602 9.53009 12.1632 9.57431 12.0565C9.61852 11.9497 9.64128 11.8353 9.64128 11.7198C9.64128 11.6043 9.61852 11.4899 9.57431 11.3832C9.53009 11.2764 9.46529 11.1794 9.38359 11.0978C9.15407 10.8683 8.97201 10.5958 8.8478 10.296C8.72358 9.99611 8.65965 9.67472 8.65965 9.35016C8.65965 9.0256 8.72358 8.70422 8.8478 8.40436C8.97201 8.10451 9.15407 7.83205 9.38359 7.60256L12.3461 4.64102C12.5756 4.41152 12.8481 4.22947 13.148 4.10527C13.4478 3.98106 13.7692 3.91714 14.0938 3.91714C14.4184 3.91714 14.7398 3.98106 15.0397 4.10527C15.3395 4.22947 15.612 4.41152 15.8415 4.64102C16.071 4.87052 16.2531 5.14297 16.3773 5.44282C16.5015 5.74268 16.5654 6.06406 16.5654 6.38862C16.5654 6.71318 16.5015 7.03456 16.3773 7.33442C16.2531 7.63427 16.071 7.90672 15.8415 8.13622L14.9258 9.05107C14.8441 9.13276 14.7793 9.22974 14.7351 9.33647C14.6909 9.4432 14.6681 9.5576 14.6681 9.67312C14.6681 9.78865 14.6909 9.90304 14.7351 10.0098C14.7793 10.1165 14.8441 10.2135 14.9258 10.2952C15.0908 10.4602 15.3145 10.5528 15.5479 10.5528C15.6634 10.5528 15.7778 10.5301 15.8845 10.4859C15.9913 10.4417 16.0882 10.3769 16.1699 10.2952L17.0857 9.38032C17.8792 8.58687 18.3249 7.51073 18.3249 6.38862C18.3249 5.26651 17.8792 4.19037 17.0857 3.39692C16.2922 2.60347 15.216 2.15771 14.0938 2.15771C12.9716 2.15771 11.8954 2.60347 11.102 3.39692L8.13942 6.35846C7.74651 6.75133 7.43484 7.21774 7.22219 7.73105C7.00955 8.24437 6.9001 8.79455 6.9001 9.35016C6.9001 9.90578 7.00955 10.456 7.22219 10.9693C7.43484 11.4826 7.74651 11.949 8.13942 12.3419C8.48293 12.6854 9.04008 12.6854 9.38359 12.3419ZM11.1011 8.13622C11.0194 8.21791 10.9546 8.31489 10.9104 8.42162C10.8662 8.52835 10.8434 8.64274 10.8434 8.75827C10.8434 8.8738 10.8662 8.98819 10.9104 9.09493C10.9546 9.20166 11.0194 9.29864 11.1011 9.38032C11.3306 9.60982 11.5127 9.88227 11.6369 10.1821C11.7611 10.482 11.8251 10.8034 11.8251 11.1279C11.8251 11.4525 11.7611 11.7739 11.6369 12.0737C11.5127 12.3736 11.3306 12.646 11.1011 12.8755L8.16875 15.8077C7.94045 16.0426 7.66774 16.2298 7.36647 16.3583C7.0652 16.4869 6.74137 16.5543 6.41382 16.5566C6.08628 16.5589 5.76153 16.4961 5.45848 16.3718C5.15542 16.2475 4.8801 16.0642 4.6485 15.8326C4.41691 15.601 4.23368 15.3256 4.10945 15.0225C3.98523 14.7195 3.92248 14.3947 3.92487 14.0672C3.92726 13.7397 3.99474 13.4159 4.12338 13.1146C4.25202 12.8134 4.43925 12.5408 4.6742 12.3125L5.53296 11.4538C5.69795 11.2888 5.79064 11.0651 5.79064 10.8318C5.79064 10.5985 5.69795 10.3747 5.53296 10.2097C5.36798 10.0447 5.14421 9.95206 4.91088 9.95206C4.67756 9.95206 4.45379 10.0447 4.2888 10.2097L3.43087 11.0684C2.63738 11.8619 2.1916 12.938 2.1916 14.0601C2.1916 15.1822 2.63738 16.2584 3.43087 17.0518C4.22436 17.8453 5.30057 18.291 6.42273 18.291C7.54489 18.291 8.6211 17.8453 9.41459 17.0518L12.347 14.1196C12.7399 13.7268 13.0515 13.2603 13.2642 12.747C13.4768 12.2337 13.5863 11.6835 13.5863 11.1279C13.5863 10.5723 13.4768 10.0221 13.2642 9.50882C13.0515 8.9955 12.7399 8.52909 12.347 8.13622C12.2653 8.05453 12.1683 7.98972 12.0615 7.94551C11.9548 7.9013 11.8404 7.87854 11.7249 7.87854C11.6093 7.87854 11.4949 7.9013 11.3882 7.94551C11.2815 7.98972 11.1845 8.05453 11.1028 8.13622H11.1011Z" fill="black"/>
                       </svg>
                   </a>
                   <div className="icon">
                       <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M2.50409 9.29661L8.87734 15.2836C9.09688 15.4898 9.2066 15.5929 9.33603 15.6183C9.39433 15.6298 9.45428 15.6298 9.51258 15.6183C9.64202 15.5929 9.75174 15.4898 9.97128 15.2836L16.3445 9.29661C18.1377 7.61215 18.3554 4.84015 16.8473 2.89633L16.5638 2.53082C14.7596 0.205462 11.1381 0.595439 9.87045 3.25161C9.69133 3.62681 9.15728 3.62681 8.97817 3.25161C7.71051 0.595439 4.08905 0.205462 2.28489 2.53083L2.00132 2.89633C0.49318 4.84015 0.710934 7.61215 2.50409 9.29661Z" stroke="black" stroke-width="2"/>
                       </svg>
                   </div>
               </div>
           </p>
        </div>
    )}
}

export default Password;