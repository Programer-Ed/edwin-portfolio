import React from 'react'

const Contact = () => {
  return (
    <div>
        <section className='text-center px-4 sm:px-6 py-12'> 
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-500 dark:text-cyan-400 mb-3">
                Let's Connect
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Have a project or just want to say hi? Drop me a message!
            </p>
        </section>
        <section className=''>
            <form className="max-w-md mx-auto space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                    type="text"
                    required
                    placeholder="Name"
                    className="flex-1 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <input
                    type="email"
                    required
                    placeholder="Email"
                    className="flex-1 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                <textarea
                    placeholder="Your message"
                    required
                    className="w-full h-32 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <div className='flex justify-center'>
                    <a
                        href="mailto:edwin.nganga.tech@gmail.com?subject=Hello%20Edwin&body=I%20wanted%20to%20reach%20out%20about..."
                        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-md transition inline-block"
                        >
                        Send Message
                    </a>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Contact
