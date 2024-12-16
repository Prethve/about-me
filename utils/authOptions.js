import GoogleProvider from 'next-auth/providers/google';
import connectDB from '@/config/database';
import User from '@/models/User';

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
		// The profile values are invoked on successful sign in 
		async signIn({profile}) {
			// Connect to Database
			await connectDB();
			// Check if the user logging in exists
			const userExists = await User.findOne({email: profile.email});
			// If not, add user to DB
			if (!userExists) {
				// Truncate username if too long
				const username = profile.name.slice(0, 20);
				await User.create({
					email: profile.email,
					username,
					image: profile.picture
				});
			}
			// Allow user to sign in 
			return true;
		},
		// Modifies the session object that has already been created upon signing in. 
		// We are modifying the session object to add the id created by the database into the session.
		async session({session}) {
			// Get user from DB
			const user = await User.findOne({email: session.user.email});
			// Assign the userId to the session
			session.user.id = user._id.toString();
			// Return that session
			return session;
		}
	}
};