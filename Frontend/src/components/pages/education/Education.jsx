import React, { useState } from 'react';
import './Education.css'
import { Steps } from 'antd';

const Education = () => {
    const [current, setCurrent] = useState(4);
    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };
    return (
        <section id='education' className='h-[calc(100vh-4rem)] bg-secondary mx-auto flex flex-col justify-evenly items-center'>
            <header id='educationHeader' className='text-center'>
                <h1 className="educationPageTitle">Educations & Qualifications</h1>
                <h5 className="educationPageDesc">Listed Here</h5>
            </header>
            <div id="container" className="container h-5/6 mx-auto p-4 flex flex-col justify-center items-center border-2 border-primary rounded-2xl">

                <Steps
                    className='h-full w-full'
                    onChange={onChange}
                    current={current}
                    size="default"
                    direction="vertical"
                    items={[
                        {
                            title: <span id="step-title">HSC: 2019</span>,
                            description: <span id="step-description">Christian Matriculation Higher Secondary School, Kallukkoottam (81/100) – 2019</span>,
                        },
                        {
                            title: <span id="step-title">SSLC: 2021</span>,
                            description: <span id="step-description">Mother Theresa Higher Secondary School, Mayilode (85/100) – 2021</span>,
                        },
                        {
                            title: <span id="step-title">Web Development: 2023</span>,
                            description: <span id="step-description">Full Stack (MERN) Web Development Program in GUVI-Chennai on March 2023 - July 2023</span>,
                        },
                        {
                            title: <span id="step-title">UG: 2023 – 2026</span>,
                            description: <span id="step-description">Pioneer Kumaraswamy College, Vetturnimadam (Currently 2nd Semester !No Arrear Record) 2023 – 2026 Batch</span>,
                        }
                    ]}
                />
            </div>
        </section>
    );
}

export default Education;
