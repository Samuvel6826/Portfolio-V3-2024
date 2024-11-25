import { useRef, useState } from 'react';
import axios from 'axios';
import './Contact.css';
import Loader from '../../../common/Loader';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState([]); // State to store selected files
    const formRef = useRef();

    // Constants for validation
    const MAX_ATTACHMENT_SIZE_MB = 10; // Maximum size of each attachment in MB
    const MAX_ATTACHMENTS = 10; // Maximum number of attachments

    // Formik setup
    const formikQuery = useFormik({
        initialValues: {
            your_name: '',
            your_mobile: '',
            your_email: '',
            your_subject: '',
            message: ''
        },
        validationSchema: Yup.object({
            your_name: Yup.string().required('Required').min(2, 'Minimum 2 Characters Required'),
            your_email: Yup.string().required('Required').email('Enter a valid email'),
            message: Yup.string().required('Required')
        }),
        onSubmit: async (values) => {
            setLoading(true);
            await sendEmail(values);
            formikQuery.resetForm();
            setFiles([]); // Clear files after submission
        }
    });

    // Validate files
    const validateFiles = (selectedFiles) => {
        if (selectedFiles.length > MAX_ATTACHMENTS) {
            return `You can only upload up to ${MAX_ATTACHMENTS} attachments.`;
        }

        for (const file of selectedFiles) {
            if (file.size > MAX_ATTACHMENT_SIZE_MB * 1024 * 1024) { // Convert MB to bytes
                return `Attachment ${file.name} exceeds the maximum size of ${MAX_ATTACHMENT_SIZE_MB}MB.`;
            }
        }
        return null;
    };

    // Handle file changes
    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const validationError = validateFiles(selectedFiles);

        if (validationError) {
            toast.error(validationError);
            return;
        }

        setFiles(selectedFiles);
    };

    // Send email function
    const sendEmail = async (values) => {
        const formData = new FormData();
        formData.append('name', values.your_name);
        formData.append('email', values.your_email);
        formData.append('mobile', values.your_mobile);
        formData.append('subject', values.your_subject);
        formData.append('message', values.message);

        files.forEach(file => {
            formData.append('attachments', file);
        });

        try {
            const response = await axios.post('https://nodemailer-email-server.onrender.com/email/send-email', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Required for file uploads
                },
            });
            toast.success(response.data);
        } catch (error) {
            toast.error(`Failed to send email: ${error.response ? error.response.data : error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id='contact' className='h-full w-full overflow-hidden bg-primary p-4 lg:p-10'>
            <Toaster /> {/* Add Toaster component to handle notifications */}
            <div id="contact-container" className="flex h-full flex-col justify-between gap-4">
                <header id='contact-header' className='text-center text-secondary'>
                    <h1 id="contact-page-title" className='text-3xl font-bold'>Contact Me</h1>
                    <p id="contact-page-desc" className='text-xl'>Please fill out the form below to discuss any work opportunities.</p>
                </header>

                <main id='contact-wrapper' className='flex w-full flex-col gap-3' >
                    <form id="contact-form" ref={formRef} onSubmit={formikQuery.handleSubmit} data-aos="fade-right">
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


                        <div id='subjectContainer'>
                            <input
                                type="text"
                                className="subject"
                                placeholder='Subject'
                                id='your_subject'
                                name='your_subject'
                                onChange={formikQuery.handleChange}
                                onBlur={formikQuery.handleBlur}
                                value={formikQuery.values.your_subject}
                            />
                            {formikQuery.touched.your_subject && formikQuery.errors.your_subject ? <div id='require' style={{ color: "red" }}>*{formikQuery.errors.your_subject}</div> : <></>}
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

                        <div id='fileContainer'>
                            <input
                                id='fileUpload'
                                name="fileUpload"
                                type="file"
                                multiple // Allow multiple files
                                onChange={handleFileChange}
                            />
                        </div>

                        <button className='flex items-center justify-center bg-secondary p-2 text-center text-lg text-letter' type='submit' value='Send' id="submitBtn" disabled={loading}>
                            {loading ? <Loader /> : "Submit"}
                        </button>
                    </form>

                    <div id='map-container' data-aos="fade-left">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2412.036606469489!2d77.24719524529459!3d8.182719891557351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTAnNTQuNyJOIDc3wrAxNCc0Ny4zIkU!5e1!3m2!1sen!2sin!4v1732508303043!5m2!1sen!2sin"
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
    );
};

export default Contact;