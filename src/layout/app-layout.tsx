
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
    return (

        <main className="  container mx-auto w-full min-h-screen text-white">
            <Header />
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,

                    },
                }}
            />

            <Outlet />
        </main>


    );
};

export default AppLayout;