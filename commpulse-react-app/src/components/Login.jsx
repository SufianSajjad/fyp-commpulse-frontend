import React, { useState } from 'react'
import logo from '../assets/logo/logo-white.png' // App logo
import AccessToken from './AccessToken';

function Login() {
    const [getAccessToken, setGetAccessToken] = useState(false);

    const handleMSLogin = async () => {
        setGetAccessToken(true);
    }

    const handleTokenFetched = (token) => {
        console.log(token);
        // send the token to the backend
    }

    return (
        <div className='h-screen flex w-full'>
            <div className='left flex justify-center items-center flex-1'>
                <div className='w-1/2 flex flex-col gap-5'>
                    <h1 className='mx-auto text-2xl font-bold'>LOGIN</h1>
                    <form className='flex flex-col gap-5 text-sm'>
                        <input
                            type='text'
                            placeholder='Username'
                            // value={username}
                            // onChange={(e) => setUsername(e.target.value)}
                            className='border-b-2 p-2 border-palettePurple focus:bg-neutral-200 focus:outline-none'
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            className='border-b-2 p-2 border-palettePurple focus:bg-neutral-200 focus:outline-none'
                        />
                        <button className='bg-gradient-to-r-custom from-palettePink to-palettePurple text-white rounded-md p-2'>
                            LOGIN
                        </button>

                        <button className='bg-gradient-to-r-custom from-palettePink to-palettePurple text-white rounded-md p-2'>
                            SIGNUP
                        </button>
                    </form>

                    { /* Microsoft Login */}

                    <button className='border' onClick={handleMSLogin}>
                        Sign-in With Microsoft
                    </button>

                    { /* Get access token only when user prompts to login through MS */}

                    {getAccessToken && <AccessToken onTokenFetched={handleTokenFetched}/>}
                </div>
            </div>
            <div className='right flex items-center justify-center flex-1 bg-gradient-to-r-custom from-palettePink to-palettePurple'>
                <img src={logo} alt='commpulse-logo' className='w-1/3' />
            </div>
        </div>
    )
}

export default Login