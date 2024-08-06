import React, { useState, FormEvent } from "react";
import './ContactForm.css';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);

        setName('');
        setEmail('');
        setPhone('');
        setSubmitted(true);
    };

    return (
        <div className="contact-form">
            {submitted ? (
                <p>Obrigado pelo seu contato!!!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Your phone number"
                            required
                        />
                    </div>
                    <button type="submit">Send</button>
                </form>
            )}
        </div>
    );
};

export default Contact;
