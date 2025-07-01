// AccessToken.jsx
// Component to get access token

import React, { useState, useEffect } from 'react';
import { loginRequest } from '../authConfig';

import { useMsal } from '@azure/msal-react';


const AccessToken = ({ onTokenFetched }) => {
    const [token, setToken] = useState('');
    const { instance, accounts } = useMsal();
    let useEffectCalled = false;

    useEffect(() => {
        if (!useEffectCalled) {
            useEffectCalled = true;

            const fetchToken = async () => {
                try {
                    // Check if there is an active account
                    if (accounts.length > 0) {
                        // If there is an active account, try to acquire the token silently
                        const response = await instance.acquireTokenSilent({
                            ...loginRequest,
                            account: accounts[0],
                        });

                        setToken(response.accessToken);
                        onTokenFetched(response.accessToken);
                    } else {
                        // If no account, prompt the user to sign in
                        const loginResponse = await instance.loginPopup(loginRequest);
                        const response = await instance.acquireTokenSilent({
                            ...loginRequest,
                            account: loginResponse.account,
                        });

                        setToken(response.accessToken);
                        onTokenFetched(response.accessToken);

                        // call the msal flask route
                        // fetch('http://localhost:5000/msal/test', {
                        //     method: 'GET',
                        //     headers: {
                        //         'Content-Type': 'application/json',
                        //         'Authorization': `Bearer ${response.accessToken}`
                        //     }
                        // })
                        //     .then(response => response.json())
                        //     .then(data => {
                        //         console.log(data);
                        //     })
                        //     .catch(error => {
                        //         console.error('Error:', error);
                        //     });

                    }
                } catch (error) {
                    console.error("Error acquiring token:", error);
                }
            };

            fetchToken();
        }
    }, []);

    return (
        <div></div>
    );
};

export default AccessToken;