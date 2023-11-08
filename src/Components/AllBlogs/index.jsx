import { Pagination } from "../Pagination";

export function AllBlogs(){
    const blogData = [
        {
            id: '1',
            category: 'Technology',
            title: 'User Experience (UX) Best Practices for Web Design',
            date: '10th Oct. 2023',
        },
        {
            id: '2',
            category: 'Technology',
            title: 'User Experience (UX) Best Practices for Web Design',
            date: '10th Oct. 2023',
        },
        {
            id: '3',
            category: 'Technology',
            title: 'User Experience (UX) Best Practices for Web Design',
            date: '10th Oct. 2023',
        },
        {
            id: '4',
            category: 'Technology',
            title: 'User Experience (UX) Best Practices for Web Design',
            date: '10th Oct. 2023',
        },
        {
            id: '5',
            category: 'Technology',
            title: 'User Experience (UX) Best Practices for Web Design',
            date: '10th Oct. 2023',
        },
        {
            id: '6',
            category: 'Technology',
            title: 'User Experience (UX) Best Practices for Web Design',
            date: '10th Oct. 2023',
        },
    ]
    return (
        <main className="bg-[#F0F0F1] py-[20px] px-[25px] md:py-[61px] md:px-[63px]">
            <header className="w-full flex items-center justify-center h-[100px] md:h-[200px] bg-[#fff] mb-[30px] md:mb-[50px] ">
                <h1 className="text-[#000] text-[18px] md:text-[24px] font-[700]">Admin Section</h1>
            </header>

            <div className="border-b-[#DCDCDC] border-b-[1px] py-[20px] flex justify-between items-center mb-[30px] md:mb-[50px]  ">
                <h2 className="text-[18px] text-[#0A0A0A] md:text-[27px] font-[700] ">All Blogs</h2>

                <button className="bg-[#007CEF] rounded-[10px] py-[12px] px-[14px] md:py-[14px] md:px-[18px] text-[#fff]  ">Write Blog</button>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mb-[50px] ">
                {blogData.map(blog=> {
                    return (
                        <div key={blog.id} className="w-[100%] md:w-[306px] shadow rounded-[10px] cursor-pointer ">
                            <img 
                                src="/images/blog-picture.png" 
                                alt="Blog Photo" 
                                className="w-full rounded-t-[10px] mb-[10px] "
                            />
                            <div className="flex flex-col gap-[10px] px-[10px] pb-[15px] ">
                                <p className="text-[#007CEF] font-[700] text-[14px] ">{blog.category}</p>

                                <h3 className="text-[#0A0A0A] text-[18px] md:text-[20px] font-[700] ">{blog.title}</h3>

                                <p className="text-[11px] text-[#8B8B8B] font-[500] ">{blog.date}</p>
                            </div>
                        </div>
                    )
                })}
            </section>

            <Pagination />
        </main>
    )
}