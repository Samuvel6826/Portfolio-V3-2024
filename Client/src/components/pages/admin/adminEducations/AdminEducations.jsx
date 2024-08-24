import './AdminEducations.css'

const AdminEducations = () => {
    return <section id='educations' className='mx-auto flex bg-primary p-4 text-white'>

        <div id='admin-educations-container' className='container mx-auto flex w-full flex-col gap-3'>

            <header id='admin-educations-header' className='w-full text-center text-secondary'>
                <h1 id='admin-educations-page-title'>Admin Educations</h1>
            </header>

            <main id="main-wrapper" className="flex justify-between">

                <form id="text-wrapper" className="flex flex-col gap-6">
                    <h2>Educations Descriptions</h2>

                    <div>
                        <label htmlFor="step-title">Title: </label>
                        <input type="text" name="step-title" id="step-title" />
                    </div>

                    <div>
                        <label htmlFor="step-description">Description: </label>
                        <input type="text" name="step-description" id="step-description" />
                    </div>
                    <button type="submit">Submit</button>
                </form>

            </main>
        </div>

    </section>
}

export default AdminEducations