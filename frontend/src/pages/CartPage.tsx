import { Box, Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constants/baseUrl";
import { useAuth } from "../context/Auth/AuthContext";


const CartPage = () => {
    const {token} = useAuth();
    const [cart, setCart] = useState();
    const [error, setError] = useState('');


    useEffect(() => {

        if(!token) {
            return;
        }

        const fetchCart = async () => {
            const response = await fetch(`${BASE_URL}/cart`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if(!response.ok) {
                setError("Failed to fetch user cart. Please try again");
            }

            const data = await response.json();
            setCart(data)
        }

        fetchCart();
    }, [token])

    if(error) {
        return <Box>Something went wrong, please try again!</Box>
    }
    console.log(cart)
  return (
    <Container sx={{mt: 2}}>
        <Typography variant="h4">CartPage</Typography>
    </Container>
  )
}

export default CartPage