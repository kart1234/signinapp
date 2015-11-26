// Code goes here
var Formsy = require("formsy-react");
var trim = function() {
  var TRIM_RE = /^\s+|\s+$/g
  return function trim(string) {
    return string.replace(TRIM_RE, '')
  }
}();

var InputComponent = React.createClass({
  render: function() {
    return (
      <div>
        <div className="hightxt">{this.props.errors}</div>
        <div className={this.props.classes}>
            <label className="sr-only" htmlFor={this.props.htmlFor}>{this.props.label}</label>
            <input type={this.props.type} className="form-control" placeholder={this.props.placeholder} name={this.props.name} />
         </div>
       </div>
    );
  }
});

var ButtonComponent = React.createClass({
  render: function() {
    return (
      <button type={this.props.type} disabled={this.props.disabled} className={this.props.classes} onClick={this.props.onClickHandler}>{this.props.text}</button>
    );
  }
});

var HeaderComponent = React.createClass({
  render: function() {
    return (

      <header className="col-sm-12">
        <a href="#" className="samsClub-logo" />
      </header>
    );
  }
});

var LinkComponent = React.createClass({
  render: function() {
    return (
      <a href={this.props.href} className="link">{this.props.linkText}</a>
    );
  }
});
var SignInComponent = React.createClass({
  getInitialState: function() {
    return {errors: {},
            emailId:"",
            password:""
    }
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.isValid()
    
  },
  isValid: function(){
    var fields = ["emailId","password"];
    var errors = {}
    var emailValue = trim(React.findDOMNode(this.refs["emailId"]).childNodes[1].childNodes[1].value);
    var passwordValue = trim(React.findDOMNode(this.refs["password"]).childNodes[1].childNodes[1].value);
    if (!emailValue || !this.validateEmail(emailValue)) {
        errors["emailId"] = 'Please enter valid email id'
    }
    if(!passwordValue){
      errors["password"] = 'Please enter correct password'
    }
    this.setState({errors: errors})
    this.props.onFormSubmit({
      email: emailValue, 
      password: passwordValue
    }, function(data) {
      this.setState({ message: data });
    });
  },
  validateEmail: function(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  },
  render: function() {
    var errorDiv;
    if (Object.keys(this.state.errors).length != 0) {
      errorDiv = <div className="hightxt">Please enter valid information</div>;
    }
    return (
      
      <div className="col-xs-11 col-xs-offset-1 col-sm-5 sign-in">
       { errorDiv }
        {/*left col starts*/}
        <h2>Sign in to your account</h2>
        <form className="form-inline" role="form">
          
          <InputComponent errors={this.state.errors["emailId"]} classes={"emailId" in this.state.errors?'form-group col-xs-11 col-sm-11 highlightTextinp':'form-group col-xs-11 col-sm-11'} htmlFor="email" type="email" placeholder="Email" label="Email" name="emailId" ref="emailId"/>
          <InputComponent errors={this.state.errors["password"]} classes={"password" in this.state.errors?'form-group col-xs-11 col-sm-11 highlightTextinp':'form-group col-xs-11 col-sm-11'} htmlFor="pass" type="password" placeholder="Password" label="Password" name="password" ref="password"/>
          <ButtonComponent type="submit" classes="btn btn-green col-xs-11 col-sm-8" text="Sign in" onClickHandler={this.handleSubmit}/>
          <div className="clearfix" />
          <p className="forgot-credentials">
            <LinkComponent href="#" linkText="Forgot email?"/> |  <LinkComponent href="#" linkText="Forgot password?"/>
          </p>
          <p className="contact-info">
            <span className="info-query">Have questions?</span>
            <span className="call-us">Give us a call at 1-888-746-7726. </span>
          </p>
        </form>
        {/*left col ends*/}
      </div>
    );
  }
});

var MyOwnInput = React.createClass({

    // Add the Formsy Mixin
    mixins: [Formsy.Mixin],

    changeValue: function (event) {
      this.setValue(event.currentTarget.value);
    },
    render: function () {

      var className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;

      var errorMessage = this.getErrorMessage();

      return (
      <div>
          <div className="hightxt">{errorMessage}</div>
          <div className={this.props.classes}>
            <label className="sr-only" htmlFor={this.props.htmlFor}>{this.props.label}</label>
            <input type={this.props.type} className="form-control" placeholder={this.props.placeholder} name={this.props.name}  onChange={this.changeValue} value={this.getValue()} />
          </div>
       </div> 
      
      );
    }
});
 
var SignUpComponent = React.createClass({
    getInitialState: function () {
      return {
        canSubmit: false
      }
    },
    enableButton: function () {
      this.setState({
        canSubmit: true
      });
    },
    disableButton: function () {
      this.setState({
        canSubmit: false
      });
    },
    submit: function (model) {
      someDep.saveEmail(model.signupemail);
      someDep.saveZipcode(model.zipcode);
    },
    render: function () {
      return (
       
     <div className="hidden-xs col-sm-5 sign-up">
        <h2 className="col-sm-offset-1">Already a member?</h2>
        <h3 className="col-sm-offset-1">Sign up for a SamsClub.com account.</h3>
        <Formsy.Form className="form-inline" role="form" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
          <MyOwnInput name="signupemail" validations="isEmail" validationError="This is not a valid email" required classes="form-group col-xs-12 col-sm-11 col-sm-offset-1" htmlFor="membershipNum" type="email" placeholder="Email" label="Membership number"/>
          <MyOwnInput name="zipcode" validations="isNumeric,isLength:5" validationError="Please enter valid zip code." required classes="form-group col-xs-12 col-sm-11 col-sm-offset-1" htmlFor="zipCode" type="password" placeholder="Zip Code" label="Zip Code"/>
          <p className="contact-info col-sm-offset-1">
            <span className="call-us">Your ZIP Code must match your current account information.</span>
             <LinkComponent href="#" linkText="Use your phone number instead?"/>
          </p>
          <button type="submit" disabled={!this.state.canSubmit} className="btn btn-dk-green col-xs-12 col-sm-8 col-sm-offset-1">Continue</button>
        </Formsy.Form>
      </div>
       
      );
    }
});
 

var MiddleRow = React.createClass({
  render: function() {
    return (
      <div className="row">
       <SignInComponent/>
       <SignUpComponent/>
      </div>
    );
  }
});

var OfferRow = React.createClass({
  render: function() {
    return (

      <div className="row offer">
        <div className="offer-details col-xs-10 col-sm-10 col-xs-offset-1">
          <h4>New?</h4>
          <p className="offer">Non-members pay 10% more than members.  <LinkComponent href="#" linkText="Join now"/></p>
        </div>
      </div>
    );
  }
});

var FooterComponent = React.createClass({
  render: function() {
    return (

      <footer>
        <a href="#">Privacy Policy</a> | <a href="#">Terms &amp; Conditions</a>
        <p>© 2000-2015, Sam's West, Inc. All rights reserved</p>
      </footer>
    );
  }
});

var LoginPage = React.createClass({
  render: function() {
    return (

     <div>
  <HeaderComponent/>
  <div className="container login-page">
   <MiddleRow/>
   <div className="clearfix"></div>
   <OfferRow/>
   
  </div>
  </div>
    );
  }
});

var renderClient = function renderClient() {
  React.render(React.createElement(LoginPage, null), document.getElementById('content'));
};

var renderServer = function renderServer() {

  return React.renderToString(React.createElement(LoginPage, null));
};