'use strict';

var formValidate = function(email, username, pw, rePw) {
	/*email validation will be last part, can use third party to send that email
		an email and a code + link to verify with so that they can sign-in
	*/

	var userStatus = true;
	var pwStatus = true;
	var rePwStatus = true;
	var oneUpper = false;
	var oneLower = false;
	var oneNum = false;


	for(let i=0; i< username.length; i++) {
		if(username.charCodeAt(i) < 48 ||
			(username.charCodeAt(i) > 57 &&
				username.charCodeAt(i) < 65) ||
			(username.charCodeAt(i) > 90 &&
				username.charCodeAt(i) < 97) ||
			username.charCodeAt(i) > 122) {
			userStatus = false;
		}
	}

	if(pw.length > 6 && pw.length < 20) {
		for(let i=0; i < pw.length; i++) {
			if(pw.charCodeAt(i) < 123 && pw.charCodeAt(i) > 96) {
				oneLower = true;
			}
			if(pw.charCodeAt(i) < 96 && pw.charCodeAt(i) > 64) {
				oneUpper = true;
			}
			if(pw.charCodeAt(i) > 47 && pw.charCodeAt(i) < 58) {
				oneNum = true;
			}
		}
	}
	
	pwStatus = oneLower && oneUpper && oneNum;

	for(let i=0; i < pw.length; i++) {
		if(pw.charCodeAt(i) !== rePw.charCodeAt(i))
			rePwStatus = false;
	}

	return userStatus && pwStatus && rePwStatus;
}

module.exports = formValidate;