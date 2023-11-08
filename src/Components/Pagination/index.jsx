import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'

export function Pagination() {
    return (
        <div className="mt-4 mb-[20px] text-[#333333] flex gap-[15px] justify-center">
            <button
                className="px-4 py-2 shadow bg-white rounded hover:bg-blue-500 hover:text-white"
            >
                <FaAngleDoubleLeft />
            </button>

            <button className="px-4 shadow py-2 bg-white rounded hover:bg-blue-500 hover:text-white bolder ">1</button>
            <button className="px-4 shadow py-2 bg-white  rounded hover:bg-blue-500 hover:text-white bolder">2</button>
            <button className="px-4 shadow py-2 bg-white rounded hover:bg-blue-500 hover:text-white bolder">3</button>

            

            <button
                className=" px-4 py-2 shadow rounded hover:bg-blue-500 hover:text-white"
            >
                <FaAngleDoubleRight />
            </button>
        </div>
    )
}