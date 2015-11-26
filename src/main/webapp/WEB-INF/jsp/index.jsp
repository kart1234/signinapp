<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Sign In</title>
    <script type="text/javascript" src="vendor/react.js"></script>
    <script type="text/javascript" src="vendor/require.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.10.0.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="css/sign-in.css">
	<script type="text/javascript" src="vendor/formsy-react.js"></script>
	<script>
    (function(d) {
      var config = {
        kitId: 'mkj5tsx',
        scriptTimeout: 3000
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//fonts.walmart.com/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);

    //hubble tracking
    var _bcq = _bcq || [];
    _bcq.push(['_setOptions', {
        start_time: (new Date()).getTime(),
        bh: 'beacon.samsclub.com'
    }]);
    
    var itemArrayJson = [];
  </script>  
</head>
<body>
<div id="content">${content}</div>
<script type="text/javascript" src="login.js"></script>
<script type="text/javascript">
    $(function () {
        renderClient(${data});
    });
</script>
</body>
</html>