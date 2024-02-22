import { FC } from 'react';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
}

export const LoginPage: FC<LoginProps> = ({ setIsLoggedIn }) => {
  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    console.log(credentialResponse);
    // If you are using the authorization code flow, you will receive a code to be exchanged for an access token
    const authorizationCode = credentialResponse.credential;

    try {
      // Send the authorization code to your backend server
      const response = await axios.post(
        '/api/auth/google',
        { code: authorizationCode },
        {
          headers: {
            'Content-Type': 'application/json',
            'Cross-Origin-Opener-Policy': 'no-referrer-when-downgrade',
          },
        }
      );
      // Handle the response from your backend server
      console.log('Login successful, backend response:', response.data);
    } catch (error) {
      // Handle errors in communicating with your backend server
      console.error('Error exchanging authorization code:', error);
    }
  };
  const handleError = () => {
    console.error('Google login failed');
  };

  return (
    <>
      <h1>
        Hello! This application is for those who love to travel and be aware of
        weather conditions
      </h1>
      <p>Login with Google</p>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} useOneTap />
    </>
  );
};
