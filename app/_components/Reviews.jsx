import React from 'react'

export default () => {

    const testimonials = [
        {
            avatar: "/profile.png",
            name: "",
            title: "",
            quote: ""
        },
        {
            avatar: "/profile.png",
            name: "",
            title: "",
            quote: ""
        },
        {
            avatar: "/profile.png",
            name: "",
            title: "",
            quote: ""
        },
    ]

    return (
        <section className="py-14 bg-green-200">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl sm:text-center md:mx-auto">
                    <h3 className="text-black text-3xl font-semibold sm:text-4xl" style={{ fontFamily: '"Lucida Fax Demi", serif' }}>
                        See what our valued users says
                    </h3>
                    <p className="mt-3 text-gray-600">
                       We valued our users' feedback so that we could continuously improve our web applications and provide healthcare solutions more efficiently.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <img src={item.avatar} className="w-16 h-16 rounded-full" />
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-primary text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}