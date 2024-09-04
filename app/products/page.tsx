"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [nameSearchTerm, setNameSearchTerm] = useState<string>("");
  const [categorySearchTerm, setCategorySearchTerm] = useState<string>("");

  const handleClick = () => {
    const query = `name=${nameSearchTerm}&category=${categorySearchTerm}`;
    router.push(`/posts?${query}`);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategorySearchTerm(e.target.value);
  };

  return (
    <div>
      tìm kiếm theo tên: {nameSearchTerm}
      <br />
      tìm kiếm theo danh mục: {categorySearchTerm}
      <br />
      <br />
      <input
        type="text"
        className="border border-black"
        value={nameSearchTerm}
        onChange={handleNameChange}
        placeholder="Tìm kiếm theo tên"
      />
      <br />
      <br />
      <input
        type="text"
        className="border border-black"
        value={categorySearchTerm}
        onChange={handleCategoryChange}
        placeholder="Tìm kiếm theo danh mục"
      />
      <br />
      <br />
      <button onClick={handleClick}>Tìm kiếm</button>
    </div>
  );
}
