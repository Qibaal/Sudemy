"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { signInWithEmail, signInWithGoogle } from "@/helper/auth";

import SudemyLogo from "@/public/logo/logo.png";
import GoogleLogo from "@/public/logo/google-logo.png";

const page = () => {
    const router = useRouter();

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
    
        const { email, password } = userData;

        if (!email || !password) {
            console.error("Please fill in both email and password.");
            return;
        }
    
        // Call the signInWithEmail function
        const result = await signInWithEmail(email, password);
        if (result.success) {
            console.log("Sign-in successful:", result.user);
            router.push("/");
        } else {
            console.error("Sign-in failed:", result.error);
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();

        const result = await signInWithGoogle();

        if (result.success) {
            console.log("User signed in:", result.user);
            router.push("/");
        } else {
            console.error("Sign-in error:", result.error);
        }
    }

    return (
        <section className="gradient-form min-h-screen h-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-700">
            <div className="container h-full max-w-screen-lg">
                <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap">
                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">
                                        <div className="text-center">
                                            <Image
                                                className="mx-auto"
                                                src={SudemyLogo}   
                                                alt="logo"
                                                width={150}
                                            />
                                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                Welcome to Sudemy
                                            </h4>
                                        </div>

                                        <form>
                                            <p className="mb-4">
                                                Please login to your account
                                            </p>

                                            <div
                                                className="relative mb-4"
                                                data-twe-input-wrapper-init
                                            >
                                                <input
                                                    type="text"
                                                    name="email"
                                                    className="peer border border-2-black block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Email"
                                                    value={userData.email}
                                                    onChange={handleChange}
                                                />
                                                <label
                                                    htmlFor="exampleFormControlInput1"
                                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                                                >
                                                    Email
                                                </label>
                                            </div>

                                            <div
                                                className="relative mb-4"
                                                data-twe-input-wrapper-init
                                            >
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="peer block min-h-[auto] w-full rounded border border-2-black  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInput2"
                                                    placeholder="Password"
                                                    value={userData.password}
                                                    onChange={handleChange}
                                                />
                                                <label
                                                    htmlFor="exampleFormControlInput2"
                                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                                                >
                                                    Password
                                                </label>
                                            </div>

                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <button
                                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                                    type="button"
                                                    data-twe-ripple-init
                                                    data-twe-ripple-color="light"
                                                    style={{
                                                        background:
                                                            "linear-gradient(to right, #0096c7, #0077b6, #023e8a, #03045e)",
                                                    }}
                                                    onClick={handleSignIn}
                                                >
                                                    Log in
                                                </button>

                                                <button
                                                    className="flex items-center justify-center mb-3 w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-lg transition duration-150 ease-in-out hover:shadow-md focus:shadow-md focus:outline-none focus:ring-0 active:shadow-sm"
                                                    type="button"
                                                    style={{
                                                        background: "white",
                                                        border: "1px solid #ccc",
                                                    }}
                                                    onClick={handleGoogleSignIn}
                                                >
                                                    <div className="relative w-5 h-5 mr-2">
                                                        <Image
                                                            src={GoogleLogo}
                                                            alt="Google Logo"
                                                            layout="fill"
                                                            objectFit="contain"
                                                        />
                                                    </div>
                                                    Sign In with Google
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 me-2">
                                                    Don't have an account?
                                                </p>
                                                <Link href="/signup">
                                                    <button
                                                        className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
                                                        data-twe-ripple-init
                                                        data-twe-ripple-color="light"
                                                    >
                                                        Register
                                                    </button>
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div
                                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                                    style={{
                                        background:
                                            "linear-gradient(to right, #0096c7, #0077b6, #023e8a, #03045e)",
                                    }}
                                >
                                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                        <h4 className="mb-6 text-xl font-semibold">
                                            We are more than just a company
                                        </h4>
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
