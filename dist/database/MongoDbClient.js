"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _mongoose = _interopRequireDefault(require("mongoose"));
var _uuid = require("uuid");

var _OAuthUser = _interopRequireDefault(require("./models/OAuthUser"));
var _OAuthClient = _interopRequireDefault(require("./models/OAuthClient"));
var _SocialLogin = _interopRequireDefault(require("./models/SocialLogin"));
var _LoginTypeBase = _interopRequireDefault(require("./models/login-type/LoginTypeBase"));
var _PasswordLoginType = _interopRequireDefault(require("./models/login-type/PasswordLoginType"));
var _FaceLoginType = _interopRequireDefault(require("./models/login-type/FaceLoginType"));
var _PalmLoginType = _interopRequireDefault(require("./models/login-type/PalmLoginType"));
var _crypto = _interopRequireDefault(require("crypto"));
var _TextLoginType = _interopRequireDefault(require("./models/login-type/TextLoginType"));
var _SecurityQuestionsLoginType = _interopRequireDefault(require("./models/login-type/SecurityQuestionsLoginType"));

const REQUIRED_PASSWORDS = 1;

let mongoDbOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true };


class MongoDbClient {
  constructor() {(0, _defineProperty2.default)(this, "validSecret",
























































































































































































































































































    function (password, secretSalt, secretHash) {
      if (
      password === undefined ||
      secretHash === undefined ||
      secretSalt === undefined)
      {
        return false;
      }

      var hash = _crypto.default.
      pbkdf2Sync(password, secretSalt, 10000, 512, "sha512").
      toString("hex");
      return secretHash === hash;
    });(0, _defineProperty2.default)(this, "getSecretSaltHash",

    function (password) {
      const salt = _crypto.default.randomBytes(16).toString("hex");
      const hash = _crypto.default.
      pbkdf2Sync(password, salt, 10000, 512, "sha512").
      toString("hex");

      return { salt: salt, hash: hash };
    });this.mongoURI = process.env.MONGODB_URI;_mongoose.default.connect(this.mongoURI, mongoDbOptions).then(() => {this.populateDefaultValues();});}populateDefaultValues() {var _this = this;return (0, _asyncToGenerator2.default)(function* () {let clients = yield _OAuthClient.default.find({});if (clients.length === 0) {let mypassClient = new _OAuthClient.default();let grants = [];grants.push("authorization_code");mypassClient.clientId = process.env.CLIENT_ID;mypassClient.redirectUris = process.env.REDIRECT_URI;mypassClient.grants = grants;yield mypassClient.save();}let users = yield _OAuthUser.default.find({});if (users.length === 0) {const ownerEmail = "wiyase1364@royandk.com";const caseWorkerEmail = "joxef68600@tmail15.com";let sally = { username: "owner", password: "owner", faceTemplate: "owner", email: ownerEmail, contactEmail: caseWorkerEmail, phoneNumber: "5555555555" };let billy = { username: "caseworker", password: "caseworker", faceTemplate: "caseworker", email: caseWorkerEmail };yield _this.createNewOAuthUser(sally, "sally-oauth-123");yield _this.createNewOAuthUser(billy, "billy-oauth-123");}console.log("Oauth Server Ready!");})();}createNewOAuthUser(body, uuid = undefined) {var _this2 = this;return (0, _asyncToGenerator2.default)(function* () {const user = new _OAuthUser.default();if (uuid === undefined) {user.oauthId = (0, _uuid.v4)();} else {user.oauthId = uuid;}user.username = body.username && body.username.length > 0 ? body.username : body.email;user.email = body.email; // user.contactEmail = body.contactEmail;
      user.phoneNumber = body.text;user.loginTypes = [];if (body.password !== undefined) {const passwordLoginType = new _PasswordLoginType.default();const saltHash = _this2.getSecretSaltHash(body.password);passwordLoginType.passwordSalt = saltHash.salt;passwordLoginType.passwordHash = saltHash.hash;yield passwordLoginType.save();user.loginTypes.push(passwordLoginType);}if (body.palmTemplate !== undefined) {const palmLoginType = new _PalmLoginType.default();const saltHash = _this2.getSecretSaltHash(body.palmTemplate);palmLoginType.palmGuidSalt = saltHash.salt;palmLoginType.palmGuidHash = saltHash.hash;yield palmLoginType.save();user.loginTypes.push(palmLoginType);}if (body.text !== undefined) {const textLoginType = new _TextLoginType.default();textLoginType.phoneNumber = body.text;yield textLoginType.save();user.loginTypes.push(textLoginType);}if (body.securityQuestions !== undefined) {const securityQuestionsLoginType = new _SecurityQuestionsLoginType.default();securityQuestionsLoginType.securityQuestions = JSON.parse(body.securityQuestions).map(securityQuestion => {const question = securityQuestion.question;const saltHash = _this2.getSecretSaltHash(securityQuestion.answer);return { question, answerSalt: saltHash.salt, answerHash: saltHash.hash };}); // console.log(securityQuestionsLoginType.securityQuestions);
        yield securityQuestionsLoginType.save();user.loginTypes.push(securityQuestionsLoginType);}if (body.faceTemplate !== undefined) {const faceLoginType = new _FaceLoginType.default();const saltHash = _this2.getSecretSaltHash(body.faceTemplate);faceLoginType.faceGuidSalt = saltHash.salt;faceLoginType.faceGuidHash = saltHash.hash;yield faceLoginType.save();user.loginTypes.push(faceLoginType);}yield user.save();return user;})();}createSocialLogin(requestingUserId, providingUserId, uuid) {return (0, _asyncToGenerator2.default)(function* () {const socialLogin = new _SocialLogin.default();socialLogin.uuid = uuid;socialLogin.requestingUserId = requestingUserId;socialLogin.providingUserId = providingUserId;socialLogin.timestamp = new Date();yield socialLogin.save();})();}findSocialLoginByUuid(uuid) {return (0, _asyncToGenerator2.default)(function* () {let socialLogin = yield _SocialLogin.default.findOne({ uuid: uuid });return socialLogin;})();}getUserById(id) {return (0, _asyncToGenerator2.default)(function* () {const user = yield _OAuthUser.default.findById(id);return user;})();}addOneTimeCode(userId, oneTimeCode) {return (0, _asyncToGenerator2.default)(function* () {const user = yield _OAuthUser.default.findById(userId);user.oneTimeCode = oneTimeCode;user.oneTimeCodeIssueDate = new Date();yield user.save();})();}getAllAuthAccounts() {return (0, _asyncToGenerator2.default)(function* () {const authUsers = yield _OAuthUser.default.find({});return authUsers;})();}findUserByUserName(userName) {return (0, _asyncToGenerator2.default)(function* () {if (userName) {let user = yield _OAuthUser.default.findOne({ username: userName });return user;}return undefined;})();}findUserByUsernameOrEmail(usernameOrEmail) {return (0, _asyncToGenerator2.default)(function* () {if (usernameOrEmail) {let user = yield _OAuthUser.default.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] });return user;}return undefined;})();}getLoginMethodsByUsernameOrEmail(usernameOrEmail) {return (0, _asyncToGenerator2.default)(function* () {let loginMethods;if (usernameOrEmail) {let user = yield _OAuthUser.default.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] }).populate("loginTypes");if (user) {loginMethods = user.loginTypes.map(loginType => loginType.itemtype);}}return { loginMethods };})();}saveUser(user) {return (0, _asyncToGenerator2.default)(function* () {yield user.save();return user;})();}findUserByEmail(email) {return (0, _asyncToGenerator2.default)(function* () {let user = yield _OAuthUser.default.findOne({ email: email });return user;})();} // If they are authorized to login
  getAccountByCredentials(body) {var _this3 = this;return (0, _asyncToGenerator2.default)(function* () {let user = null;if (body.username && body.username.length > 0) {user = yield _OAuthUser.default.findOne({ username: body.username }).populate("loginTypes");}if (body.email && body.email.length > 0) {user = yield _OAuthUser.default.findOne({ email: body.email }).populate("loginTypes");}if (user === null || user === undefined) {return undefined;}let successfulLoginPasswords = 0;if (user.oneTimeCode !== undefined && "" + body.oneTimeCode === "" + user.oneTimeCode) {user.oneTimeCode = undefined;yield user.save(); // TODO: Add timestamp checking
        // let now = new Date();
        // let OneDayInSeconds = 86400;
        // if (
        //   now.getTime() - oneTimeCodeIssueDate.timestamp.getTime() >
        //   OneDayInSeconds
        // ) {
        //   console.log("Expired One Time Code");
        // } else {
        //   successfulLoginPasswords++;
        // }
        successfulLoginPasswords++;}for (let loginType of user.loginTypes) {if (body.password && loginType.itemtype === "PasswordLoginType" && _this3.validSecret(body.password, loginType.passwordSalt, loginType.passwordHash)) {successfulLoginPasswords++;}if (body.faceTemplate && loginType.itemtype === "FaceLoginType" && _this3.validSecret(body.faceTemplate, loginType.faceGuidSalt, loginType.faceGuidHash)) {successfulLoginPasswords++;}}if (successfulLoginPasswords >= REQUIRED_PASSWORDS) {return user;} else {return undefined;}})();} // Helpers
}module.exports = MongoDbClient;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9Nb25nb0RiQ2xpZW50LmpzIl0sIm5hbWVzIjpbIlJFUVVJUkVEX1BBU1NXT1JEUyIsIm1vbmdvRGJPcHRpb25zIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlQ3JlYXRlSW5kZXgiLCJNb25nb0RiQ2xpZW50IiwiY29uc3RydWN0b3IiLCJwYXNzd29yZCIsInNlY3JldFNhbHQiLCJzZWNyZXRIYXNoIiwidW5kZWZpbmVkIiwiaGFzaCIsImNyeXB0byIsInBia2RmMlN5bmMiLCJ0b1N0cmluZyIsInNhbHQiLCJyYW5kb21CeXRlcyIsIm1vbmdvVVJJIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwibW9uZ29vc2UiLCJjb25uZWN0IiwidGhlbiIsInBvcHVsYXRlRGVmYXVsdFZhbHVlcyIsImNsaWVudHMiLCJPQXV0aENsaWVudCIsImZpbmQiLCJsZW5ndGgiLCJteXBhc3NDbGllbnQiLCJncmFudHMiLCJwdXNoIiwiY2xpZW50SWQiLCJDTElFTlRfSUQiLCJyZWRpcmVjdFVyaXMiLCJSRURJUkVDVF9VUkkiLCJzYXZlIiwidXNlcnMiLCJPQXV0aFVzZXIiLCJvd25lckVtYWlsIiwiY2FzZVdvcmtlckVtYWlsIiwic2FsbHkiLCJ1c2VybmFtZSIsImZhY2VUZW1wbGF0ZSIsImVtYWlsIiwiY29udGFjdEVtYWlsIiwicGhvbmVOdW1iZXIiLCJiaWxseSIsImNyZWF0ZU5ld09BdXRoVXNlciIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwidXVpZCIsInVzZXIiLCJvYXV0aElkIiwidGV4dCIsImxvZ2luVHlwZXMiLCJwYXNzd29yZExvZ2luVHlwZSIsIlBhc3N3b3JkTG9naW5UeXBlIiwic2FsdEhhc2giLCJnZXRTZWNyZXRTYWx0SGFzaCIsInBhc3N3b3JkU2FsdCIsInBhc3N3b3JkSGFzaCIsInBhbG1UZW1wbGF0ZSIsInBhbG1Mb2dpblR5cGUiLCJQYWxtTG9naW5UeXBlIiwicGFsbUd1aWRTYWx0IiwicGFsbUd1aWRIYXNoIiwidGV4dExvZ2luVHlwZSIsIlRleHRMb2dpblR5cGUiLCJzZWN1cml0eVF1ZXN0aW9ucyIsInNlY3VyaXR5UXVlc3Rpb25zTG9naW5UeXBlIiwiU2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGUiLCJKU09OIiwicGFyc2UiLCJtYXAiLCJzZWN1cml0eVF1ZXN0aW9uIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJhbnN3ZXJTYWx0IiwiYW5zd2VySGFzaCIsImZhY2VMb2dpblR5cGUiLCJGYWNlTG9naW5UeXBlIiwiZmFjZUd1aWRTYWx0IiwiZmFjZUd1aWRIYXNoIiwiY3JlYXRlU29jaWFsTG9naW4iLCJyZXF1ZXN0aW5nVXNlcklkIiwicHJvdmlkaW5nVXNlcklkIiwic29jaWFsTG9naW4iLCJTb2NpYWxMb2dpbiIsInRpbWVzdGFtcCIsIkRhdGUiLCJmaW5kU29jaWFsTG9naW5CeVV1aWQiLCJmaW5kT25lIiwiZ2V0VXNlckJ5SWQiLCJpZCIsImZpbmRCeUlkIiwiYWRkT25lVGltZUNvZGUiLCJ1c2VySWQiLCJvbmVUaW1lQ29kZSIsIm9uZVRpbWVDb2RlSXNzdWVEYXRlIiwiZ2V0QWxsQXV0aEFjY291bnRzIiwiYXV0aFVzZXJzIiwiZmluZFVzZXJCeVVzZXJOYW1lIiwidXNlck5hbWUiLCJmaW5kVXNlckJ5VXNlcm5hbWVPckVtYWlsIiwidXNlcm5hbWVPckVtYWlsIiwiJG9yIiwiZ2V0TG9naW5NZXRob2RzQnlVc2VybmFtZU9yRW1haWwiLCJsb2dpbk1ldGhvZHMiLCJwb3B1bGF0ZSIsImxvZ2luVHlwZSIsIml0ZW10eXBlIiwic2F2ZVVzZXIiLCJmaW5kVXNlckJ5RW1haWwiLCJnZXRBY2NvdW50QnlDcmVkZW50aWFscyIsInN1Y2Nlc3NmdWxMb2dpblBhc3N3b3JkcyIsInZhbGlkU2VjcmV0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6InNTQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgT0F1dGhVc2VyIGZyb20gXCIuL21vZGVscy9PQXV0aFVzZXJcIjtcbmltcG9ydCBPQXV0aENsaWVudCBmcm9tIFwiLi9tb2RlbHMvT0F1dGhDbGllbnRcIjtcbmltcG9ydCBTb2NpYWxMb2dpbiBmcm9tIFwiLi9tb2RlbHMvU29jaWFsTG9naW5cIjtcbmltcG9ydCBMb2dpblR5cGVCYXNlIGZyb20gXCIuL21vZGVscy9sb2dpbi10eXBlL0xvZ2luVHlwZUJhc2VcIjtcbmltcG9ydCBQYXNzd29yZExvZ2luVHlwZSBmcm9tIFwiLi9tb2RlbHMvbG9naW4tdHlwZS9QYXNzd29yZExvZ2luVHlwZVwiO1xuaW1wb3J0IEZhY2VMb2dpblR5cGUgZnJvbSBcIi4vbW9kZWxzL2xvZ2luLXR5cGUvRmFjZUxvZ2luVHlwZVwiO1xuaW1wb3J0IFBhbG1Mb2dpblR5cGUgZnJvbSBcIi4vbW9kZWxzL2xvZ2luLXR5cGUvUGFsbUxvZ2luVHlwZVwiO1xuaW1wb3J0IGNyeXB0byBmcm9tIFwiY3J5cHRvXCI7XG5pbXBvcnQgVGV4dExvZ2luVHlwZSBmcm9tIFwiLi9tb2RlbHMvbG9naW4tdHlwZS9UZXh0TG9naW5UeXBlXCI7XG5pbXBvcnQgU2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGUgZnJvbSBcIi4vbW9kZWxzL2xvZ2luLXR5cGUvU2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGVcIjtcblxuY29uc3QgUkVRVUlSRURfUEFTU1dPUkRTID0gMTtcblxubGV0IG1vbmdvRGJPcHRpb25zID0ge1xuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXG59O1xuXG5jbGFzcyBNb25nb0RiQ2xpZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tb25nb1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuXG4gICAgbW9uZ29vc2UuY29ubmVjdCh0aGlzLm1vbmdvVVJJLCBtb25nb0RiT3B0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnBvcHVsYXRlRGVmYXVsdFZhbHVlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgcG9wdWxhdGVEZWZhdWx0VmFsdWVzKCkge1xuICAgIGxldCBjbGllbnRzID0gYXdhaXQgT0F1dGhDbGllbnQuZmluZCh7fSk7XG5cbiAgICBpZiAoY2xpZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGxldCBteXBhc3NDbGllbnQgPSBuZXcgT0F1dGhDbGllbnQoKTtcbiAgICAgIGxldCBncmFudHMgPSBbXTtcbiAgICAgIGdyYW50cy5wdXNoKFwiYXV0aG9yaXphdGlvbl9jb2RlXCIpO1xuICAgICAgbXlwYXNzQ2xpZW50LmNsaWVudElkID0gcHJvY2Vzcy5lbnYuQ0xJRU5UX0lEO1xuICAgICAgbXlwYXNzQ2xpZW50LnJlZGlyZWN0VXJpcyA9IHByb2Nlc3MuZW52LlJFRElSRUNUX1VSSTtcbiAgICAgIG15cGFzc0NsaWVudC5ncmFudHMgPSBncmFudHM7XG5cbiAgICAgIGF3YWl0IG15cGFzc0NsaWVudC5zYXZlKCk7XG4gICAgfVxuXG4gICAgbGV0IHVzZXJzID0gYXdhaXQgT0F1dGhVc2VyLmZpbmQoe30pO1xuICAgIGlmICh1c2Vycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IG93bmVyRW1haWwgPSBcIndpeWFzZTEzNjRAcm95YW5kay5jb21cIjtcbiAgICAgIGNvbnN0IGNhc2VXb3JrZXJFbWFpbCA9IFwiam94ZWY2ODYwMEB0bWFpbDE1LmNvbVwiO1xuXG4gICAgICBsZXQgc2FsbHkgPSB7XG4gICAgICAgIHVzZXJuYW1lOiBcIm93bmVyXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIm93bmVyXCIsXG4gICAgICAgIGZhY2VUZW1wbGF0ZTogXCJvd25lclwiLFxuICAgICAgICBlbWFpbDogb3duZXJFbWFpbCxcbiAgICAgICAgY29udGFjdEVtYWlsOiBjYXNlV29ya2VyRW1haWwsXG4gICAgICAgIHBob25lTnVtYmVyOiBcIjU1NTU1NTU1NTVcIixcbiAgICAgIH07XG5cbiAgICAgIGxldCBiaWxseSA9IHtcbiAgICAgICAgdXNlcm5hbWU6IFwiY2FzZXdvcmtlclwiLFxuICAgICAgICBwYXNzd29yZDogXCJjYXNld29ya2VyXCIsXG4gICAgICAgIGZhY2VUZW1wbGF0ZTogXCJjYXNld29ya2VyXCIsXG4gICAgICAgIGVtYWlsOiBjYXNlV29ya2VyRW1haWwsXG4gICAgICB9O1xuXG4gICAgICBhd2FpdCB0aGlzLmNyZWF0ZU5ld09BdXRoVXNlcihzYWxseSwgXCJzYWxseS1vYXV0aC0xMjNcIik7XG4gICAgICBhd2FpdCB0aGlzLmNyZWF0ZU5ld09BdXRoVXNlcihiaWxseSwgXCJiaWxseS1vYXV0aC0xMjNcIik7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJPYXV0aCBTZXJ2ZXIgUmVhZHkhXCIpO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlTmV3T0F1dGhVc2VyKGJvZHksIHV1aWQgPSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCB1c2VyID0gbmV3IE9BdXRoVXNlcigpO1xuXG4gICAgaWYgKHV1aWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdXNlci5vYXV0aElkID0gdXVpZHY0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVzZXIub2F1dGhJZCA9IHV1aWQ7XG4gICAgfVxuXG4gICAgdXNlci51c2VybmFtZSA9XG4gICAgICBib2R5LnVzZXJuYW1lICYmIGJvZHkudXNlcm5hbWUubGVuZ3RoID4gMCA/IGJvZHkudXNlcm5hbWUgOiBib2R5LmVtYWlsO1xuICAgIHVzZXIuZW1haWwgPSBib2R5LmVtYWlsO1xuICAgIC8vIHVzZXIuY29udGFjdEVtYWlsID0gYm9keS5jb250YWN0RW1haWw7XG4gICAgdXNlci5waG9uZU51bWJlciA9IGJvZHkudGV4dDtcblxuICAgIHVzZXIubG9naW5UeXBlcyA9IFtdO1xuXG4gICAgaWYgKGJvZHkucGFzc3dvcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgcGFzc3dvcmRMb2dpblR5cGUgPSBuZXcgUGFzc3dvcmRMb2dpblR5cGUoKTtcbiAgICAgIGNvbnN0IHNhbHRIYXNoID0gdGhpcy5nZXRTZWNyZXRTYWx0SGFzaChib2R5LnBhc3N3b3JkKTtcbiAgICAgIHBhc3N3b3JkTG9naW5UeXBlLnBhc3N3b3JkU2FsdCA9IHNhbHRIYXNoLnNhbHQ7XG4gICAgICBwYXNzd29yZExvZ2luVHlwZS5wYXNzd29yZEhhc2ggPSBzYWx0SGFzaC5oYXNoO1xuICAgICAgYXdhaXQgcGFzc3dvcmRMb2dpblR5cGUuc2F2ZSgpO1xuICAgICAgdXNlci5sb2dpblR5cGVzLnB1c2gocGFzc3dvcmRMb2dpblR5cGUpO1xuICAgIH1cblxuICAgIGlmIChib2R5LnBhbG1UZW1wbGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBwYWxtTG9naW5UeXBlID0gbmV3IFBhbG1Mb2dpblR5cGUoKTtcbiAgICAgIGNvbnN0IHNhbHRIYXNoID0gdGhpcy5nZXRTZWNyZXRTYWx0SGFzaChib2R5LnBhbG1UZW1wbGF0ZSk7XG4gICAgICBwYWxtTG9naW5UeXBlLnBhbG1HdWlkU2FsdCA9IHNhbHRIYXNoLnNhbHQ7XG4gICAgICBwYWxtTG9naW5UeXBlLnBhbG1HdWlkSGFzaCA9IHNhbHRIYXNoLmhhc2g7XG4gICAgICBhd2FpdCBwYWxtTG9naW5UeXBlLnNhdmUoKTtcbiAgICAgIHVzZXIubG9naW5UeXBlcy5wdXNoKHBhbG1Mb2dpblR5cGUpO1xuICAgIH1cblxuICAgIGlmIChib2R5LnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgdGV4dExvZ2luVHlwZSA9IG5ldyBUZXh0TG9naW5UeXBlKCk7XG4gICAgICB0ZXh0TG9naW5UeXBlLnBob25lTnVtYmVyID0gYm9keS50ZXh0O1xuICAgICAgYXdhaXQgdGV4dExvZ2luVHlwZS5zYXZlKCk7XG4gICAgICB1c2VyLmxvZ2luVHlwZXMucHVzaCh0ZXh0TG9naW5UeXBlKTtcbiAgICB9XG5cbiAgICBpZiAoYm9keS5zZWN1cml0eVF1ZXN0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBzZWN1cml0eVF1ZXN0aW9uc0xvZ2luVHlwZSA9IG5ldyBTZWN1cml0eVF1ZXN0aW9uc0xvZ2luVHlwZSgpO1xuICAgICAgc2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGUuc2VjdXJpdHlRdWVzdGlvbnMgPSBKU09OLnBhcnNlKFxuICAgICAgICBib2R5LnNlY3VyaXR5UXVlc3Rpb25zXG4gICAgICApLm1hcCgoc2VjdXJpdHlRdWVzdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBxdWVzdGlvbiA9IHNlY3VyaXR5UXVlc3Rpb24ucXVlc3Rpb247XG4gICAgICAgIGNvbnN0IHNhbHRIYXNoID0gdGhpcy5nZXRTZWNyZXRTYWx0SGFzaChzZWN1cml0eVF1ZXN0aW9uLmFuc3dlcik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcXVlc3Rpb24sXG4gICAgICAgICAgYW5zd2VyU2FsdDogc2FsdEhhc2guc2FsdCxcbiAgICAgICAgICBhbnN3ZXJIYXNoOiBzYWx0SGFzaC5oYXNoLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWN1cml0eVF1ZXN0aW9uc0xvZ2luVHlwZS5zZWN1cml0eVF1ZXN0aW9ucyk7XG4gICAgICBhd2FpdCBzZWN1cml0eVF1ZXN0aW9uc0xvZ2luVHlwZS5zYXZlKCk7XG4gICAgICB1c2VyLmxvZ2luVHlwZXMucHVzaChzZWN1cml0eVF1ZXN0aW9uc0xvZ2luVHlwZSk7XG4gICAgfVxuXG4gICAgaWYgKGJvZHkuZmFjZVRlbXBsYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGZhY2VMb2dpblR5cGUgPSBuZXcgRmFjZUxvZ2luVHlwZSgpO1xuICAgICAgY29uc3Qgc2FsdEhhc2ggPSB0aGlzLmdldFNlY3JldFNhbHRIYXNoKGJvZHkuZmFjZVRlbXBsYXRlKTtcbiAgICAgIGZhY2VMb2dpblR5cGUuZmFjZUd1aWRTYWx0ID0gc2FsdEhhc2guc2FsdDtcbiAgICAgIGZhY2VMb2dpblR5cGUuZmFjZUd1aWRIYXNoID0gc2FsdEhhc2guaGFzaDtcbiAgICAgIGF3YWl0IGZhY2VMb2dpblR5cGUuc2F2ZSgpO1xuICAgICAgdXNlci5sb2dpblR5cGVzLnB1c2goZmFjZUxvZ2luVHlwZSk7XG4gICAgfVxuXG4gICAgYXdhaXQgdXNlci5zYXZlKCk7XG5cbiAgICByZXR1cm4gdXNlcjtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVNvY2lhbExvZ2luKHJlcXVlc3RpbmdVc2VySWQsIHByb3ZpZGluZ1VzZXJJZCwgdXVpZCkge1xuICAgIGNvbnN0IHNvY2lhbExvZ2luID0gbmV3IFNvY2lhbExvZ2luKCk7XG4gICAgc29jaWFsTG9naW4udXVpZCA9IHV1aWQ7XG4gICAgc29jaWFsTG9naW4ucmVxdWVzdGluZ1VzZXJJZCA9IHJlcXVlc3RpbmdVc2VySWQ7XG4gICAgc29jaWFsTG9naW4ucHJvdmlkaW5nVXNlcklkID0gcHJvdmlkaW5nVXNlcklkO1xuICAgIHNvY2lhbExvZ2luLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCk7XG5cbiAgICBhd2FpdCBzb2NpYWxMb2dpbi5zYXZlKCk7XG4gIH1cblxuICBhc3luYyBmaW5kU29jaWFsTG9naW5CeVV1aWQodXVpZCkge1xuICAgIGxldCBzb2NpYWxMb2dpbiA9IGF3YWl0IFNvY2lhbExvZ2luLmZpbmRPbmUoe1xuICAgICAgdXVpZDogdXVpZCxcbiAgICB9KTtcblxuICAgIHJldHVybiBzb2NpYWxMb2dpbjtcbiAgfVxuXG4gIGFzeW5jIGdldFVzZXJCeUlkKGlkKSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IE9BdXRoVXNlci5maW5kQnlJZChpZCk7XG4gICAgcmV0dXJuIHVzZXI7XG4gIH1cblxuICBhc3luYyBhZGRPbmVUaW1lQ29kZSh1c2VySWQsIG9uZVRpbWVDb2RlKSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IE9BdXRoVXNlci5maW5kQnlJZCh1c2VySWQpO1xuICAgIHVzZXIub25lVGltZUNvZGUgPSBvbmVUaW1lQ29kZTtcbiAgICB1c2VyLm9uZVRpbWVDb2RlSXNzdWVEYXRlID0gbmV3IERhdGUoKTtcbiAgICBhd2FpdCB1c2VyLnNhdmUoKTtcbiAgfVxuXG4gIGFzeW5jIGdldEFsbEF1dGhBY2NvdW50cygpIHtcbiAgICBjb25zdCBhdXRoVXNlcnMgPSBhd2FpdCBPQXV0aFVzZXIuZmluZCh7fSk7XG4gICAgcmV0dXJuIGF1dGhVc2VycztcbiAgfVxuXG4gIGFzeW5jIGZpbmRVc2VyQnlVc2VyTmFtZSh1c2VyTmFtZSkge1xuICAgIGlmICh1c2VyTmFtZSkge1xuICAgICAgbGV0IHVzZXIgPSBhd2FpdCBPQXV0aFVzZXIuZmluZE9uZSh7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBhc3luYyBmaW5kVXNlckJ5VXNlcm5hbWVPckVtYWlsKHVzZXJuYW1lT3JFbWFpbCkge1xuICAgIGlmICh1c2VybmFtZU9yRW1haWwpIHtcbiAgICAgIGxldCB1c2VyID0gYXdhaXQgT0F1dGhVc2VyLmZpbmRPbmUoe1xuICAgICAgICAkb3I6IFt7IHVzZXJuYW1lOiB1c2VybmFtZU9yRW1haWwgfSwgeyBlbWFpbDogdXNlcm5hbWVPckVtYWlsIH1dLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdXNlcjtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGFzeW5jIGdldExvZ2luTWV0aG9kc0J5VXNlcm5hbWVPckVtYWlsKHVzZXJuYW1lT3JFbWFpbCkge1xuICAgIGxldCBsb2dpbk1ldGhvZHM7XG4gICAgaWYgKHVzZXJuYW1lT3JFbWFpbCkge1xuICAgICAgbGV0IHVzZXIgPSBhd2FpdCBPQXV0aFVzZXIuZmluZE9uZSh7XG4gICAgICAgICRvcjogW3sgdXNlcm5hbWU6IHVzZXJuYW1lT3JFbWFpbCB9LCB7IGVtYWlsOiB1c2VybmFtZU9yRW1haWwgfV0sXG4gICAgICB9KS5wb3B1bGF0ZShcImxvZ2luVHlwZXNcIik7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBsb2dpbk1ldGhvZHMgPSB1c2VyLmxvZ2luVHlwZXMubWFwKChsb2dpblR5cGUpID0+IGxvZ2luVHlwZS5pdGVtdHlwZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGxvZ2luTWV0aG9kcyB9O1xuICB9XG5cbiAgYXN5bmMgc2F2ZVVzZXIodXNlcikge1xuICAgIGF3YWl0IHVzZXIuc2F2ZSgpO1xuICAgIHJldHVybiB1c2VyO1xuICB9XG5cbiAgYXN5bmMgZmluZFVzZXJCeUVtYWlsKGVtYWlsKSB7XG4gICAgbGV0IHVzZXIgPSBhd2FpdCBPQXV0aFVzZXIuZmluZE9uZSh7XG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdXNlcjtcbiAgfVxuXG4gIC8vIElmIHRoZXkgYXJlIGF1dGhvcml6ZWQgdG8gbG9naW5cbiAgYXN5bmMgZ2V0QWNjb3VudEJ5Q3JlZGVudGlhbHMoYm9keSkge1xuICAgIGxldCB1c2VyID0gbnVsbDtcbiAgICBpZiAoYm9keS51c2VybmFtZSAmJiBib2R5LnVzZXJuYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgIHVzZXIgPSBhd2FpdCBPQXV0aFVzZXIuZmluZE9uZSh7XG4gICAgICAgIHVzZXJuYW1lOiBib2R5LnVzZXJuYW1lLFxuICAgICAgfSkucG9wdWxhdGUoXCJsb2dpblR5cGVzXCIpO1xuICAgIH1cbiAgICBpZiAoYm9keS5lbWFpbCAmJiBib2R5LmVtYWlsLmxlbmd0aCA+IDApIHtcbiAgICAgIHVzZXIgPSBhd2FpdCBPQXV0aFVzZXIuZmluZE9uZSh7XG4gICAgICAgIGVtYWlsOiBib2R5LmVtYWlsLFxuICAgICAgfSkucG9wdWxhdGUoXCJsb2dpblR5cGVzXCIpO1xuICAgIH1cblxuICAgIGlmICh1c2VyID09PSBudWxsIHx8IHVzZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBsZXQgc3VjY2Vzc2Z1bExvZ2luUGFzc3dvcmRzID0gMDtcblxuICAgIGlmIChcbiAgICAgIHVzZXIub25lVGltZUNvZGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgXCJcIiArIGJvZHkub25lVGltZUNvZGUgPT09IFwiXCIgKyB1c2VyLm9uZVRpbWVDb2RlXG4gICAgKSB7XG4gICAgICB1c2VyLm9uZVRpbWVDb2RlID0gdW5kZWZpbmVkO1xuICAgICAgYXdhaXQgdXNlci5zYXZlKCk7XG5cbiAgICAgIC8vIFRPRE86IEFkZCB0aW1lc3RhbXAgY2hlY2tpbmdcbiAgICAgIC8vIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgLy8gbGV0IE9uZURheUluU2Vjb25kcyA9IDg2NDAwO1xuXG4gICAgICAvLyBpZiAoXG4gICAgICAvLyAgIG5vdy5nZXRUaW1lKCkgLSBvbmVUaW1lQ29kZUlzc3VlRGF0ZS50aW1lc3RhbXAuZ2V0VGltZSgpID5cbiAgICAgIC8vICAgT25lRGF5SW5TZWNvbmRzXG4gICAgICAvLyApIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coXCJFeHBpcmVkIE9uZSBUaW1lIENvZGVcIik7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICBzdWNjZXNzZnVsTG9naW5QYXNzd29yZHMrKztcbiAgICAgIC8vIH1cbiAgICAgIHN1Y2Nlc3NmdWxMb2dpblBhc3N3b3JkcysrO1xuICAgIH1cblxuICAgIGZvciAobGV0IGxvZ2luVHlwZSBvZiB1c2VyLmxvZ2luVHlwZXMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgYm9keS5wYXNzd29yZCAmJlxuICAgICAgICBsb2dpblR5cGUuaXRlbXR5cGUgPT09IFwiUGFzc3dvcmRMb2dpblR5cGVcIiAmJlxuICAgICAgICB0aGlzLnZhbGlkU2VjcmV0KFxuICAgICAgICAgIGJvZHkucGFzc3dvcmQsXG4gICAgICAgICAgbG9naW5UeXBlLnBhc3N3b3JkU2FsdCxcbiAgICAgICAgICBsb2dpblR5cGUucGFzc3dvcmRIYXNoXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBzdWNjZXNzZnVsTG9naW5QYXNzd29yZHMrKztcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBib2R5LmZhY2VUZW1wbGF0ZSAmJlxuICAgICAgICBsb2dpblR5cGUuaXRlbXR5cGUgPT09IFwiRmFjZUxvZ2luVHlwZVwiICYmXG4gICAgICAgIHRoaXMudmFsaWRTZWNyZXQoXG4gICAgICAgICAgYm9keS5mYWNlVGVtcGxhdGUsXG4gICAgICAgICAgbG9naW5UeXBlLmZhY2VHdWlkU2FsdCxcbiAgICAgICAgICBsb2dpblR5cGUuZmFjZUd1aWRIYXNoXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBzdWNjZXNzZnVsTG9naW5QYXNzd29yZHMrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VjY2Vzc2Z1bExvZ2luUGFzc3dvcmRzID49IFJFUVVJUkVEX1BBU1NXT1JEUykge1xuICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gSGVscGVyc1xuICB2YWxpZFNlY3JldCA9IGZ1bmN0aW9uIChwYXNzd29yZCwgc2VjcmV0U2FsdCwgc2VjcmV0SGFzaCkge1xuICAgIGlmIChcbiAgICAgIHBhc3N3b3JkID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHNlY3JldEhhc2ggPT09IHVuZGVmaW5lZCB8fFxuICAgICAgc2VjcmV0U2FsdCA9PT0gdW5kZWZpbmVkXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGhhc2ggPSBjcnlwdG9cbiAgICAgIC5wYmtkZjJTeW5jKHBhc3N3b3JkLCBzZWNyZXRTYWx0LCAxMDAwMCwgNTEyLCBcInNoYTUxMlwiKVxuICAgICAgLnRvU3RyaW5nKFwiaGV4XCIpO1xuICAgIHJldHVybiBzZWNyZXRIYXNoID09PSBoYXNoO1xuICB9O1xuXG4gIGdldFNlY3JldFNhbHRIYXNoID0gZnVuY3Rpb24gKHBhc3N3b3JkKSB7XG4gICAgY29uc3Qgc2FsdCA9IGNyeXB0by5yYW5kb21CeXRlcygxNikudG9TdHJpbmcoXCJoZXhcIik7XG4gICAgY29uc3QgaGFzaCA9IGNyeXB0b1xuICAgICAgLnBia2RmMlN5bmMocGFzc3dvcmQsIHNhbHQsIDEwMDAwLCA1MTIsIFwic2hhNTEyXCIpXG4gICAgICAudG9TdHJpbmcoXCJoZXhcIik7XG5cbiAgICByZXR1cm4geyBzYWx0OiBzYWx0LCBoYXNoOiBoYXNoIH07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW9uZ29EYkNsaWVudDtcbiJdfQ==