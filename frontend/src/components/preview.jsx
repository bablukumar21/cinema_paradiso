import React, { useState, useEffect } from 'react';
import API from '../../API';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import CloseButtton from '../../assets/img/icon-close.png';

const api = new API();

const Preview = ({ setShowPreview, selectedMovieId }) => {
    const [movie, setMovie] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        api.getMovie(selectedMovieId)
            .then(movie => {
                setMovie(movie);
            })
            .catch(error => {
                alert('Faild to connect API: /movie/:id/');
            });
    }, []);

    console.log('movie', movie);

    return (
        <>
            <section class="preview">
                {movie && (
                    <div class="opecity">
                        <img class="icon-close" src={CloseButtton} onClick={() => setShowPreview(false)} alt="" />
                        <img class="background2" src={movie.image} alt="" />
                        <div class="preview-content">
                            <div class="preview-img">
                                <img class="preview" src={movie.image} alt="" />
                            </div>
                            
