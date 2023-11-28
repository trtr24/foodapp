import React from 'react'
import facdyc from './logos/facdyc.png'
import facpya from './logos/facpya.png'
import farq from './logos/farq.png'
import fcb from './logos/fcb.png'
import fcfm from './logos/fcfm.png'
import fcq from './logos/fcq.png'
import ffyl from './logos/ffyl.png'
import fic from './logos/fic.png'
import fime from './logos/fime.png'
import fod from './logos/fod.png'
import ftsydh from './logos/ftsydh.png'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

const RowContainer = () => {
    return (
        <div className='w-full my-12 bg-orange-100 flex flex-col'>
            <div className='w-full h-full flex flex-row items-center justify-center' >
                <Link to={'/FACDYC'} className='flex items-center gap-2'>
                    <div className='w-40 md:w-60 h-50 bg-cardOverlay rounded-lg p-2 mx-4 my-12 backrop-blur-lg hover:drop-shadow-lg'>
                        <div className='w-full h-40 flex items-center justify-center'>
                            <motion.img
                                whileHover={{ scale: 1.2 }} src={facdyc} className='w-40 -mt-8' alt=""
                            />
                        </div>
                        <div className='w-full flex flex-col items-center justify-center'>
                            <p className='text-textColor font-semibold text-base md:text-lg'>
                                FacDyC
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/FACPYA'} className='flex items-center gap-2'>
                    <div className='w-40 md:w-60 h-50 bg-cardOverlay rounded-lg p-2 mx-4 my-12 backrop-blur-lg hover:drop-shadow-lg'>
                        <div className='w-full h-40 flex items-center justify-center'>
                            <motion.img
                                whileHover={{ scale: 1.2 }} src={facpya} className='w-120 -mt-4' alt=""
                            />
                        </div>
                        <div className='w-full flex flex-col items-center justify-center'>
                            <p className='text-textColor font-semibold text-base md:text-lg'>
                                FaCPyA
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/FARQ'} className='flex items-center'>
                    <div className='w-40 md:w-60 h-50 bg-cardOverlay rounded-lg p-2 mx-4 my-12 backrop-blur-lg hover:drop-shadow-lg'>
                        <div className='w-full h-40 flex items-center justify-center'>
                            <motion.img
                                whileHover={{ scale: 1.2 }} src={farq} className='w-120 -mt-4' alt=""
                            />
                        </div>
                        <div className='w-full flex flex-col items-center justify-center'>
                            <p className='text-textColor font-semibold text-base md:text-lg'>
                                FArq
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/FTSYDH'} className='flex items-center'>
                    <div className='w-40 md:w-60 h-50 bg-cardOverlay rounded-lg p-2 mx-4 my-12 backrop-blur-lg hover:drop-shadow-lg'>
                        <div className='w-full h-40 flex items-center justify-center'>
                            <motion.img
                                whileHover={{ scale: 1.2 }} src={ftsydh} className='w-120 -mt-4' alt=""
                            />
                        </div>
                        <div className='w-full flex flex-col items-center justify-center'>
                            <p className='text-textColor font-semibold text-base md:text-lg'>
                                FTSyDH
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='w-full h-full flex flex-row items-center justify-center' >
                <Link to={'/FCB'} className='flex items-center'>
                    <div className='w-40 md:w-60 h-50 bg-cardOverlay rounded-lg p-2 mx-4 my-12 backrop-blur-lg hover:drop-shadow-lg'>
                        <div className='w-full h-40 flex items-center justify-center'>
                            <motion.img
                                whileHover={{ scale: 1.2 }} src={fcb} className='w-120 -mt-1' alt=""
                            />
                        </div>
                        <div className='w-full flex flex-col items-center justify-center'>
                            <p className='text-textColor font-semibold text-base md:text-lg'>
                                FCB
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/FCFM'} className='flex items-center'>
                    <div className='w-40 md:w-60 h-50 bg-cardOverlay rounded-lg p-2 mx-4 my-12 backrop-blur-lg hover:drop-shadow-lg'>
                        <div className='w-full h-40 flex items-center justify-center'>
                            <motion.img
                                whileHover={{ scale: 1.2 }} src={fcfm} className='w-120 -mt-1' alt=""
                            />
                        </div>
                        <div className='w-full flex flex-col items-center justify-center'>
                            <p className='text-textColor font-semibold text-base md:text-lg'>
                                FCFM
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/FCQ'} className='flex items-center'>
                    <div className='w-40 md:w-60 h-50 bg-cardOverlay rounded-lg p-2 mx-4 my-12 backrop-blur-lg hover:drop-shadow-lg'>
                        <div className='w-full h-40 flex items-center justify-center'>
                            <motion.img
                                whileHover={{ scale: 1.2 }} src={fcq} className='w-120 -mt-2' alt=""
                            />
                        </div>
                        <div className='w-full flex flex-col items-center justify-center'>
                            <p className='text-textColor font-semibold text-base md:text-lg'>
                                FCQ
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/FOD'} className='flex items-center'>
                    <div className='w-40 md:w-60 h-50 bg-cardOverlay rounded-lg p-2 mx-4 my-12 backrop-blur-lg hover:drop-shadow-lg'>
                        <div className='w-full h-40 flex items-center justify-center'>
                            <motion.img
                                whileHover={{ scale: 1.2 }} src={fod} className='w-140 -mt-1' alt=""
                            />
                        </div>
                        <div className='w-full flex flex-col items-center justify-center'>
                            <p className='text-textColor font-semibold text-base md:text-lg'>
                                FOD
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='w-full h-full flex flex-row items-center justify-center' >
                <Link to={'/FFYL'} className='flex items-center'>
                    <div className='w-40 md:w-60 h-50 bg-cardOverlay rounded-lg p-2 mx-4 my-12 backrop-blur-lg hover:drop-shadow-lg'>
                        <div className='w-full h-40 flex items-center justify-center'>
                            <motion.img
                                whileHover={{ scale: 1.2 }} src={ffyl} className='w-120 -mt-2' alt=""
                            />
                        </div>
                        <div className='w-full flex flex-col items-center justify-center'>
                            <p className='text-textColor font-semibold text-base md:text-lg'>
                                FFyL
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/FIC'} className='flex items-center'>
                    <div className='w-40 md:w-60 h-50 bg-cardOverlay rounded-lg p-2 mx-4 my-12 backrop-blur-lg hover:drop-shadow-lg'>
                        <div className='w-full h-40 flex items-center justify-center'>
                            <motion.img
                                whileHover={{ scale: 1.2 }} src={fic} className='w-140 -mt-5' alt=""
                            />
                        </div>
                        <div className='w-full flex flex-col items-center justify-center'>
                            <p className='text-textColor font-semibold text-base md:text-lg'>
                                FIC
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={'/FIME'} className='flex items-center'>
                    <div className='w-40 md:w-60 h-50 bg-cardOverlay rounded-lg p-2 mx-4 my-12 backrop-blur-lg hover:drop-shadow-lg'>
                        <div className='w-full h-40 flex items-center justify-center'>
                            <motion.img
                                whileHover={{ scale: 1.2 }} src={fime} className='w-120 -mt-5' alt=""
                            />
                        </div>
                        <div className='w-full flex flex-col items-center justify-center'>
                            <p className='text-textColor font-semibold text-base md:text-lg'>
                                FIME
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default RowContainer