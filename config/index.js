import path from 'path';
import dotenv from 'dotenv';

// Parse Environmental Vars
dotenv.config({
    path: path.resolve('./.env')
});
const {
    PORT,
    TRAFIC_MANAGER,
    TENENT_NAME,
    CLIENT_ID,
    REDIRECT_URL,
    CLIENT_SECRET
} = process.env;

module.exports = {
    PORT: PORT||3000,
    TRAFIC_MANAGER,
    AUTHSTRAYEGY:{identityMetadata: 'https://login.microsoftonline.com/'+TENENT_NAME+'/v2.0/.well-known/openid-configuration', 
    clientID: CLIENT_ID,
    responseType: 'code id_token', 
    responseMode: 'form_post', 
    redirectUrl: REDIRECT_URL || 'http://localhost:3000/auth/openid/return', 
    allowHttpForRedirectUrl: true,
    clientSecret: CLIENT_SECRET, 
    validateIssuer: false,
    issuer: null,
    passReqToCallback: false,
    useCookieInsteadOfSession: true,
    cookieEncryptionKeys: [ 
        { 'key': '12345678901234567890123456789012', 'iv': '123456789012' },
        { 'key': 'abcdefghijklmnopqrstuvwxyzabcdef', 'iv': 'abcdefghijkl' }
      ],
    scope: ['profile', 'offline_access'],
    loggingLevel: 'info',
    nonceLifetime: null,
    nonceMaxAmount: 5,
    clockSkew: null},
    destroySessionUrl:'https://login.microsoftonline.com/common/oauth2/logout?post_logout_redirect_uri='+TRAFIC_MANAGER
      
};