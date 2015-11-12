var CommentForm = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var author = this.refs.author.getDOMNode().value.trim();
        var text = this.refs.text.getDOMNode().value.trim();
        if (!author || !text) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.refs.author.getDOMNode().value = '';
        this.refs.text.getDOMNode().value = '';
    },
    render: function () {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" ref="author" />
                <input type="text" placeholder="Say something..." ref="text" />
                <input type="submit" value="Post" />
            </form>
        );
    }
});

var Employee = React.createClass({
    render: function () {
       // var rawMarkup = converter.makeHtml(this.props.children.toString());
        return (
            <div className="employee">
                <h2>{this.props.name}</h2>
               
            </div>
        );
    }
});

var Employees = React.createClass({
    render: function () {
        var employeeNodes = this.props.data.map(function (employee, index) {
            return (
                <Employee author={employee.name} key={index}>
               </Employee>
            );
        });
        return (
            <div className="employeeList">
                {employeeNodes}
            </div>
        );
    }
});

var EmployeeList = React.createClass({
  
    loadCommentsFromServer: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function () {
        return {data: this.props.data};
    },
    componentDidMount: function () {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    render: function () {
        return (
            <div className="employeeList">
                <h1>Employees</h1>
                <Employees data={this.state.data} />
            </div>
        );
    }
});

var renderClient = function (employeeList) {
    var data = employeeList || [];
    React.render(
        <EmployeeList data={data} url='employees' pollInterval={5000} />,
        document.getElementById("content")
    );
};

var renderServer = function (employeeList) {
    var data = Java.from(employeeList);
    console.log("hello sdfdsfgfgdfgdfgfgdfgdfgfdgfdhgfhfh");
    return React.renderToString(
        <EmployeeList data={data} url='employees' pollInterval={5000} />
    );
};