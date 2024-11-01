// src/pages/HomePage.jsx
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'

export default function HomePage() {
    const [count, setCount] = useState(0)

    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <header className="flex space-x-4">
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="w-24 h-24" alt="React logo" />
            </a>
        </header>

        <main className="text-center mt-8">
        <h1 className="text-4xl font-bold">Welcome to Vite + React + Tailwind</h1>
        <p className="mt-4 text-gray-600">
            This is a simple page created with Tailwind CSS in React.
        </p>

        <div className="mt-8 p-6 bg-white rounded shadow-lg">
            <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
            Count is {count}
            </button>
            <p className="mt-4 text-gray-700">
            Click the button to increase the count.
            </p>
        </div>
        </main>

        <footer className="mt-12 text-gray-500 text-sm">
            <p>Click on the logos above to learn more about Vite and React.</p>
        </footer>
        </div>
    )
}
