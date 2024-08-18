import React from 'react'
import "./AdminAbout.css"

const AdminAbout = () => {
    return <section id='about' className='flex p-4 mx-auto text-white  bg-primary'>

        <div id='admin-about-container' className='container flex flex-col w-full mx-auto  gap-3'>

            <header id='admin-about-header' className='w-full text-center  text-secondary'>
                <h1 id='admin-about-page-title'>Admin About</h1>
            </header>

            <main id="main-wrapper" className="flex justify-between">

                <div id="dp-container" className="flex flex-col w-1/2 p-4  gap-3">
                    <h2>About Pic</h2>
                    <img src="" alt="About Pic" />
                    <div>
                        <label for="aboutPicURL">About Pic URL: </label>
                        <input type="url" name="aboutPicURL" id="aboutPicURL" />
                    </div>
                    <button type="submit">Submit</button>
                </div>

                <div id="content-container" className="w-1/2 p-4 ">

                    <form id="text-wrapper" className="flex flex-col form-example gap-6">
                        <h2>About Descriptions</h2>

                        <div>
                            <label for="description">description: </label>
                            <textarea name="description" id="description" cols="20" rows="1"></textarea>
                        </div>

                        <div>
                            <label for="resume">Resume: </label>
                            <input type="url" name="resume" id="resume" />
                        </div>
                        <button type="submit">Submit</button>
                    </form>

                </div>

            </main>
        </div>

    </section>
}

export default AdminAbout