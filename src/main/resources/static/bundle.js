/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Application = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Application"] = __webpack_require__(2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// Code goes here
	"use strict";

	var Formsy = __webpack_require__(3);
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
	      React.createElement("a", { href: "#", className: "samsClub-logo" })
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
	            "Give us a call at 1-888-746-7726. "
	          )
	        )
	      )
	    );
	  }
	});

	var MyOwnInput = React.createClass({
	  displayName: "MyOwnInput",

	  // Add the Formsy Mixin
	  mixins: [Formsy.Mixin],

	  changeValue: function changeValue(event) {
	    this.setValue(event.currentTarget.value);
	  },
	  render: function render() {

	    var className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;

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

	var SignUpComponent = React.createClass({
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
	          "New to Sam’s Club?"
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
	        React.createElement(OfferRow, null),
	        React.createElement(FooterComponent, null)
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
	/*left col starts*/ /*left col ends*/

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = global.React || __webpack_require__(4);
	var Formsy = {};
	var validationRules = __webpack_require__(5);
	var formDataToObject = __webpack_require__(6);
	var utils = __webpack_require__(7);
	var Mixin = __webpack_require__(8);
	var HOC = __webpack_require__(9);
	var Decorator = __webpack_require__(10);
	var options = {};

	Formsy.Mixin = Mixin;
	Formsy.HOC = HOC;
	Formsy.Decorator = Decorator;

	Formsy.defaults = function (passedOptions) {
	  options = passedOptions;
	};

	Formsy.addValidationRule = function (name, func) {
	  validationRules[name] = func;
	};

	Formsy.Form = React.createClass({
	  displayName: 'Formsy',
	  getInitialState: function getInitialState() {
	    return {
	      isValid: true,
	      isSubmitting: false,
	      canChange: false
	    };
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onSuccess: function onSuccess() {},
	      onError: function onError() {},
	      onSubmit: function onSubmit() {},
	      onValidSubmit: function onValidSubmit() {},
	      onInvalidSubmit: function onInvalidSubmit() {},
	      onSubmitted: function onSubmitted() {},
	      onValid: function onValid() {},
	      onInvalid: function onInvalid() {},
	      onChange: function onChange() {},
	      validationErrors: null,
	      preventExternalInvalidation: false
	    };
	  },

	  childContextTypes: {
	    formsy: React.PropTypes.object
	  },
	  getChildContext: function getChildContext() {
	    return {
	      formsy: {
	        attachToForm: this.attachToForm,
	        detachFromForm: this.detachFromForm,
	        validate: this.validate,
	        isFormDisabled: this.isFormDisabled,
	        isValidValue: (function (component, value) {
	          return this.runValidation(component, value).isValid;
	        }).bind(this)
	      }
	    };
	  },

	  // Add a map to store the inputs of the form, a model to store
	  // the values of the form and register child inputs
	  componentWillMount: function componentWillMount() {
	    this.inputs = {};
	    this.model = {};
	  },

	  componentDidMount: function componentDidMount() {
	    this.validateForm();
	  },

	  componentWillUpdate: function componentWillUpdate() {

	    // Keep a reference to input keys before form updates,
	    // to check if inputs has changed after render
	    this.prevInputKeys = Object.keys(this.inputs);
	  },

	  componentDidUpdate: function componentDidUpdate() {

	    if (this.props.validationErrors) {
	      this.setInputValidationErrors(this.props.validationErrors);
	    }

	    var newInputKeys = Object.keys(this.inputs);
	    if (utils.arraysDiffer(this.prevInputKeys, newInputKeys)) {
	      this.validateForm();
	    }
	  },

	  // Allow resetting to specified data
	  reset: function reset(data) {
	    this.setFormPristine(true);
	    this.resetModel(data);
	  },

	  // Update model, submit to url prop and send the model
	  submit: function submit(event) {

	    event && event.preventDefault();

	    // Trigger form as not pristine.
	    // If any inputs have not been touched yet this will make them dirty
	    // so validation becomes visible (if based on isPristine)
	    this.setFormPristine(false);
	    this.updateModel();
	    var model = this.mapModel();
	    this.props.onSubmit(model, this.resetModel, this.updateInputsWithError);
	    this.state.isValid ? this.props.onValidSubmit(model, this.resetModel, this.updateInputsWithError) : this.props.onInvalidSubmit(model, this.resetModel, this.updateInputsWithError);
	  },

	  mapModel: function mapModel() {
	    if (this.props.mapping) {
	      return this.props.mapping(this.model);
	    } else {
	      return formDataToObject(Object.keys(this.model).reduce((function (mappedModel, key) {

	        var keyArray = key.split('.');
	        var base = mappedModel;
	        while (keyArray.length) {
	          var currentKey = keyArray.shift();
	          base = base[currentKey] = keyArray.length ? base[currentKey] || {} : this.model[key];
	        }

	        return mappedModel;
	      }).bind(this), {}));
	    }
	  },

	  // Goes through all registered components and
	  // updates the model values
	  updateModel: function updateModel() {
	    Object.keys(this.inputs).forEach((function (name) {
	      var component = this.inputs[name];
	      this.model[name] = component.state._value;
	    }).bind(this));
	  },

	  // Reset each key in the model to the original / initial / specified value
	  resetModel: function resetModel(data) {
	    Object.keys(this.inputs).forEach((function (name) {
	      if (data && data[name]) {
	        this.inputs[name].setValue(data[name]);
	      } else {
	        this.inputs[name].resetValue();
	      }
	    }).bind(this));
	    this.validateForm();
	  },

	  setInputValidationErrors: function setInputValidationErrors(errors) {
	    Object.keys(this.inputs).forEach((function (name, index) {
	      var component = this.inputs[name];
	      var args = [{
	        _isValid: !(name in errors),
	        _validationError: typeof errors[name] === 'string' ? [errors[name]] : errors[name]
	      }];
	      component.setState.apply(component, args);
	    }).bind(this));
	  },

	  // Checks if the values have changed from their initial value
	  isChanged: function isChanged() {
	    return !utils.isSame(this.getPristineValues(), this.getCurrentValues());
	  },

	  getPristineValues: function getPristineValues() {
	    var inputs = this.inputs;
	    return Object.keys(inputs).reduce(function (data, name) {
	      var component = inputs[name];
	      data[name] = component.props.value;
	      return data;
	    }, {});
	  },

	  // Go through errors from server and grab the components
	  // stored in the inputs map. Change their state to invalid
	  // and set the serverError message
	  updateInputsWithError: function updateInputsWithError(errors) {
	    Object.keys(errors).forEach((function (name, index) {
	      var component = this.inputs[name];

	      if (!component) {
	        throw new Error('You are trying to update an input that does not exist. Verify errors object with input names. ' + JSON.stringify(errors));
	      }
	      var args = [{
	        _isValid: this.props.preventExternalInvalidation || false,
	        _externalError: typeof errors[name] === 'string' ? [errors[name]] : errors[name]
	      }];
	      component.setState.apply(component, args);
	    }).bind(this));
	  },

	  isFormDisabled: function isFormDisabled() {
	    return this.props.disabled;
	  },

	  getCurrentValues: function getCurrentValues() {
	    return Object.keys(this.inputs).reduce((function (data, name) {
	      var component = this.inputs[name];
	      data[name] = component.state._value;
	      return data;
	    }).bind(this), {});
	  },

	  setFormPristine: function setFormPristine(isPristine) {
	    var inputs = this.inputs;
	    var inputKeys = Object.keys(inputs);

	    this.setState({
	      _formSubmitted: !isPristine
	    });

	    // Iterate through each component and set it as pristine
	    // or "dirty".
	    inputKeys.forEach((function (name, index) {
	      var component = inputs[name];
	      component.setState({
	        _formSubmitted: !isPristine,
	        _isPristine: isPristine
	      });
	    }).bind(this));
	  },

	  // Use the binded values and the actual input value to
	  // validate the input and set its state. Then check the
	  // state of the form itself
	  validate: function validate(component) {

	    // Trigger onChange
	    if (this.state.canChange) {
	      this.props.onChange(this.getCurrentValues(), this.isChanged());
	    }

	    var validation = this.runValidation(component);
	    // Run through the validations, split them up and call
	    // the validator IF there is a value or it is required
	    component.setState({
	      _isValid: validation.isValid,
	      _isRequired: validation.isRequired,
	      _validationError: validation.error,
	      _externalError: null
	    }, this.validateForm);
	  },

	  // Checks validation on current value or a passed value
	  runValidation: function runValidation(component, value) {

	    var currentValues = this.getCurrentValues();
	    var validationErrors = component.props.validationErrors;
	    var validationError = component.props.validationError;
	    value = arguments.length === 2 ? value : component.state._value;

	    var validationResults = this.runRules(value, currentValues, component._validations);
	    var requiredResults = this.runRules(value, currentValues, component._requiredValidations);

	    // the component defines an explicit validate function
	    if (typeof component.validate === "function") {
	      validationResults.failed = component.validate() ? [] : ['failed'];
	    }

	    var isRequired = Object.keys(component._requiredValidations).length ? !!requiredResults.success.length : false;
	    var isValid = !validationResults.failed.length && !(this.props.validationErrors && this.props.validationErrors[component.props.name]);

	    return {
	      isRequired: isRequired,
	      isValid: isRequired ? false : isValid,
	      error: (function () {

	        if (isValid && !isRequired) {
	          return [];
	        }

	        if (validationResults.errors.length) {
	          return validationResults.errors;
	        }

	        if (this.props.validationErrors && this.props.validationErrors[component.props.name]) {
	          return typeof this.props.validationErrors[component.props.name] === 'string' ? [this.props.validationErrors[component.props.name]] : this.props.validationErrors[component.props.name];
	        }

	        if (isRequired) {
	          var error = validationErrors[requiredResults.success[0]];
	          return error ? [error] : null;
	        }

	        if (validationResults.failed.length) {
	          return validationResults.failed.map(function (failed) {
	            return validationErrors[failed] ? validationErrors[failed] : validationError;
	          }).filter(function (x, pos, arr) {
	            // Remove duplicates
	            return arr.indexOf(x) === pos;
	          });
	        }
	      }).call(this)
	    };
	  },

	  runRules: function runRules(value, currentValues, validations) {

	    var results = {
	      errors: [],
	      failed: [],
	      success: []
	    };
	    if (Object.keys(validations).length) {
	      Object.keys(validations).forEach(function (validationMethod) {

	        if (validationRules[validationMethod] && typeof validations[validationMethod] === 'function') {
	          throw new Error('Formsy does not allow you to override default validations: ' + validationMethod);
	        }

	        if (!validationRules[validationMethod] && typeof validations[validationMethod] !== 'function') {
	          throw new Error('Formsy does not have the validation rule: ' + validationMethod);
	        }

	        if (typeof validations[validationMethod] === 'function') {
	          var validation = validations[validationMethod](currentValues, value);
	          if (typeof validation === 'string') {
	            results.errors.push(validation);
	            results.failed.push(validationMethod);
	          } else if (!validation) {
	            results.failed.push(validationMethod);
	          }
	          return;
	        } else if (typeof validations[validationMethod] !== 'function') {
	          var validation = validationRules[validationMethod](currentValues, value, validations[validationMethod]);
	          if (typeof validation === 'string') {
	            results.errors.push(validation);
	            results.failed.push(validationMethod);
	          } else if (!validation) {
	            results.failed.push(validationMethod);
	          } else {
	            results.success.push(validationMethod);
	          }
	          return;
	        }

	        return results.success.push(validationMethod);
	      });
	    }

	    return results;
	  },

	  // Validate the form by going through all child input components
	  // and check their state
	  validateForm: function validateForm() {
	    var allIsValid;
	    var inputs = this.inputs;
	    var inputKeys = Object.keys(inputs);

	    // We need a callback as we are validating all inputs again. This will
	    // run when the last component has set its state
	    var onValidationComplete = (function () {
	      allIsValid = inputKeys.every((function (name) {
	        return inputs[name].state._isValid;
	      }).bind(this));

	      this.setState({
	        isValid: allIsValid
	      });

	      if (allIsValid) {
	        this.props.onValid();
	      } else {
	        this.props.onInvalid();
	      }

	      // Tell the form that it can start to trigger change events
	      this.setState({
	        canChange: true
	      });
	    }).bind(this);

	    // Run validation again in case affected by other inputs. The
	    // last component validated will run the onValidationComplete callback
	    inputKeys.forEach((function (name, index) {
	      var component = inputs[name];
	      var validation = this.runValidation(component);
	      if (validation.isValid && component.state._externalError) {
	        validation.isValid = false;
	      }
	      component.setState({
	        _isValid: validation.isValid,
	        _isRequired: validation.isRequired,
	        _validationError: validation.error,
	        _externalError: !validation.isValid && component.state._externalError ? component.state._externalError : null
	      }, index === inputKeys.length - 1 ? onValidationComplete : null);
	    }).bind(this));

	    // If there are no inputs, set state where form is ready to trigger
	    // change event. New inputs might be added later
	    if (!inputKeys.length && this.isMounted()) {
	      this.setState({
	        canChange: true
	      });
	    }
	  },

	  // Method put on each input component to register
	  // itself to the form
	  attachToForm: function attachToForm(component) {
	    this.inputs[component.props.name] = component;
	    this.model[component.props.name] = component.state._value;
	    this.validate(component);
	  },

	  // Method put on each input component to unregister
	  // itself from the form
	  detachFromForm: function detachFromForm(component) {
	    delete this.inputs[component.props.name];
	    delete this.model[component.props.name];
	    this.validateForm();
	  },
	  render: function render() {

	    return React.createElement(
	      'form',
	      _extends({}, this.props, { onSubmit: this.submit }),
	      this.props.children
	    );
	  }
	});

	if (!global.exports && !global.module && (!global.define || !global.define.amd)) {
	  global.Formsy = Formsy;
	}

	module.exports = Formsy;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	var _isExisty = function _isExisty(value) {
	  return value !== null && value !== undefined;
	};

	var isEmpty = function isEmpty(value) {
	  return value === '';
	};

	var validations = {
	  isDefaultRequiredValue: function isDefaultRequiredValue(values, value) {
	    return value === undefined || value === '';
	  },
	  isExisty: function isExisty(values, value) {
	    return _isExisty(value);
	  },
	  matchRegexp: function matchRegexp(values, value, regexp) {
	    return !_isExisty(value) || isEmpty(value) || regexp.test(value);
	  },
	  isUndefined: function isUndefined(values, value) {
	    return value === undefined;
	  },
	  isEmptyString: function isEmptyString(values, value) {
	    return isEmpty(value);
	  },
	  isEmail: function isEmail(values, value) {
	    return validations.matchRegexp(values, value, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i);
	  },
	  isUrl: function isUrl(values, value) {
	    return validations.matchRegexp(values, value, /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i);
	  },
	  isTrue: function isTrue(values, value) {
	    return value === true;
	  },
	  isFalse: function isFalse(values, value) {
	    return value === false;
	  },
	  isNumeric: function isNumeric(values, value) {
	    if (typeof value === 'number') {
	      return true;
	    }
	    return validations.matchRegexp(values, value, /^[-+]?(?:\d*[.])?\d+$/);
	  },
	  isAlpha: function isAlpha(values, value) {
	    return validations.matchRegexp(values, value, /^[A-Z]+$/i);
	  },
	  isAlphanumeric: function isAlphanumeric(values, value) {
	    return validations.matchRegexp(values, value, /^[0-9A-Z]+$/i);
	  },
	  isInt: function isInt(values, value) {
	    return validations.matchRegexp(values, value, /^(?:[-+]?(?:0|[1-9]\d*))$/);
	  },
	  isFloat: function isFloat(values, value) {
	    return validations.matchRegexp(values, value, /^(?:[-+]?(?:\d+))?(?:\.\d*)?(?:[eE][\+\-]?(?:\d+))?$/);
	  },
	  isWords: function isWords(values, value) {
	    return validations.matchRegexp(values, value, /^[A-Z\s]+$/i);
	  },
	  isSpecialWords: function isSpecialWords(values, value) {
	    return validations.matchRegexp(values, value, /^[A-Z\s\u00C0-\u017F]+$/i);
	  },
	  isLength: function isLength(values, value, length) {
	    return !_isExisty(value) || isEmpty(value) || value.length === length;
	  },
	  equals: function equals(values, value, eql) {
	    return !_isExisty(value) || isEmpty(value) || value == eql;
	  },
	  equalsField: function equalsField(values, value, field) {
	    return value == values[field];
	  },
	  maxLength: function maxLength(values, value, length) {
	    return !_isExisty(value) || value.length <= length;
	  },
	  minLength: function minLength(values, value, length) {
	    return !_isExisty(value) || isEmpty(value) || value.length >= length;
	  }
	};

	module.exports = validations;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function (source) {


	  // "foo[0]"
	  return Object.keys(source).reduce(function (output, key) {

	    var parentKey = key.match(/[^\[]*/i);
	    var paths = key.match(/\[.*?\]/g) || [];
	    paths = [parentKey[0]].concat(paths).map(function (key) {
	      return key.replace(/\[|\]/g, '');
	    });

	    var currentPath = output;
	    while (paths.length) {

	      var pathKey = paths.shift();

	      if (pathKey in currentPath) {
	        currentPath = currentPath[pathKey];
	      } else {
	        currentPath[pathKey] = paths.length ? isNaN(paths[0]) ? {} : [] : source[key];
	        currentPath = currentPath[pathKey];
	      }

	    }

	    return output;

	  }, {});

	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  arraysDiffer: function arraysDiffer(a, b) {
	    var isDifferent = false;
	    if (a.length !== b.length) {
	      isDifferent = true;
	    } else {
	      a.forEach(function (item, index) {
	        if (!this.isSame(item, b[index])) {
	          isDifferent = true;
	        }
	      }, this);
	    }
	    return isDifferent;
	  },

	  objectsDiffer: function objectsDiffer(a, b) {
	    var isDifferent = false;
	    if (Object.keys(a).length !== Object.keys(b).length) {
	      isDifferent = true;
	    } else {
	      Object.keys(a).forEach(function (key) {
	        if (!this.isSame(a[key], b[key])) {
	          isDifferent = true;
	        }
	      }, this);
	    }
	    return isDifferent;
	  },

	  isSame: function isSame(a, b) {
	    if (typeof a !== typeof b) {
	      return false;
	    } else if (Array.isArray(a)) {
	      return !this.arraysDiffer(a, b);
	    } else if (typeof a === 'object' && a !== null && b !== null) {
	      return !this.objectsDiffer(a, b);
	    }

	    return a === b;
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var utils = __webpack_require__(7);
	var React = global.React || __webpack_require__(4);

	var convertValidationsToObject = function convertValidationsToObject(validations) {

	  if (typeof validations === 'string') {

	    return validations.split(/\,(?![^{\[]*[}\]])/g).reduce(function (validations, validation) {
	      var args = validation.split(':');
	      var validateMethod = args.shift();

	      args = args.map(function (arg) {
	        try {
	          return JSON.parse(arg);
	        } catch (e) {
	          return arg; // It is a string if it can not parse it
	        }
	      });

	      if (args.length > 1) {
	        throw new Error('Formsy does not support multiple args on string validations. Use object format of validations instead.');
	      }

	      validations[validateMethod] = args.length ? args[0] : true;
	      return validations;
	    }, {});
	  }

	  return validations || {};
	};

	module.exports = {
	  getInitialState: function getInitialState() {
	    return {
	      _value: this.props.value,
	      _isRequired: false,
	      _isValid: true,
	      _isPristine: true,
	      _pristineValue: this.props.value,
	      _validationError: [],
	      _externalError: null,
	      _formSubmitted: false
	    };
	  },
	  contextTypes: {
	    formsy: React.PropTypes.object // What about required?
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      validationError: '',
	      validationErrors: {}
	    };
	  },

	  componentWillMount: function componentWillMount() {
	    var configure = (function () {
	      this.setValidations(this.props.validations, this.props.required);

	      // Pass a function instead?
	      this.context.formsy.attachToForm(this);
	      //this.props._attachToForm(this);
	    }).bind(this);

	    if (!this.props.name) {
	      throw new Error('Form Input requires a name property when used');
	    }

	    /*
	    if (!this.props._attachToForm) {
	      return setTimeout(function () {
	        if (!this.isMounted()) return;
	        if (!this.props._attachToForm) {
	          throw new Error('Form Mixin requires component to be nested in a Form');
	        }
	        configure();
	      }.bind(this), 0);
	    }
	    */
	    configure();
	  },

	  // We have to make the validate method is kept when new props are added
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setValidations(nextProps.validations, nextProps.required);
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps) {

	    // If the value passed has changed, set it. If value is not passed it will
	    // internally update, and this will never run
	    if (!utils.isSame(this.props.value, prevProps.value)) {
	      this.setValue(this.props.value);
	    }

	    // If validations or required is changed, run a new validation
	    if (!utils.isSame(this.props.validations, prevProps.validations) || !utils.isSame(this.props.required, prevProps.required)) {
	      this.context.formsy.validate(this);
	    }
	  },

	  // Detach it when component unmounts
	  componentWillUnmount: function componentWillUnmount() {
	    this.context.formsy.detachFromForm(this);
	    //this.props._detachFromForm(this);
	  },

	  setValidations: function setValidations(validations, required) {

	    // Add validations to the store itself as the props object can not be modified
	    this._validations = convertValidationsToObject(validations) || {};
	    this._requiredValidations = required === true ? { isDefaultRequiredValue: true } : convertValidationsToObject(required);
	  },

	  // We validate after the value has been set
	  setValue: function setValue(value) {
	    this.setState({
	      _value: value,
	      _isPristine: false
	    }, (function () {
	      this.context.formsy.validate(this);
	      //this.props._validate(this);
	    }).bind(this));
	  },
	  resetValue: function resetValue() {
	    this.setState({
	      _value: this.state._pristineValue,
	      _isPristine: true
	    }, function () {
	      this.context.formsy.validate(this);
	      //this.props._validate(this);
	    });
	  },
	  getValue: function getValue() {
	    return this.state._value;
	  },
	  hasValue: function hasValue() {
	    return this.state._value !== '';
	  },
	  getErrorMessage: function getErrorMessage() {
	    var messages = this.getErrorMessages();
	    return messages.length ? messages[0] : null;
	  },
	  getErrorMessages: function getErrorMessages() {
	    return !this.isValid() || this.showRequired() ? this.state._externalError || this.state._validationError || [] : [];
	  },
	  isFormDisabled: function isFormDisabled() {
	    return this.context.formsy.isFormDisabled();
	    //return this.props._isFormDisabled();
	  },
	  isValid: function isValid() {
	    return this.state._isValid;
	  },
	  isPristine: function isPristine() {
	    return this.state._isPristine;
	  },
	  isFormSubmitted: function isFormSubmitted() {
	    return this.state._formSubmitted;
	  },
	  isRequired: function isRequired() {
	    return !!this.props.required;
	  },
	  showRequired: function showRequired() {
	    return this.state._isRequired;
	  },
	  showError: function showError() {
	    return !this.showRequired() && !this.isValid();
	  },
	  isValidValue: function isValidValue(value) {
	    return this.context.formsy.isValidValue.call(null, this, value);
	    //return this.props._isValidValue.call(null, this, value);
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = global.React || __webpack_require__(4);
	var Mixin = __webpack_require__(8);
	module.exports = function (Component) {
	  return React.createClass({
	    mixins: [Mixin],
	    render: function render() {
	      return React.createElement(Component, _extends({
	        setValidations: this.setValidations,
	        setValue: this.setValue,
	        resetValue: this.resetValue,
	        getValue: this.getValue,
	        hasValue: this.hasValue,
	        getErrorMessage: this.getErrorMessage,
	        getErrorMessages: this.getErrorMessages,
	        isFormDisabled: this.isFormDisabled,
	        isValid: this.isValid,
	        isPristine: this.isPristine,
	        isFormSubmitted: this.isFormSubmitted,
	        isRequired: this.isRequired,
	        showRequired: this.showRequired,
	        showError: this.showError,
	        isValidValue: this.isValidValue
	      }, this.props));
	    }
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = global.React || __webpack_require__(4);
	var Mixin = __webpack_require__(8);
	module.exports = function () {
	  return function (Component) {
	    return React.createClass({
	      mixins: [Mixin],
	      render: function render() {
	        return React.createElement(Component, _extends({
	          setValidations: this.setValidations,
	          setValue: this.setValue,
	          resetValue: this.resetValue,
	          getValue: this.getValue,
	          hasValue: this.hasValue,
	          getErrorMessage: this.getErrorMessage,
	          getErrorMessages: this.getErrorMessages,
	          isFormDisabled: this.isFormDisabled,
	          isValid: this.isValid,
	          isPristine: this.isPristine,
	          isFormSubmitted: this.isFormSubmitted,
	          isRequired: this.isRequired,
	          showRequired: this.showRequired,
	          showError: this.showError,
	          isValidValue: this.isValidValue
	        }, this.props));
	      }
	    });
	  };
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);
var renderClient = function renderClient() {
	  React.render(React.createElement(LoginPage, null), document.getElementById('content'));
	};

	var renderServer = function renderServer() {

	  return React.renderToString(React.createElement(LoginPage, null));
	};