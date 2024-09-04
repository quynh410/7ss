"use client";
import { useRouter } from "next/navigation"; 
import React, { useState } from "react";

export default function Page() { 
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState<any>();

    const handleClick = () => {
        router.push(`/posts?search=${searchTerm}`);  
    };
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchTerm(e.target.value);
        
    }
    return (
        <div>
            Search Value : {searchTerm} <br />
            <input 
                type="text" 
                className="border border-black" 
                value={searchTerm} 
                onChange={handleChange} 
            />
            <button onClick={handleClick}>Tìm kiếm</button>
            {/* 
                1. lấy giá trị người dùng nhập
                2. tạo sự kiện khi nhấn vào button tìm kiếm
                3. bắn giá trị người dùng nhập lên url
                3.1 sử dụng router.push().
            */}
        </div>
    );
}
