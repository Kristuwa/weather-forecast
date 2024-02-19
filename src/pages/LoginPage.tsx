import { FC} from "react";
import { useGoogleLogin } from '@react-oauth/google';

interface LoginProps {
	setIsLoggedIn: (value: boolean) => void;
}

export const LoginPage: FC<LoginProps>  = ({setIsLoggedIn}) => {

	// const handleSuccess = (credentialResponse) => {
	// 	// If you are using the authorization code flow, you will receive a code to be exchanged for an access token
	// 	const authorizationCode = credentialResponse.code;
  
	// 	// Send the authorization code to your backend server
	// 	fetch('/api/auth/google', {
	// 	  method: 'POST',
	// 	  headers: {
	// 		 'Content-Type': 'application/json',
	// 	  },
	// 	  body: JSON.stringify({ code: authorizationCode }),
	// 	})
	// 	.then(response => response.json())
	// 	.then(data => {
	// 	  // Handle the response from your backend server
	// 	  console.log('Login successful, backend response:', data);
	// 	})
	// 	.catch(error => {
	// 	  // Handle errors in communicating with your backend server
	// 	  console.error('Error exchanging authorization code:', error);
	// 	});
	//  };
  
	//  const handleError = (errorResponse) => {
	// 	console.error('Google login failed', errorResponse);
	//  };

	const googleLogin = useGoogleLogin({
		onSuccess: (tokenResponse) => {
		  console.log('Google login successful', tokenResponse);
		  // You can now use the tokenResponse to authenticate the user in your app
		},
		onError: () => {
		  console.error('Google login failed');
		  // Handle login errors here
		},
		flow: 'auth-code', // Use 'auth-code' for the authorization code flow
	 });

 return <>
 <h1>Hello! This application is for those who love to travel and be aware of weather conditions</h1>
 <p>Login with Google</p>
 <button onClick={() => googleLogin()}>
      Sign in with Google 🚀
    </button>

 </>
};