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
import toast from 'react-hot-toast';

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
            const url = `${import.meta.env.VITE_SERVER_HOST_URL}/api/payment/order`;
            // console.log("Creating payment order with URL:", url);

            const res = await axios.post(url, {
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
                    const url = `${import.meta.env.VITE_SERVER_HOST_URL}/api/payment/verify`;
                    // console.log("Verifying payment with URL:", url);

                    const res = await axios.post(url, {
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
                    <button
                        id="rzp-button1"
                        disabled={isLoading}
                        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white transition-colors duration-300 
        ${isLoading ? "bg-gray-500 opacity-50 cursor-not-allowed" : "hover:bg-primary-dark"}`
                        }
                        aria-busy={isLoading}
                        aria-label={isLoading ? "Processing payment" : "Pay with Razorpay"}
                    >
                        <svg className={`text-lg ${isLoading ? "animate-spin" : ""}`} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z" /></svg>
                        {isLoading ? "Processing..." : "Pay with Razorpay"}
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
        </div>
    );
}

export default Razorpay;