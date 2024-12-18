"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { signUpWithEmail } from "@/helper/auth";

import SudemyLogo from "@/public/logo/logo.png";

const page = () => {
    const router = useRouter();

    const [userData, setUserData] = useState({
        fullname: "",
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

    const handleSignUp = async (e) => {
        e.preventDefault();

        const { email, password, fullname } = userData;

        if (!email || !password || !fullname) {
            console.error("Please fill in all fields");
            return;
        }

        const result = await signUpWithEmail(email, password, fullname);
        if (result.success) {
            console.log("User signed up successfully:", result.user);
            router.push("/");
        } else {
            console.error("Sign-up error:", result.error);
        }
    };

    return (
        <section className="gradient-form min-h-screen h-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-700">
            <div className="container h-full max-w-screen-lg">
                <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap">
                                <div
                                    className="flex items-center rounded-lg lg:w-6/12  lg:rounded-br-none lg:rounded-tr-none"
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

                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">
                                        <div className="text-center">
                                            <Image
                                                className="mx-auto"
                                                src={SudemyLogo}
                                                alt="logo"
                                                width={150}
                                            />
                                        </div>

                                        <form>
                                            <p className="mb-4">
                                                Please Sign Up
                                            </p>

                                            <div
                                                className="relative mb-4"
                                                data-twe-input-wrapper-init
                                            >
                                                <input
                                                    type="text"
                                                    name="fullname"
                                                    className="peer block min-h-[auto] w-full rounded border border-2-black  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Full Name"
                                                    value={userData.fullname}
                                                    onChange={(e) =>
                                                        handleChange(e)
                                                    }
                                                />
                                                <label
                                                    htmlFor="exampleFormControlInput1"
                                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                                                >
                                                    Name
                                                </label>
                                            </div>

                                            <div
                                                className="relative mb-4"
                                                data-twe-input-wrapper-init
                                            >
                                                <input
                                                    type="text"
                                                    name="email"
                                                    className="peer block min-h-[auto] w-full rounded border border-2-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInput2"
                                                    placeholder="Email"
                                                    value={userData.email}
                                                    onChange={handleChange}
                                                />
                                                <label
                                                    htmlFor="exampleFormControlInput2"
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
                                                    className="peer block min-h-[auto] w-full rounded border border-2-black      bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInput3"
                                                    placeholder="Password"
                                                    value={userData.password}
                                                    onChange={handleChange}
                                                />
                                                <label
                                                    htmlFor="exampleFormControlInput3"
                                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                                                >
                                                    Password
                                                </label>
                                            </div>

                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <button
                                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                                    style={{
                                                        background:
                                                            "linear-gradient(to right, #0096c7, #0077b6, #023e8a, #03045e)",
                                                    }}
                                                    onClick={handleSignUp}
                                                >
                                                    Sign Up
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 me-2">
                                                    Have an account?
                                                </p>
                                                <Link href="/signin">
                                                    <button
                                                        className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
                                                        data-twe-ripple-init
                                                        data-twe-ripple-color="light"
                                                    >
                                                        Sign In
                                                    </button>
                                                </Link>
                                            </div>
                                        </form>
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
