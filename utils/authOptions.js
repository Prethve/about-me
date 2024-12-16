import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code"
				}
			}
		})
	],
	callbacks: {
		// Invoked on successful sign in 
		async signIn({profile}) {
			// Connect to Database
			// Check if the user logging in exists
			// If not, add user to DB
			// Allow user to sign in 
		},
		// Modifies the session object
		async session({session}) {
			// Get user from DB
			// Assign the userId to the session
			// Return that session
		}
	}
};