import styles from "./styles.module.css"
import React, { useState } from "react"
import axios from "axios"
import { Link, Navigate } from "react-router-dom"

const Main = ({ setData, setDane, setMessage }) => {
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location = "/"
    }
    const handleGetDane = async () => {
        const token = localStorage.getItem("token")
        if (token) {
            try {
                const config = {
                    method: 'get',
                    url: 'http://localhost:8080/api/dane',
                    headers: { 'Content-Type': 'application/json', 'x-access-token': token }
                }
                const { data: res } = await axios(config)
                setDane(res.data);
                
            } catch (error) {
                if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                    localStorage.removeItem("token")
                    window.location.reload()
                    console.log(error)
                }
            }
            
        }
    }
    
    const handleDelete = async () => {
        const token = localStorage.getItem("token")
        if (token) {
            const confirmed = window.confirm("Czy na pewno chcesz usunąć konto?");

            if (confirmed) {
                try {
                    const config = {
                        method: 'get',
                        url: 'http://localhost:8080/api/delete',
                        headers: { 'Content-Type': 'application/json', 'x-access-token': token }
                    }
                    await axios(config);
                    localStorage.removeItem("token")
                    window.location = "/"
                } catch (error) {
                    if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                        localStorage.removeItem("token")
                        window.location.reload()
                    }
                }
            }
        }
    }
    const handleGetInfo = async () => {
        const token = localStorage.getItem("token")
        if (token) {
            try {
                const config = {
                    method: 'get',
                    url: 'http://localhost:8080/api/info',
                    headers: { 'Content-Type': 'application/json', 'x-access-token': token }
                }
                const { data: res } = await axios(config)
                setData(res.data);
                setMessage(res.message);
                localStorage.setItem("message", res.message);
            } catch (error) {
                if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                    localStorage.removeItem("token")
                    window.location.reload()
                }
            }
        }
    }
    return (
        <div className={styles.main_container}>
            <div>
                <h1 className={styles.name}>Moja strona</h1>
            </div>

            <nav className={styles.navbar}>
            <Link to="/mapa">
                    <button className={styles.white_btn} onClick={handleGetDane}>
                        Mapa
                    </button>
                </Link>
                <Link to="/info">
                    <button className={styles.white_btn} onClick={handleGetInfo}>
                        Szczegóły konta
                    </button>
                </Link>
                <button type="button" className={styles.white_btn} onClick={handleDelete}>
                    Usuń konto
                </button>
                <button type="button" className={styles.white_btn} onClick={handleLogout}>
                    Wyloguj się
                </button>
            </nav>
        </div >
    )
}
export default Main