import React from 'react'

export default () => {

    const team = [
        {
            avatar: "/Doniele Arys Ucgastro.jpg",
            name: "Doniele Arys Antonio",
            title: "Tech Lead, Software Engineer, Project Manager, UI/UX Designer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "/Cedrick ucgastro.jpg",
            name: "Cedrick Bautista",
            title: "Analyst, Logo Designer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "/ian ucgastro.jpg",
            name: "Ian Paloga",
            title: "Analyst, Writer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-3xl font-semibold sm:text-4xl text-primary" style={{ fontFamily: '"Lucida Fax Demi", serif' }}>
                        Meet our team
                    </h3>
                    <p className="text-gray-600 mt-3">
                       A team of innovative & passionate from UC Baguio.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-28 h-28 mx-auto">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full rounded-full"
                                            alt="profile"
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-primary">{item.title}</p>
                                        
                                        <div className="mt-4 flex justify-center gap-4 text-gray-400">
                                            
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}