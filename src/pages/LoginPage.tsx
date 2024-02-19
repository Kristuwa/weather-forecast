import { FC} from "react";
import { CredentialResponse, GoogleLogin} from '@react-oauth/google';

interface LoginProps {
	setIsLoggedIn: (value: boolean) => void;
}


export const LoginPage: FC<LoginProps>  = ({setIsLoggedIn}) => {

	const handleSuccess = (credentialResponse: CredentialResponse) => {
		// If you are using the authorization code flow, you will receive a code to be exchanged for an access token
		const authorizationCode = credentialResponse.code;
  
		// Send the authorization code to your backend server
		fetch('/api/auth/google', {
		  method: 'POST',
		  headers: {
			 'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({ code: authorizationCode }),
		})
		.then(response => response.json())
		.then(data => {
		  // Handle the response from your backend server
		  console.log('Login successful, backend response:', data);
		})
		.catch(error => {
		  // Handle errors in communicating with your backend server
		  console.error('Error exchanging authorization code:', error);
		});
	 };
  
	 const handleError = (errorResponse: any) => {
		console.error('Google login failed', errorResponse);
	 };


 return <>
 <h1>Hello! This application is for those who love to travel and be aware of weather conditions</h1>
 <p>Login with Google</p>
 <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        useOneTap
        flow="auth-code"
      />
 </>
};