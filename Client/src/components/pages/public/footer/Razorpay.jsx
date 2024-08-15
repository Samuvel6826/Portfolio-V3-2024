import React, { useState } from 'react';
import axios from 'axios';
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Input,
    Typography,
} from '@material-tailwind/react';
import toast, { Toaster } from 'react-hot-toast';
import { LuIndianRupee } from "react-icons/lu";

const Razorpay = () => {
    const [amount, setAmount] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // handlePayment Function
    const handlePayment = async () => {
        if (!amount || parseInt(amount) <= 0) {
            toast.error("Please enter a valid amount");
            return;
        }

        setIsLoading(true);

        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_HOST_URL}/api/payment/order`, {
                amount: parseInt(amount)
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = res.data;
            handlePaymentVerify(data.data);
        } catch (error) {
            console.error("Error creating payment order:", error);
            toast.error("Failed to create payment order. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    // handlePaymentVerify Function
    const handlePaymentVerify = async (data) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: data.amount,
            currency: data.currency,
            name: "Samuvel",
            description: "Test Mode",
            // image: "https://example.com/your_logo",
            order_id: data.id,
            handler: async (response) => {
                try {
                    const res = await axios.post(`${import.meta.env.VITE_BACKEND_HOST_URL}/api/payment/verify`, {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    const verifyData = res.data;

                    if (verifyData.message) {
                        toast.success(verifyData.message);
                    }
                } catch (error) {
                    console.error("Error during payment verification:", error);
                    toast.error("Payment verification failed. Please try again.");
                }
            },
            notes: {
                address: "Sam's Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    return (
        <div>
            <Popover placement="bottom">
                <PopoverHandler>
                    <button id="rzp-button1" disabled={isLoading} className={isLoading ? "opacity-50 cursor-not-allowed" : ""}>
                        <LuIndianRupee /> {isLoading ? "Processing..." : "Pay with Razorpay"}
                    </button>
                </PopoverHandler>
                <PopoverContent className="w-96">
                    <Typography variant="h6" color="blue-gray" className="mb-6">
                        samtocode24
                    </Typography>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-1 font-bold"
                    >
                        Samuvel Antony
                    </Typography>
                    <div className="flex gap-2">
                        <Input
                            size="lg"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter amount"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            disabled={isLoading}
                        />
                        <Button variant="gradient" className="flex-shrink-0" onClick={handlePayment} disabled={isLoading}>
                            {isLoading ? "Processing..." : "Pay"}
                        </Button>
                    </div>
                </PopoverContent>
            </Popover>
            <Toaster />
        </div>
    );
}

export default Razorpay;