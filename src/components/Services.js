import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Free Cocktails',
                info: 'Magna. Voluptate reprehenderit ea non sunt eiusmod nulla laboris excepteur consectetur do laborum sit.'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: 'Magna exercitation cillum. Voluptate reprehenderit ea non sunt eiusmod nulla laboris excepteur consectetur do laborum sit.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: 'Magna dolor labore exercitation cillum. Voluptate reprehenderit ea non sunt eiusmod nulla laboris excepteur consectetur do laborum sit.'
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Beer',
                info: 'Magna voluptate reprehenderit ea non sunt eiusmod nulla laboris excepteur consectetur do laborum sit.'
            },
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='Services' />

                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
