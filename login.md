---
layout: default
title: login
permalink: /login/
---
<html>
<head>
<style>
#formContainer{
    width:288px;
    height:321px;
    margin:0 auto;
    position:relative;
    moz-perspective: 800px;
    webkit-perspective: 800px;
    perspective: 800px;
}
#formContainer form{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;

    /* Enabling 3d space for the transforms */
    moz-transform-style: preserve-3d;
    webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;

    /* When the forms are flipped, they will be hidden */
    moz-backface-visibility: hidden;
    webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    /* Enabling a smooth animated transition */
    moz-transition:0.8s;
    webkit-transition:0.8s;
    transition:0.8s;

    /* Configure a keyframe animation for Firefox */
    moz-animation: pulse 2s infinite;

    /* Configure it for Chrome and Safari */
    webkit-animation: pulse 2s infinite;
}

#formContainer.flipped #login{

    opacity:0;

    /**
     * Rotating the login form when the
     * flipped class is added to the container
     */

    moz-transform:rotateY(-180deg);
    webkit-transform:rotateY(-180deg);
    transform:rotateY(-180deg);
}

#formContainer.flipped #recover{

    opacity:1;

    /* Rotating the recover div into view */
    moz-transform:rotateY(0deg);
    webkit-transform:rotateY(0deg);
    transform:rotateY(0deg);
}

#login{
    background:url('../img/login_form_bg.jpg') no-repeat;
    z-index:100;
}

#recover{
    background:url('../img/recover_form_bg.jpg') no-repeat;
    z-index:1;
    opacity:0;

    /* Rotating the recover password form by default */
    moz-transform:rotateY(180deg);
    webkit-transform:rotateY(180deg);
    transform:rotateY(180deg);
}

/* Firefox Keyframe Animation */
@-moz-keyframes pulse{
    0%{		box-shadow:0 0 1px #008aff;}
    50%{	box-shadow:0 0 8px #008aff;}
    100%{	box-shadow:0 0 1px #008aff;}
}

/* Webkit keyframe animation */
@-webkit-keyframes pulse{
    0%{		box-shadow:0 0 1px #008aff;}
    50%{	box-shadow:0 0 10px #008aff;}
    100%{	box-shadow:0 0 1px #008aff;}
}
<script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
<script type="text/javascript" src="js/script.js"></script>
</style>
</head>
<body>
<div id="formContainer">
            <form id="login" method="post" action="./">
                <a href="#" id="flipToRecover" class="flipLink">Forgot?</a>
                <input type="text" name="loginEmail" id="loginEmail" placeholder="Email" />
                <input type="password" name="loginPass" id="loginPass" placeholder="Password" />
                <input type="submit" name="submit" value="Login" />
            </form>
            <form id="recover" method="post" action="./">
                <a href="#" id="flipToLogin" class="flipLink">Forgot?</a>
                <input type="text" name="recoverEmail" id="recoverEmail" placeholder="Your Email" />
                <input type="submit" name="submit" value="Recover" />
            </form>
        </div>
</body>
</html>
