'use client';
import React from 'react';
import { auth, googleProvider } from '../../../services/firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation'; // Sử dụng router để chuyển hướng

const Login: React.FC = () => {
    const router = useRouter();

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            // Lấy thông tin người dùng từ kết quả
            const user = result.user;
            // Lưu thông tin người dùng vào localStorage hoặc trạng thái toàn cục
            localStorage.setItem('user', JSON.stringify({
                displayName: user.displayName,
                photoURL: user.photoURL,
            }));
            // Chuyển hướng đến trang chính
            console.log("vao day")
            const loginEvent = new Event('userLogin');
            window.dispatchEvent(loginEvent);
            router.push('/');
        } catch (error) {
            console.error('Error logging in with Google:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-blue-600 mb-4">Login</h1>
                    <p className="text-gray-600">Welcome back! Please login to your account.</p>
                </div>
                <div className="flex justify-center mb-4">
                    <button
                        onClick={handleGoogleLogin}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    >
                        Sign in with Google
                    </button>
                </div>
                <hr className="my-4" />
                <div className="text-center">
                    <p className="text-gray-600">Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Sign up</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
