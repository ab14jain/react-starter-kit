'use strict';

var React = require('react');
var Home = React.createClass({
    render: function(){
        return(
            <nav className="navbar navbar-default">                
                <div className="container-fluid" id="navbarSupportedContent">
                    <ul className="navbar-nav nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#about">About</a>
                        </li>
                    </ul>                    
                </div>
            </nav>
        )
    }
});

module.exports = Home;