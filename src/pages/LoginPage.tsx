import { FC} from "react";
import { GoogleLogin } from '@react-oauth/google';



interface LoginProps {
	setIsLoggedIn: (value: boolean) => void;
}


export const LoginPage: FC<LoginProps>  = ({setIsLoggedIn}) => {

 return <>
 <h1>Hello! This application is for those who love to travel and be aware of weather conditions</h1>
 <p>Login with Google</p>
 <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
 </>
};