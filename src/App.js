import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { MainContainer, Header, CreateContainer, FACDYC, FACPYA, FARQ, FCB, FCFM, FCQ, FFYL, FIC, FIME, FOD, FTSYDH, Footer } from './componentes/routers';
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunction";
import { actionType } from "./context/reducer";

const App = () => {
    const [{ foodItems }, dispatch] = useStateValue();

    const fetchData = async () => {
        await getAllFoodItems().then(data => {
            dispatch({
                type: actionType.SET_FOOD_ITEMS,
                foodItems: data,
            });
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AnimatePresence mode="wait">
            <div className='w-screen h-auto flex flex-col bg-primary'>
                <Header />

                <main className='mt-16 md:mt-20 px-4 md:px-16 py-4 w-full'>
                    <Routes>
                        <Route path='/*' element={<MainContainer />} />
                        <Route path='/createItem' element={<CreateContainer />} />
                        <Route path='/FACDYC' element={<FACDYC />} />
                        <Route path='/FACPYA' element={<FACPYA />} />
                        <Route path='/FARQ' element={<FARQ />} />
                        <Route path='/FCB' element={<FCB />} />
                        <Route path='/FCFM' element={<FCFM />} />
                        <Route path='/FCQ' element={<FCQ />} />
                        <Route path='/FFYL' element={<FFYL />} />
                        <Route path='/FIC' element={<FIC />} />
                        <Route path='/FIME' element={<FIME />} />
                        <Route path='/FOD' element={<FOD />} />
                        <Route path='/FTSYDH' element={<FTSYDH />} />
                    </Routes>
                </main>
                <div className='w-screen h-min flex flex-col'>
                    <Footer />
                </div>
            </div>
        </AnimatePresence>
    )
}

export default App;
