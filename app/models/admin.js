'use strict'

var promise = require('bluebird');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = promise.promisifyAll(require('bcryptjs')),
	SALT_WORK_FACTOR = 10,
	MAX_LOGIN_ATTEMPTS = 5,
	LOCK_TIME = 1 * 60 * 60 * 1000;

var adminSchema = new Schema({
	email: {type: String, required: true, index: {unique: true}},
	username: {type: String, required: true, index: { unique: true}},
	password: {type: String, required: true},
	loginAttempts: {type: Number, required: true, default: 0},
	lockUntil: {type: Number},
	isAdmin: {type: Boolean, default: true}
});

adminSchema.virtual('isLocked').get(function() {
	return !!(this.lockUntil && this.lockUntil > Date.now());
});

adminSchema.pre('save', function(next) {
	var user = this;

	if(!user.isModified('password')) {
		return next();
	}
	bcrypt.genSaltAsync(SALT_WORK_FACTOR)
	.then(function(salt){
		return bcrypt.hashAsync(user.password, salt);
	})
	.then(function(hash) {
		user.password = hash;
		next();
	})
	.catch(function(e) {
		console.log("Salting error " + e);
	})
	.catch(function(e) {
		console.log("Hash error " + e);
	})
});

adminSchema.methods.incLoginAttempts = function(cb) {
	//if the lock has expired, reset lock attempt to 1
	if(this.lockUntil && this.lockUntil < Date.now()) {
		return this.update({
			$set: {loginAttempts: 1},
			$unset: {lockUntil: 1}
		}, cb);
	}
	var updates = { $inc: {loginAttempts: 1} };
	if(this.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !this.isLocked) {
		updates.$set = { lockUntil: Date.now() + LOCK_TIME};
	}
	return this.update(updates, cb);
};

adminSchema.methods.comparePassword = function(candidatePassword, cb) {
	console.log(this);
	bcrypt.compareAsync(candidatePassword, this.password)
	.then(function(isMatch) {
		cb(null, isMatch);
	})
	.catch(function(err) {
		return cb(err, null);
	})
};

module.exports = mongoose.model('Admin', adminSchema);