import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "../../redux/store";
import UpcomingMovies from "../upcoming-movies/component"; // Import your component here

const Home = (props) => {
    return (
        <Provider store={store}>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<UpcomingMovies />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    );
};

export default Home;
