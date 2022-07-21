import { useState, useEffect } from "react";
import AuthForm from "./AuthForm";

export default function LoinForm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/users");
      const { users } = await res.json();
      setUsers(users);
    };
    fetchUsers();
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    const newUser = fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: "",
      }),
    }).then((res) => {
      if (res.ok) {
        console.log("added!");
      }
    });
  }

  return (
    <AuthForm 
    
    />
  )
}
