import { FC } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import "./pagesStyle.css";
interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
}

export const LoginPage: FC<LoginProps> = ({ setIsLoggedIn }) => {

		const googleLogin = useGoogleLogin({
		  onSuccess: (tokenResponse) => {
			 console.log('Google login successful', tokenResponse);
			 setIsLoggedIn(true);
		  },
		  onError: () => {
			 console.error('Google login failed');
	
		  },
		  flow: 'auth-code', 
		});
 
  return (
    <main className='main-page'>
      <h1 className='main-title'>
        Hello! This application is for those who love to travel and be aware of
        weather conditions
      </h1>
      <p>Login with Google</p>
		<button className='button-google' onClick={() => googleLogin()}>
      Sign in with Google 🚀
    </button>
    </main>
  );
};
