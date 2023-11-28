import React, { useState } from 'react'
import Logo from '../componentes/imagenes/LogoF.png'
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';
import Avatar from '../componentes/imagenes/avatar.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../componentes/firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user }, dispatch] = useStateValue();

    const [isMenu, setIsMenu] = useState(false)

    const login = async () => {
        if (!user) {
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            localStorage.setItem('user', JSON.stringify(providerData[0]));
        } else {
            setIsMenu(!isMenu);
        }
    };

    const logout = () => {
        setIsMenu(false)
        localStorage.clear()

        dispatch({
            type: actionType.SET_USER,
            user: null
        })
    }

    return (
        <header className='fixed z-50 w-screen p-1 px-1 md:p-1 md:px-3'>

            {/* desktops & tablets*/}
            <div className='hidden md:flex w-full h-full items-center justify-between bg-primary'>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} className='w-20 object-cover' alt='logo' />
                    <p className=' text-amber-600 text-xl font-bold'>UniFood</p>
                </Link>

                <div className='flex items-center px-5'>
                    <motion.ul initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} className='flex items-center gap-8 '>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                    </motion.ul>
                    <div className='relative flex items-center right-4 justify-center'>
                        <MdShoppingBasket className=' text-gray-800 text-2xl ml-8 cursor-pointer' />
                        <div className='absolute -top-2 -right-2  w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'>2</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <motion.img whileTap={{ scale: 0.8 }} src={user ? user.photoURL : Avatar} className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' alt='userprofile' onClick={login} />
                        <div>
                            {
                                isMenu && (
                                    <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-4'>
                                        {user && user.email === 'ricardo.lr24@gmail.com' && (
                                            <Link to={"/createItem"}>
                                                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer rounded-lg hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'

                                                    onClick={() => setIsMenu(false)}

                                                >New Item <MdAdd /></p>
                                            </Link>
                                        )}
                                        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer rounded-lg hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'
                                            onClick={logout}
                                        >Log Out<MdLogout /></p>
                                    </motion.div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/*mobile*/}
            <div className='flex item justify-between md:hidden w-full h-full bg-primary'>

                <div className='relative flex items-center right-4 justify-center'>
                    <MdShoppingBasket className=' text-gray-800 text-2xl ml-7 ' />
                    <div className='absolute bottom-10 -right-2  w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                        <p className='text-xs text-white font-semibold'>2</p>
                    </div>
                </div>

                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} className='w-20 object-cover' alt='logo' />
                    <p className=' text-amber-600 text-xl font-bold'></p>
                </Link>

                <div className='flex items-center px-1'>
                    <motion.img whileTap={{ scale: 0.8 }} src={user ? user.photoURL : Avatar} className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' alt='userprofile' onClick={login} />
                    {
                        isMenu && (
                            <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-16 right-5'>
                                <ul className='flex flex-col'>
                                    <li className='text-base text-textColor hover:text-headingColor  duration-100 transition-all rounded-t-lg  ease-in-out hover:bg-slate-200 px-4 py-2'
                                        onClick={() => setIsMenu(false)}
                                    >Home</li>
                                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out hover:bg-slate-200 px-4 py-2'
                                        onClick={() => setIsMenu(false)}
                                    >Menu</li>
                                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out hover:bg-slate-200 px-4 py-2'
                                        onClick={() => setIsMenu(false)}
                                    >About Us</li>
                                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out hover:bg-slate-200 px-4 py-2'
                                        onClick={() => setIsMenu(false)}
                                    >Service</li>
                                </ul>
                                {
                                    user && user.email === 'ricardo.lr24@gmail.com' && (
                                        <Link to={'/createItem'}>
                                            <p className='m-2 p-2 rounded-md shadow-md flex items-center justify-center  bg-gray-300 hover:bg-slate-400 transition-all duration-100 ease-in-out text-textColor text-base'onClick={() => setIsMenu(false)}>New Item <MdAdd /></p>
                                        </Link>
                                    )
                                }

                                <p className='m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-300 gap-3 hover:bg-gray-400 transition-all duration-100 ease-in-out text-textColor text-base'
                                    onClick={logout}
                                >Log Out<MdLogout /></p>
                            </motion.div>
                        )
                    }
                </div>
            </div>

        </header>
    )
}

export default Header;