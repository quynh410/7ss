"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function Page() {
  // lấy query bên cạnh dấu ?
  // Dùng useSearchParams đây là hook được cung cấp bởi next js
  const searchParams = useSearchParams();
  const idProduct = searchParams.get("idProducts");
  console.log(idProduct);

  return <div>Chi tiết sản phẩm</div>;
}
