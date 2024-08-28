import { useEffect, useState } from 'react';
import googleLogo from '../assets/google-logo.png';
import icnSearch from '../assets/icn_search.png';
import { auth, googleProvider } from '../../firebase/setup';
import { signInWithPopup, signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            console.log('curretUser: ', currentUser)
            setUser(currentUser);
        });

        return () => unsubscribe();
    },[]);

    const googleSignin = async () => {
        try {
            if (user) {
                await signOut(auth)
            } else {
                await signInWithPopup(auth, googleProvider)
            }
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='bg-white flex items-center justify-center p-6 w-screen sticky'>
            <div className='flex items-center ml-5'>
                <img src={googleLogo} className='w-20'/>
                <h1 className='text-gray-500 text-2xl font-medium ml-3'>News</h1>                
            </div>
            <div className='ml-32 bg-zinc-100 flex items-center border border-spacing-1 p-3 w-6/12 rounded-lg'>
                <img src={icnSearch} className='w-5 h-5'/>
                <input placeholder='Search for news' className='ml-4 bg-zinc-100'/>
            </div>
            <button className='ml-44 bg-blue-600 text-white p-2 w-28 rounded-md' onClick={googleSignin}>{user ? 'Sign out' : 'Sign in'}</button>
        </div>
    );
}

export default Navbar