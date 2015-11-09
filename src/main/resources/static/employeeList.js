var converter = new Showdown.converter();

var EmployeeForm = React.createClass({displayName: "EmployeeForm",
    handleSubmit: function (e) {
        e.preventDefault();
        var name = this.refs.name.getDOMNode().value.trim();
        
        if (!name) {
            return;
        }
        this.props.onEmployeeSubmit({name: name});
        this.refs.name.getDOMNode().value = '';
        
    },
    render: function () {
        return (
            React.createElement("form", {className: "employeeForm", onSubmit: this.handleSubmit}, 
                React.createElement("input", {type: "text", placeholder: "Employee name", ref: "name"}), 
                React.createElement("input", {type: "submit", value: "Post"})
            )
        );
    }
});

var Employee = React.createClass({displayName: "Employee",
    render: function () {
       
        return (
            React.createElement("div", {className: "employee"}, 
            	React.createElement("span", null, this.props.id),
                React.createElement("span", null, this.props.name)
               
            )
        );
    }
});

var Employees = React.createClass({displayName: "Employees",
    render: function () {
        var employeeNodes = this.props.data.map(function (employee, index) {
            return (
                React.createElement(Employee, {name: employee.name, id: employee.id}
               )
            );
        });
        return (
            React.createElement("div", {className: "employeeList"}, 
            		employeeNodes
            )
        );
    }
});

var EmployeeList = React.createClass({displayName: "EmployeeList",
	 handleEmployeeSubmit: function (employee) {
	        var employees = this.state.data;
	        employees.push(employee);
	        this.setState({data: employees}, function () {
	            $.ajax({
	                url: this.props.url,
	                dataType: 'json',
	                type: 'POST',
	                data: employee,
	                success: function (data) {
	                    this.setState({data: data});
	                }.bind(this),
	                error: function (xhr, status, err) {
	                    console.error(this.props.url, status, err.toString());
	                }.bind(this)
	            });
	        });
	    },
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
    	data = [];
        var newData = data.concat([this.props.data]);  
        return {data: newData};
    },
    componentDidMount: function () {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    render: function () {
        return (
            React.createElement("div", {className: "employeeList"}, 
                React.createElement("h1", null, "Employees"), 
                React.createElement(EmployeeForm, {onEmployeeSubmit: this.handleEmployeeSubmit}),
                React.createElement(Employees, {data: this.state.data})
                
            )
        );
    }
});

var renderClient = function (employeeList) {
    var data = employeeList || [];
    React.render(
        React.createElement(EmployeeList, {data: data, url: "employees", pollInterval: 5000}),
        document.getElementById("content")
    );
};

var renderServer = function (employeeList) {
    var data = Java.from(employeeList);
    return React.renderToString(
        React.createElement(EmployeeList, {data: data, url: "employees", pollInterval: 5000})
    );
};