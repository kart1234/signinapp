// Code goes here

"use strict";

var trim = (function () {
  var TRIM_RE = /^\s+|\s+$/g;
  return function trim(string) {
    return string.replace(TRIM_RE, '');
  };
})();

var InputComponent = React.createClass({
  displayName: "InputComponent",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "hightxt" },
        this.props.errors
      ),
      React.createElement(
        "div",
        { className: this.props.classes },
        React.createElement(
          "label",
          { className: "sr-only", htmlFor: this.props.htmlFor },
          this.props.label
        ),
        React.createElement("input", { type: this.props.type, className: "form-control", placeholder: this.props.placeholder, name: this.props.name })
      )
    );
  }
});

var ButtonComponent = React.createClass({
  displayName: "ButtonComponent",

  render: function render() {
    return React.createElement(
      "button",
      { type: this.props.type, disabled: this.props.disabled, className: this.props.classes, onClick: this.props.onClickHandler },
      this.props.text
    );
  }
});

var HeaderComponent = React.createClass({
  displayName: "HeaderComponent",

  render: function render() {
    return React.createElement(
      "header",
      { className: "col-sm-12" },
      React.createElement("a", { href: "#" })
    );
  }
});

var LinkComponent = React.createClass({
  displayName: "LinkComponent",

  render: function render() {
    return React.createElement(
      "a",
      { href: this.props.href, className: "link" },
      this.props.linkText
    );
  }
});
var SignInComponent = React.createClass({
  displayName: "SignInComponent",

  getInitialState: function getInitialState() {
    return { errors: {},
      emailId: "",
      password: ""
    };
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    this.isValid();
  },
  isValid: function isValid() {
    var fields = ["emailId", "password"];
    var errors = {};
    var emailValue = trim(React.findDOMNode(this.refs["emailId"]).childNodes[1].childNodes[1].value);
    var passwordValue = trim(React.findDOMNode(this.refs["password"]).childNodes[1].childNodes[1].value);
    if (!emailValue || !this.validateEmail(emailValue)) {
      errors["emailId"] = 'Please enter valid email id';
    }
    if (!passwordValue) {
      errors["password"] = 'Please enter correct password';
    }
    this.setState({ errors: errors });
    this.props.onFormSubmit({
      email: emailValue,
      password: passwordValue
    }, function (data) {
      this.setState({ message: data });
    });
  },
  validateEmail: function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  },
  render: function render() {
    var errorDiv;
    if (Object.keys(this.state.errors).length != 0) {
      errorDiv = React.createElement(
        "div",
        { className: "hightxt" },
        "Please enter valid information"
      );
    }
    return React.createElement(
      "div",
      { className: "col-xs-11 col-xs-offset-1 col-sm-5 sign-in" },
      errorDiv,
      React.createElement(
        "h2",
        null,
        "Sign in to your account"
      ),
      React.createElement(
        "form",
        { className: "form-inline", role: "form" },
        React.createElement(InputComponent, { errors: this.state.errors["emailId"], classes: "emailId" in this.state.errors ? 'form-group col-xs-11 col-sm-11 highlightTextinp' : 'form-group col-xs-11 col-sm-11', htmlFor: "email", type: "email", placeholder: "Email", label: "Email", name: "emailId", ref: "emailId" }),
        React.createElement(InputComponent, { errors: this.state.errors["password"], classes: "password" in this.state.errors ? 'form-group col-xs-11 col-sm-11 highlightTextinp' : 'form-group col-xs-11 col-sm-11', htmlFor: "pass", type: "password", placeholder: "Password", label: "Password", name: "password", ref: "password" }),
        React.createElement(ButtonComponent, { type: "submit", classes: "btn btn-green col-xs-11 col-sm-8", text: "Sign in", onClickHandler: this.handleSubmit }),
        React.createElement("div", { className: "clearfix" }),
        React.createElement(
          "p",
          { className: "forgot-credentials" },
          React.createElement(LinkComponent, { href: "#", linkText: "Forgot email?" }),
          " |  ",
          React.createElement(LinkComponent, { href: "#", linkText: "Forgot password?" })
        ),
        React.createElement(
          "p",
          { className: "contact-info" },
          React.createElement(
            "span",
            { className: "info-query" },
            "Have questions?"
          ),
          React.createElement(
            "span",
            { className: "call-us" },
            "Give us a call at 1-888-. "
          )
        )
      )
    );
  }
});

var SignUpComponent = React.createClass({
	displayName: "SignUpComponent",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "hidden-xs col-sm-5 sign-up" },
			React.createElement(
				"h2",
				{ className: "col-sm-offset-1" },
				"Already a member?"
			),
			React.createElement(
				"h3",
				{ className: "col-sm-offset-1" },
				"Sign up for an account."
			),
			React.createElement(
				"form",
				{ className: "form-inline", role: "form" },
				React.createElement(InputComponent, { classes: "form-group col-xs-12 col-sm-11 col-sm-offset-1", htmlFor: "membershipNum", type: "email", placeholder: "Email", label: "Membership number" }),
				React.createElement(InputComponent, { classes: "form-group col-xs-12 col-sm-11 col-sm-offset-1", htmlFor: "zipCode", type: "password", placeholder: "Password", label: "Zip Code" }),
				React.createElement(
					"p",
					{ className: "contact-info col-sm-offset-1" },
					React.createElement(
						"span",
						{ className: "call-us" },
						"Your ZIP Code must match your current account information."
					),
					React.createElement(LinkComponent, { href: "#", linkText: "Use your phone number instead?" })
				),
				React.createElement(ButtonComponent, { type: "submit", classes: "btn btn-dk-green col-xs-12 col-sm-8 col-sm-offset-1", text: "Continue" })
			)
		);
	}
});

