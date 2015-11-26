// Code goes here
var HeaderComponent = React.createClass({
  render: function() {
    return (

      <header className="col-sm-12">
        <a href="#"  />
      </header>
    );
  }
});
var SignInComponent = React.createClass({
  render: function() {
    return (

      <div className="col-xs-11 col-xs-offset-1 col-sm-5 sign-in">
        {/*left col starts*/}
        <h2>Sign in to your account</h2>
        <form className="form-inline" role="form">
          <div className="form-group col-xs-11 col-sm-11">
            <label className="sr-only" htmlFor="email">Email</label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group col-xs-11  col-sm-11">
            <label className="sr-only" htmlFor="pass">Password</label>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-green col-xs-11 col-sm-8">Sign in</button>
          <div className="clearfix" />
          <p className="forgot-credentials">
            <a href="#" className="link">Forgot email?</a> | <a href="#" className="link">Forgot password?</a>
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

var SignUpComponent = React.createClass({
  render: function() {
    return (

      <div className="hidden-xs col-sm-5 sign-up">
        {/*right col starts*/}
        <h2 className="col-sm-offset-1">Already a member?</h2>
        <h3 className="col-sm-offset-1">Sign up for a SamsClub.com account.</h3>
        <form className="form-inline" role="form">
          <div className="form-group col-xs-12 col-sm-11 col-sm-offset-1">
            <label className="sr-only" htmlFor="membershipNum">Membership number</label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group col-xs-12 col-sm-11 col-sm-offset-1">
            <label className="sr-only" htmlFor="zipCode">Zip Code</label>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <p className="contact-info col-sm-offset-1">
            <span className="call-us">Your ZIP Code must match your current account information.</span>
            <a href="#" className="link">Use your phone number instead?</a>
          </p>
          <button type="submit" className="btn btn-dk-green col-xs-12 col-sm-8 col-sm-offset-1">Continue</button>
        </form>
        {/*right col ends*/}
      </div>
    );
  }
});

var MiddleRow = React.createClass({
  render: function() {
    return (
      <div class="row">
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
          <h4>New to Sam’s Club?</h4>
          <p className="offer">Non-members pay 10% more than members. <a href="#">Join now</a></p>
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
	     	<div class="container login-page">
	     		<MiddleRow/>
	     		<div class="clearfix"></div>
	     		<OfferRow/>
	     		<FooterComponent/>
	     	</div>
	     </div>
	    );
	  }
});


var renderClient = function () {
	React.render(
			  <LoginPage/>,
			  document.getElementById('content')
			);
};

var renderServer = function () {
    
    return React.renderToString(
        React.createElement(EmployeeList, {data: data, url: "employees", pollInterval: 5000})
    );
};