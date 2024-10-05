import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

export const useGetUserEmail = () => {
    const [selectedContact, setSelectedContact] = useState(null);  // null initially
    const [loading, setLoading] = useState(true);  // Added loading state
    const [error, setError] = useState(null);  // Added error state
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;

    useEffect(() => {
        if (userEmail) {
            setLoading(true);  // Set loading state when request starts
            axios.get(`http://localhost:5000/single-user?email=${userEmail}`)
                .then(response => {
                    setSelectedContact(response?.data);
                })
                .catch(err => {
                    setError(err.message);  // Capture error
                    console.error("Error fetching user data:", err);
                })
                .finally(() => {
                    setLoading(false);  // Ensure loading is turned off
                });
        }
    }, [userEmail]);

    return { selectedContact, loading, error };
};
