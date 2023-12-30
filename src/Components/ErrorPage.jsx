import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className="flex h-screen items-center justify-center p-2">
                <div className="bg-blue-100 p-8 rounded shadow-lg text-center">
                    <h1 className="text-4xl font-bold text-gray-800">
                        404 - Page Not Found
                    </h1>
                    <p className="text-gray-600 mt-4">
                        Sorry, the page you are looking for does not exist.
                    </p>
                    <img
                        src="https://i.ibb.co/kqqFPrM/istockphoto-1200474333-1024x1024.jpg"
                        alt="404 Image"
                        className="w-80 mx-auto mt-6"
                    />
                    <p className="text-blue-500 mt-4 text-sm">
                        Back to{" "}
                        <a href="/" className="underline font-bold">
                            Home
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;