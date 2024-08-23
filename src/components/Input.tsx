

const Input = () => {

    return (
        <form className='relative' >

            <input type="text"
                className="  placeholder:text-zinc-400 font-semibold placeholder::text-sm focus:border-zinc-800 focus:outline-none w-full py-[10px] px-4 rounded-lg border   bg-zinc-950 dark:border-zinc-950 text-zinc-300"
                placeholder="Search for Products..."

            />

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 absolute right-3 top-[30%]"
                aria-label="Search icon"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
            </svg>

        </form>
    )
}

export default Input