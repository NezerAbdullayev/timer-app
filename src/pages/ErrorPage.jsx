import { Link } from "react-router-dom"

function ErrorPage() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center">
            <div className="text-6xl font-bold text-red-500 mb-4">404</div>
            <p className="text-2xl font-semibold mb-8">Page Not Found</p>
            <p className="mb-6">Sorry, the page you are looking for does not exist or has been moved.</p>
            <Link
                to="/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Go Back to Alarm
            </Link>
        </div>
    )
}

export default ErrorPage
