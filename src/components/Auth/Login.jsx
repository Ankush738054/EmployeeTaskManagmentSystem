import React, { useState } from "react";

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password)
        // console.log(`Email is ${email} and password is ${password}`);
        setEmail("")
        setPassword("")
    };
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 rounded-xl border-emerald-600 p-20">
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className="flex flex-col items-center justify-center"
                >
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        name="email"
                        className="outline-none bg-transparent border-2 border-emerald-600 py-2 px-6 text-xl rounded-full placeholder:text-gray-400"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your Email"
                    />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        name="password"
                        className="outline-none bg-transparent border-2 border-emerald-600 py-2 px-6 mt-3 text-xl rounded-full placeholder:text-gray-400"
                        type="password"
                        placeholder="Enter Password"
                    />
                    <button
                        type="submit"
                        className="outline-none border-none hover:bg-emerald-700 font-semibold bg-emerald-600 py-2 px-8 mt-10 text-xl rounded-3xl text-white cursor-pointer"
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
