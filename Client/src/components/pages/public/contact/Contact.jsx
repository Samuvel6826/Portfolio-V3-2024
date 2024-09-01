import { useRef, useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Loader from '../../../common/Loader'

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

    return <section id='contact' className='h-full w-full bg-primary p-4 lg:p-10'>
        <div id="contact-container" className="flex h-full flex-col justify-between gap-4">
            <header id='contact-header' className='text-center text-secondary'>
                <h1 id="contact-page-title" className='text-3xl font-bold'>Contact Me</h1>
                <p id="contact-page-desc" className='text-xl'>Please fill out the form below to discuss any work opportunities.</p>
            </header>

            <main id='contact-wrapper' className='flex w-full flex-col gap-3'>
                <form id="contact-form" ref={formRef} onSubmit={formikQuery.handleSubmit}>
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
                    <button className='flex items-center justify-center bg-secondary p-2 text-center text-lg text-letter' type='submit' value='Send' id="submitBtn" disabled={loading}>{loading ? <Loader /> : "Submit"}</button>
                </form>

                <div id='map-container'>
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
    </section>
}

export default Contact