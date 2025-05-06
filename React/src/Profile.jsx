import './Profile.css';

function Profile() {
    return(
        <>
        <div className="Name">I'm<br/>Muthukumaran M</div>
        <p className='im'>I'm a </p>
        <div className='glow'>Full Stack Web Developer</div>
        <div className='quickAbout'>I’m a computer science student with 9.9CGPA. I have solid knowledge of DSA. I actively engage in tech competitions and focus on building innovation solutions that solve real-world problems effectively. </div>
        <a 
            href='https://drive.google.com/file/d/1VNBXIq6xn_nQNVrzGxMdemkttKdXZBUb/view?usp=sharing'
            target='_blank'
            className='CheckResume'>Check Resume</a>
        <div className='Prof_img'></div>
        <div className='Prof_bac'>PORTFOLIO</div>
        </>
    )
}

export default Profile;