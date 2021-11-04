import { SvelteKitAuth, Providers } from 'sk-auth';
import dotenv from 'dotenv';
dotenv.config();

export const appAuth = new SvelteKitAuth({
  providers: [
    new Providers.TwitchOAuth2Provider({
      clientId: process.env['TWITCH_OAUTH_CLIENT_ID'],
      clientSecret: process.env['TWITCH_OAUTH_CLIENT_SECRET'],
      profile(profile, tokens) {
        return { ...profile, provider: 'twitch' };
      },
    }),
  ],
  jwtSecret: process.env['JWT_SECRET_KEY'],
});