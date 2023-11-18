import { data } from '../data.jsx'
import '../Card.css'

const Main = () => {
    console.log(data.profileImage)
  return (
    <section className="main-section">
    <main className="main">
    <div className="card-section">
    <div className="text-container"><p>I worked on several projects with the worker. I was immediately impressed with his approach.</p></div>
    <div className="card-container">
    <img className="image" src={data.profileImage} />
    <div id="info">
    <p>Name: Shigeko</p>
    <p>Email: shigeko@example.com</p>
    </div>
    </div>
    </div>
    <div className="card-section">
    <div className="text-container"><p>I wanted a website for my hair salon. He listened to my needs and designed a website I take pride in.</p></div>
    <div className="card-container">
    <img className="image" src={'../../public/assets/images/asian_female_office_12.png'} />
    <div id="info">
    <p>Name: Shigeko</p>
    <p>Email: shigeko@example.com</p>
    </div>
    </div>
              </div>
              <div className="card-section">
    <div className="text-container"><p>I worked on several projects with the worker. I was immediately impressed with his approach.</p></div>
    <div className="card-container">
    <img className="image" src={'../../public/assets/images/blk_f_prof_office_01.png'} />
    <div id="info">
    <p>Name: Shigeko</p>
    <p>Email: shigeko@example.com</p>
    </div>
    </div>
    </div>
    </main>
    </section>
  )
}

export default Main