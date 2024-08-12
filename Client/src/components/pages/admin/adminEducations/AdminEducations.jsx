import React from 'react'
import './AdminEducations.css'

const AdminEducations = () => {
    return <section id='educations' className=' bg-primary text-white mx-auto flex p-4'>

        <div id='admin-educations-container' className=' container w-full mx-auto flex flex-col gap-3'>

            <header id='admin-educations-header' className=' w-full text-secondary text-center'>
                <h1 id='admin-educations-page-title'>Admin Educations</h1>
            </header>

            <main id="main-wrapper" className="flex justify-between">

                <form id="text-wrapper" className=" flex flex-col gap-6">
                    <h2>Educations Descriptions</h2>

                    <div>
                        <label for="step-title">Title: </label>
                        <input type="text" name="step-title" id="step-title" />
                    </div>

                    <div>
                        <label for="step-description">Description: </label>
                        <input type="text" name="step-description" id="step-description" />
                    </div>
                    <button type="submit">Submit</button>
                </form>

            </main>
        </div>

    </section>
}

export default AdminEducations