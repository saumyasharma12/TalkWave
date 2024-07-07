import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import toast from "react-hot-toast";
import useGetConversations from '../../hooks/useGetConversation';

const Searchinput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
	const { conversations }  = useGetConversations();



  const handleSubmit = (e) => {
    e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
  }

  return (
    <form onSubmit={handleSubmit} className='flex item=center gap-2'>
      <input type='text' placeholder='Search...' className='input input-bordered rounded-full'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
      <FaSearch />
      </button>
    </form>
  )
}

export default Searchinput