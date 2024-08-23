
import { SignIn, useClerk, useUser } from '@clerk/clerk-react'
import { useEffect, useState } from 'react'
import AddToWishListBtn from '../components/AddToWishList-btn'
import Product from "./../../types/index"
import data from "../../data"
import { useDataBase } from "../../zustant-store/useDBStore"
import toast from 'react-hot-toast'
const Home = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [isUserSaved] = useState(localStorage.getItem("isUserSaved") ? true : false)
    // const fetchProduct = async () => {
    //     const response = await fetch('https://mern-24.onrender.com/products/all')
    //     const data = await response.json();
    //     setProducts(data);
    // }

    useEffect(() => {
        // fetchProduct();
        setProducts(data)
    }, []);

    const [openLoginModal, setOpenLoginModal] = useState(false)
    const { isSignedIn, isLoaded, user } = useUser();
    const { signOut } = useClerk();




    const openModal = () => {
        setOpenLoginModal(true)
    }


    const { addUser } = useDataBase()

    console.log(user);
    // const findUser = users.find(user => user.id === user.id)
    // console.log("find-user", findUser);

    useEffect(() => {

        if (user && !isUserSaved) {


            addUser({
                id: user.id,
                username: user.username as string,
                email: user.primaryEmailAddress?.emailAddress as string,
                profilePicture: user.imageUrl,
                wishlist: []
            });
            localStorage.setItem("isUserSaved", JSON.stringify(true))
            toast.success("User saved")

        } else if (!user && isLoaded) {
            localStorage.removeItem("isUserSaved")

        }
    }, [isSignedIn, user, signOut])







    return (
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-3 w-full '>

            {
                products?.map((product: Product) => {
                    return <div className="mx-auto relative mt-3 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-zinc-900/70 shadow-md duration-300 hover:scale-105 hover:shadow-lg select-none" key={product._id}>
                        <div className="h-48 w-full">
                            <img
                                className="h-48 w-full object-cover object-center"

                                src={product.thumbnail}
                                alt="productuct Image"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                                {product.title}
                            </h2>
                            <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                                These essential summer Slide Sandals by Power has a fashion-athletic s
                                {/* */}...
                            </p>
                            <div className="flex items-center">
                                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                                    Tk {/* */}1,799{/* */}.00
                                </p>
                                <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                                    Tk {/* */}1,999{/* */}.00
                                </p>
                                <p className="ml-auto text-base font-medium text-green-500">
                                    10{/* */}% off
                                </p>
                            </div>
                        </div>
                        <AddToWishListBtn openModal={openModal} productId={product._id} />
                    </div>

                })
            }
            {openLoginModal && <div className='flex items-center justify-center w-full h-screen fixed top-0 left-0 bg-black bg-opacity-70'
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setOpenLoginModal(false)
                    }
                }}
            >
                <SignIn afterSignOutUrl={"/"} />
            </div>}
        </div>
    )
}

export default Home