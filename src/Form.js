import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

// Reservation form
const Form = () => {

    const [showResult, setShowResult] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        checkInDate: "",
        checkOutDate: "",
        numberOfAdults: "0",
        numberOfChildren: "0",
    })

    const [errorClass, setErrorClass] = useState("error-div-display-none");
    const handleSubmit = (event) => {
        event.preventDefault()

        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;

        if (name === '' || email === '' || phone === '') {
            setErrorClass("error-div-display");
        } else {
            setErrorClass("error-div-display-none");
            setShowResult(1);
        }
    };

    return (
        <div>
            <header>
                <div className="headerDecoration1"></div>
                <div className="navTitleDiv">
                    <h1>⸙ SUNRISE HOTEL ⸙</h1>
                </div>
                <div className="headerDecoration2"></div>

                <h2 className='header'>Booking Form</h2>
            </header>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Guest Information</legend>

                    <label htmlFor="name">
                        Contact person:
                    </label>
                    <input
                        type="name"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                    />

                    <label htmlFor="email">
                        Contact E-mail:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    />

                    <label htmlFor="phone">
                        Contact Number:
                    </label>
                    <input
                        type="phone"
                        id="phone"
                        name="phone"
                        onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                    />
                    <label htmlFor="checkInDate">
                        Check-in Date
                    </label>
                    <input
                        type="date"
                        id="checkInDate"
                        name="checkInDate"
                        onChange={(event) => setFormData({ ...formData, checkInDate: event.target.value })}
                    />
                    <label htmlFor="checkOutDate">
                        Check-out Date
                    </label>
                    <input
                        type="date"
                        id="checkOutDate"
                        name="checkOutDate"
                        onChange={(event) => setFormData({ ...formData, checkOutDate: event.target.value })}
                    />
                    <div className="error-div">
                        <p className={`errorName error ${errorClass}`}>
                            All required.<br />
                            Please input guest information.
                        </p>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Number of Guests</legend>
                    <label htmlFor="numberOfAdults">Adults</label>
                    <input
                        type="number"
                        id="numberOfAdults"
                        name="numberOfAdults"
                        min="1"
                        max="10"
                        value="1"
                        onChange={(event) => setFormData({ ...formData, numberOfAdults: event.target.value })}
                    />
                    <label htmlFor="numberOfChildren">Children</label>
                    <input
                        type="number"
                        id="numberOfChildren"
                        name="numberOfChildren"
                        min="0"
                        max="10"
                        value="0"
                        onChange={(event) => setFormData({ ...formData, numberOfChildren: event.target.value })}
                    />
                </fieldset>
                <fieldset>
                    <legend>Payment Method</legend>
                    <input
                        type="radio"
                        id="credit-card"
                        name="payment"
                        value="Credit Card"
                        onChange={(event) => setFormData({ ...formData, payment: event.target.value })}
                        required
                    />
                    <label htmlFor="credit-card">Credit Card
                    </label>
                    <input
                        type="radio"
                        id="debit-card"
                        name="payment"
                        value="Debit Card"
                        onChange={(event) => setFormData({ ...formData, payment: event.target.value })}
                    />
                    <label htmlFor="debit-card">Debit Card
                    </label>
                    <input
                        type="radio"
                        id="paypal"
                        name="payment"
                        value="PayPal"
                        onChange={(event) => setFormData({ ...formData, payment: event.target.value })}
                    />
                    <label htmlFor="paypal">PayPal
                    </label>
                    <input
                        type="radio"
                        id="cash"
                        name="payment"
                        value="Cash"
                        onChange={(event) => setFormData({ ...formData, payment: event.target.value })}
                    />
                    <label htmlFor="cash">Cash
                    </label>

                    <label htmlFor="submit">
                    </label>
                </fieldset>
                <input type="submit" id="confirmBooking" value="Confirm Booking" />
                <div>
                    <button className="button">{<Link to={"/room"}>Go Back</Link>}</button>
                </div>
            </form>

            {/* Show confirmarion when reservation is successfully placed */}
            <h1>{showResult ? "Reservation Successful 👍" : ""}</h1>
            {showResult ?
                <div className="resultDiv">
                    <div className="result"> {showResult ? "Name : " + formData.name : ""}</div>
                    <div className="result"> {showResult ? "Email : " + formData.email : ""}</div>
                    <div className="result"> {showResult ? "Phone : " + formData.phone : ""}</div>
                    <div className="result"> {showResult ? "Check In Date : " + formData.checkInDate : ""}</div>
                    <div className="result"> {showResult ? "Check Out Date : " + formData.checkOutDate : ""}</div>
                    <div className="result"> {showResult ? "Number of Adults : " + formData.numberOfAdults : ""}</div>
                    <div className="result"> {showResult ? "Number of Children : " + formData.numberOfChildren : ""}</div>
                </div>
                : ""}
            <Footer />
        </div>
    );
}

export default Form;