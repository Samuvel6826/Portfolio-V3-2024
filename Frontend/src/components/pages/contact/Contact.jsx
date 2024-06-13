import { useRef, useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Spinner from '../../common/Spinner'

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const formRef = useRef();

    const formikQuery = useFormik({
        initialValues: {
            your_name: '',
            your_mobile: '',
            your_email: '',
            message: ''
        },
        validationSchema: Yup.object({
            your_name: Yup.string().required('Required').min(2, 'Minimum 2 Characters Required'),
            your_email: Yup.string().required('Required').email('Enter a valid email'),
            message: Yup.string().required('Required')
        }),
        onSubmit: async (values) => {
            setLoading(true)
            sendEmail(values);
            formikQuery.resetForm({
                values: {
                    your_name: '',
                    your_mobile: '',
                    your_email: '',
                    message: ''
                }
            });
        }
    });

    const sendEmail = () => {
        emailjs
            .sendForm('service_a6vosqm', 'template_y8grdsb', formRef.current, 'dsQNk0H0okAie8xT2')
            .then((result) => {
                console.log(result);
                setLoading(false)
                alert('Email Sent Successfully!');
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
                alert('Failed to send email. Please try again later.');
            });
    };

    return <section id='contact' className=' h-[calc(100vh-4rem)] bg-primary mx-auto'>
        <div id="container" className="container h-full mx-auto flex flex-col justify-evenly items-center">
            <header id='contactHeader' className='text-center text-secondary'>
                <h1 className="contactPageTitle">Contact Me</h1>
                <h5 className="contactPageDesc">Please fill out the form below to discuss any work opportunities.</h5>
            </header>

            <div className='h-[80%] w-full'>
                <main id='contactMain' className='flex h-full w-full justify-between'>
                    <form id="contactForm" ref={formRef} onSubmit={formikQuery.handleSubmit}>
                        <div id='nameContainer'>
                            <input
                                type="text"
                                className="name"
                                placeholder='Name'
                                id='your_name'
                                name='your_name'
                                onChange={formikQuery.handleChange}
                                onBlur={formikQuery.handleBlur}
                                value={formikQuery.values.your_name}
                            />
                            {formikQuery.touched.your_name && formikQuery.errors.your_name ? <div id='require' style={{ color: "red" }}>*{formikQuery.errors.your_name}</div> : <></>}
                        </div>

                        <div id='mobileContainer'>
                            <input
                                type="text"
                                className="mobile"
                                placeholder='Phone'
                                id='your_mobile'
                                name='your_mobile'
                                onChange={formikQuery.handleChange}
                                onBlur={formikQuery.handleBlur}
                                value={formikQuery.values.your_mobile}
                            />
                        </div>

                        <div id='emailContainer'>
                            <input
                                type="email"
                                className="email"
                                placeholder='Email'
                                id='your_email'
                                name='your_email'
                                onChange={formikQuery.handleChange}
                                onBlur={formikQuery.handleBlur}
                                value={formikQuery.values.your_email}
                            />
                            {formikQuery.touched.your_email && formikQuery.errors.your_email ? <div id='require' style={{ color: "red" }}>*{formikQuery.errors.your_email}</div> : <></>}
                        </div>

                        <div id='msgContainer'>
                            <textarea
                                rows="5"
                                className="msg"
                                placeholder='Let me know how I can assist you'
                                id='message'
                                name='message'
                                onChange={formikQuery.handleChange}
                                onBlur={formikQuery.handleBlur}
                                value={formikQuery.values.message}>
                            </textarea>
                            {formikQuery.touched.message && formikQuery.errors.message ? <div id='require' style={{ color: "red" }}>*{formikQuery.errors.message}</div> : <></>}
                        </div>
                        <button className='bg-tertiary text-secondary' type='submit' value='Send' id="submitBtn" disabled={loading}>{loading ? <Spinner /> : "Submit"}</button>
                    </form>

                    <div className="vl"></div>

                    <div id='mapContainer' className='w-[48%]'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7898.414636338594!2d77.246475!3d8.181859!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTAnNTQuNyJOIDc3wrAxNCc0Ny4zIkU!5e0!3m2!1sen!2sin!4v1715710048191!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </main>
            </div>
        </div>
    </section>
}

export default Contact