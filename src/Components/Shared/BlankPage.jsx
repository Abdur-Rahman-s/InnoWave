import React from 'react'

function BlankPage() {
    return (
        <section className='flex items-center justify-center' style={{ minHeight: 'calc(100vh - 220px)' }}>
            <p className='text-2xl md:text-4xl text-dark font-bold text-center px-4'>
                This content isn't available😔!
            </p>
        </section>


    )
}

export default BlankPage