import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque fugit odit voluptatem explicabo."
            },
            {
                icon: <FaHiking />,
                title: "free hiking",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque fugit odit voluptatem explicabo."
            },
            {
                icon: <FaShuttleVan />,
                title: "free van",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque fugit odit voluptatem explicabo."
            },
            {
                icon: <FaBeer />,
                title: "free beer",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque fugit odit voluptatem explicabo."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
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

export default Services