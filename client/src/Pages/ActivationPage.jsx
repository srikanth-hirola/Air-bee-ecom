import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";
import DronesFooter from "../components/DronesHomepage/DronesFooter";
import DronesHeader from "../components/Headers/DronesHeader";
import DronesHeader2 from "../components/Headers/DronesHeader2";

const ActivationPage = () => {
    const { activation_token } = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (activation_token) {
            const sendRequest = async () => {
                await axios
                    .post(`${server}/user/activation`, {
                        activation_token,
                    })
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => {
                        setError(true);
                    });
            };
            sendRequest();
        }
    }, [activation_token]);

    return (
        <>
            <DronesHeader />
            <DronesHeader2 />
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap"
                }}
            >
                {error ? (
                    <div class="success-card"
                        style={{
                            width: "60%",
                            height: "100%",
                            margin: "40px 0px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // margin:"20px"
                        }}
                    >
                        <p>Your token is expired!</p>
                    </div>
                ) : (
                    <div class="success-card">
                        <div style={{ borderRradius: "200px", height: "200px", width: "200px", background: "#F8FAF5", margin: "0 auto" }}>
                            <i class="checkmark">✓</i>
                        </div>
                        <h1>Greetings from Air Bee: Your Key to a World of Electronic Wonders!</h1>
                        <p>Welcome to Air Bee! 🚀 Your account has been successfully registered.
                        </p>
                    </div>
                )}
            </div>
            <DronesFooter />
        </>
    );
};

export default ActivationPage;