var myform = React.createClass({
  displayName: "SignUpComponent",
  getInitialState: function getInitialState() {
    return {
      canSubmit: false
    };
  },
  enableButton: function enableButton() {
    this.setState({
      canSubmit: true
    });
  },
  disableButton: function disableButton() {
    this.setState({
      canSubmit: false
    });
  },
  submit: function submit(model) {
    someDep.saveEmail(model.signupemail);
    someDep.saveZipcode(model.zipcode);
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "hidden-xs col-sm-5 sign-up" },
      React.createElement(
        "h2",
        { className: "col-sm-offset-1" },
        "Already a member?"
      ),
      React.createElement(
        "h3",
        { className: "col-sm-offset-1" },
        "Sign up for a SamsClub.com account."
      ),
      React.createElement(
        Formsy.Form,
        { className: "form-inline", role: "form", onValidSubmit: this.submit, onValid: this.enableButton, onInvalid: this.disableButton },
        React.createElement(MyOwnInput, { name: "signupemail", validations: "isEmail", validationError: "This is not a valid email", required: true, classes: "form-group col-xs-12 col-sm-11 col-sm-offset-1", htmlFor: "membershipNum", type: "email", placeholder: "Email", label: "Membership number" }),
        React.createElement(MyOwnInput, { name: "zipcode", validations: "isNumeric,isLength:5", validationError: "Please enter valid zip code.", required: true, classes: "form-group col-xs-12 col-sm-11 col-sm-offset-1", htmlFor: "zipCode", type: "password", placeholder: "Zip Code", label: "Zip Code" }),
        React.createElement(
          "p",
          { className: "contact-info col-sm-offset-1" },
          React.createElement(
            "span",
            { className: "call-us" },
            "Your ZIP Code must match your current account information."
          ),
          React.createElement(LinkComponent, { href: "#", linkText: "Use your phone number instead?" })
        ),
        React.createElement(
          "button",
          { type: "submit", disabled: !this.state.canSubmit, className: "btn btn-dk-green col-xs-12 col-sm-8 col-sm-offset-1" },
          "Continue"
        )
      )
    );
  }
});

var MyOwnInput = React.createClass({
	  displayName: "MyOwnInput",

	  // Add the Formsy Mixin
	  //mixins: [Formsy.Mixin],

	  changeValue: function changeValue(event) {
	    //this.setValue(event.currentTarget.value);
	  },
	  render: function render() {

	    //var className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;

	    var errorMessage = this.getErrorMessage();

	   return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "div",
	        { className: "hightxt" },
	        errorMessage
	      ),
	      React.createElement(
	        "div",
	        { className: this.props.classes },
	        React.createElement(
	          "label",
	          { className: "sr-only", htmlFor: this.props.htmlFor },
	          this.props.label
	        ),
	        React.createElement("input", { type: this.props.type, className: "form-control", placeholder: this.props.placeholder, name: this.props.name, onChange: this.changeValue, value: this.getValue() })
	      )
	    );
	    
	  }
	});
var MiddleRow = React.createClass({
  displayName: "MiddleRow",

  render: function render() {
    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(SignInComponent, null),
      React.createElement(SignUpComponent, null)
    );
  }
});

var OfferRow = React.createClass({
  displayName: "OfferRow",

  render: function render() {
    return React.createElement(
      "div",
      { className: "row offer" },
      React.createElement(
        "div",
        { className: "offer-details col-xs-10 col-sm-10 col-xs-offset-1" },
        React.createElement(
          "h4",
          null,
          "New?"
        ),
        React.createElement(
          "p",
          { className: "offer" },
          "Non-members pay 10% more than members.  ",
          React.createElement(LinkComponent, { href: "#", linkText: "Join now" })
        )
      )
    );
  }
});

var FooterComponent = React.createClass({
  displayName: "FooterComponent",

  render: function render() {
    return React.createElement(
      "footer",
      null,
      React.createElement(
        "a",
        { href: "#" },
        "Privacy Policy"
      ),
      " | ",
      React.createElement(
        "a",
        { href: "#" },
        "Terms & Conditions"
      ),
      React.createElement(
        "p",
        null,
        "© 2000-2015, Sam's West, Inc. All rights reserved"
      )
    );
  }
});

var LoginPage = React.createClass({
  displayName: "LoginPage",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(HeaderComponent, null),
      React.createElement(
        "div",
        { className: "container login-page" },
        React.createElement(MiddleRow, null),
        React.createElement("div", { className: "clearfix" }),
        React.createElement(OfferRow, null)
      )
    );
  }
});


var renderClient = function renderClient() {
  React.render(React.createElement(LoginPage, null), document.getElementById('content'));
};

var renderServer = function renderServer() {

  return React.renderToString(React.createElement(LoginPage, null));
};
/*left col starts*/ /*left col ends*/ /*right col starts*/ /*right col ends*/