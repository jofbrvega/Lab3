"use client";

import { useState } from "react";

import { Item } from "@/types/Item";

import ShoppingCart from "@/components/Cart";
import UserForm from "@/components/UserForm";
import UserList from "@/components/UserList";
import Header from "@/components/Header";
import Paragraph from "@/components/Paragraph";
import LoadingSpinner from "@/components/LoadingSpinner"; // Import the LoadingSpinner component
import CatApiExample from "@/components/Cats";

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false); // State to track loading state

  const onUserAdd = (user: any) => {
    setIsLoading(true); // Set loading state to true when adding user
    // Simulate async operation (replace with actual async operation)
    setTimeout(() => {
      setUsers([...users, user]);
      setIsLoading(false); // Set loading state back to false after user is added
    }, 1000);
  };

  return (
    <div className="home">
      <Header title="Lab 3" />
      <Paragraph text="This is a page were you add your name and email, when doing so you will get a random Cat Breed assigned to you. The cat breed is connected via an external API." />
      <UserForm onUserAdd={onUserAdd} />
      <UserList users={users} />
      {isLoading && <LoadingSpinner />} {/* Render the spinner if loading */}
    </div>
  );
}
