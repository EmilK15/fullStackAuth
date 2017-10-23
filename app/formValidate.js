'use strict';

var formValidate = function(email, username, pw, rePw) {
	/*email validation will be last part, can use third party to send that email
		an email and a code + link to verify with so that they can sign-in
	*/
	var emailStatus = false;
	var userStatus = false;
	var pwStatus = false;
	var rePwStatus = true;

	var emailRe = /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var userRe = /^[a-zA-Z0-9_-]{5,18}$/;
	var pwRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,20}$/;

	emailStatus = String(email).match(emailRe);
	userStatus = String(username).match(userRe);
	pwStatus = String(pw).match(pwRe);

	for(let i=0; i < pw.length; i++) {
		if(pw.charCodeAt(i) !== rePw.charCodeAt(i))
			rePwStatus = false;
	}

	return emailStatus && userStatus && pwStatus && rePwStatus;
}

module.exports = formValidate;
