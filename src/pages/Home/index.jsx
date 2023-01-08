import React from 'react'
import heroImageHome from '../../img/home/hero-img.png'
import ongoingIcon from '../../img/icons/ongoing-icon.png'
import doneIcon from '../../img/icons/done-icon.png'
import totalTimeIcon from '../../img/icons/total-time-icon.png'
import remainingTimeIcon from '../../img/icons/remaining-icon.png'

const Home = () => {
    return (
        <main className='min-h-[100vh]'>
            <section className='flex flex-col-reverse justify-around pt-6 larger:flex-row text-darkGray'>
                <div className='flex flex-col tracking-wider font-roboto space-y-6 larger:w-4/12 my-auto p-5'>
                    <h1 className="font-courier font-bold text-4xl text-center pt-3 larger:text-5xl larger:text-left">DevNote</h1>
                    <p className="text-xl text-center pt-6 larger:text-left">The ultimate <span className="font-courier uppercase font-bold text-orange">free</span> <span className="font-courier font-bold text-orange">developer</span> tool to keep track of your projects</p>
                    <input type="email" placeholder="email"></input>
                    <button type="button">Register</button>
                </div>

                <div className="larger:w-5/12 ">
                    <img src={heroImageHome} alt="decorative Devnote features"/>
                </div>
            </section>

            <section>
                <div>
                    <h2>Track your <span>projects</span>. Manage your <span>time</span>. Get things <span>done!</span></h2>
                    <p>DevNote helps you keep things simple, efficient and organized.</p>
                </div>

                <div>
                    <div>
                        <img src={ongoingIcon} alt="ongoing projects"/>
                        <h3>Track ongoing projects</h3>
                        <p>Help you keep your focus on the current project.</p>
                    </div>

                    <div>
                        <img src={doneIcon} alt="done projects"/>
                        <h3>Organize your projects</h3>
                        <p>Easily access and visualize your done projects.</p>
                    </div>

                    <div>
                        <img src={totalTimeIcon} alt="total time invested"/>
                        <h3>Optmize the time invested</h3>
                        <p>Keep track of invested time and use it smarter.</p>
                    </div>

                    <div>
                        <img src={remainingTimeIcon} alt="remaining time"/>
                        <h3>Deliver within the deadline</h3>
                        <p>Check the remaining time and work on getting things done.</p>
                    </div>
                </div>
            </section>

            <section>
                <h2>Try it out! It's <span>free!</span></h2>
                <input type="email" placeholder="email"></input>
                <button type="button">Register</button>
            </section>
        </main>
    )
}

export default Home