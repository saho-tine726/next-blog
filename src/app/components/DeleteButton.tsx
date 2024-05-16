"use client";

import React from 'react'
import { useRouter } from 'next/navigation';

type DeleteButtonProps = {
  id: string;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    await fetch(`${API_URL}/api/blog/${id}`, {
      method: "DELETE",
    });

    router.push("/");
    router.refresh();
  }

  return (
    <div className='bg-gray-400 transition duration-500 text-white rounded-md py-2 px-5 inline cursor-pointer hover:bg-gray-600'
      onClick={handleDelete}
    >
      削除
    </div>
  )
}

export default DeleteButton