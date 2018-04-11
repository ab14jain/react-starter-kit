$ = jQuery = require('jquery');

// var App = console.log('Hello world from Browserify');

// module.exports = App;

var React = require('react');
var Home = require('./components/homePage');
var Author = require('./components/authors/authorPage');

var App = React.createClass({
    render: function(){
        return(
            <div>
                <Home />
                <Author />
            </div>
        )
    }
})

React.render(<App/>, document.getElementById('app'))