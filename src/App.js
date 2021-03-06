import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Routes, Route } from "react-router-dom";
import {Container} from "react-bootstrap";
import {WrappedSignIn} from './SignIn';
import Welcome from "./Welcome";
import GamesList from "./GamesList";
import Game from "./Game"
import SignUp from "./SignUp";
import Jokes from "./Jokes";
import Notes from "./Notes";
import Numtastic from "./Numtastic";


export default function App () {
    return(
        <Container>
            <Routes>
                <Route path="/" element={<Welcome/>} />
                <Route path="/signin" element={<WrappedSignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/games" element={<GamesList/>} />
                <Route path="/games/:gameId" element={<Game/>} />
                <Route path="/jokes" element={<Jokes/>} />
                <Route path="/numtastic" element={<Numtastic/>} />
                <Route path="/contact_us" element={<Notes/>} />
            </Routes>
        </Container>
    )
}
