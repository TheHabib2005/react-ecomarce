import { useUser } from '@clerk/clerk-react'
import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa6'
import { delay } from "./../../utils/index"
import toast from 'react-hot-toast'
import { ClipLoader } from 'react-spinners'
import { useDataBase } from '../../zustant-store/useDBStore'

const AddToWishListBtn = ({ openModal, productId }: { openModal: () => void, productId: string }) => {
    const { isSignedIn, user } = useUser();
    const [loading, setLoading] = useState(false)
    // const [added, setadded] = useState(false)
    const { addToWishList, users } = useDataBase()
    const checkIsProductExist = (productId: string) => {
        const findUser = users.find(u => u.id === user?.id)?.wishlist.includes(productId)
        return findUser && isSignedIn ? true : false
    }
    const handleAddToWishList = async () => {
        // Add contact to wishlist logic here

        try {
            setLoading(true)
            await delay(500)
            addToWishList(productId, user?.id as string)
            setLoading(false)

            if (checkIsProductExist(productId)) {

                toast.success("product added successfully")


            } else {

                toast.success("product remove successfully")

            }
        } catch (error) {
            console.log(error);
        }
    };




    return (
        <div className='w-10 h-10 rounded-full flex items-center justify-center bg-zinc-900 top-2 cursor-pointer absolute z-50 right-4'
            onClick={() => {
                if (!isSignedIn) {
                    openModal()
                } else {
                    handleAddToWishList()
                }
            }}
        >
            {loading ? <ClipLoader color='#fff' size={25} /> : (checkIsProductExist(productId) ? <FaHeart className='text-red-600 text-xl' /> : <FaHeart className='text-white text-xl' />)}
        </div>
    )
}

export default AddToWishListBtn