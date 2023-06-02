const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "454138835348-ed91eum2v4p9dvg5u5daslmu493rjsq6.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
