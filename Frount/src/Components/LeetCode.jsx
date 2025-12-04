import './LeetCode.css';
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import logo from '../assets/LeetCodeLogo.png';

function LeetCode() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("https://muthu-portfolio-gfq8.onrender.com/leetcode")
    // fetch("http://localhost:8080/leetcode")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  return (
    <div className='Leet'>
      {
        (window.innerWidth <= 768) ? <img src={logo} alt="leet_logo" className='leet_logo' /> : <></>
      }
      <div className="leet_left">
        <div className="leet_progress">
          <div className='leet_progress_inner' />
          <CircularProgressbar
            value={stats?.totalSolved}
            maxValue={stats?.totalQuestions}
            text={`${stats ? stats.totalSolved : 0}`}
            styles={buildStyles({
              textColor: "white",
              pathColor: "#ffffffff",
              trailColor: "rgb(65, 65, 65)"
            })}
          />
        </div>
        <div className="leet_stats">
          <div className="leet_card easy">
            <p className='head'>Easy</p>
            <p className='rankc'>{stats?.easySolved}</p>
            <p className='totalc'>/{stats?.totalEasy}</p>
          </div>
          <div className="leet_card medium">
            <p className='head'>Medium</p>
            <p className='rankc'>{stats?.mediumSolved}</p>
            <p className='totalc'>/{stats?.totalMedium}</p>
          </div>
          <div className="leet_card hard">
            <p className='head'>Hard</p>
            <p className='rankc'>{stats?.hardSolved}</p>
            <p className='totalc'>/{stats?.totalHard}</p>
          </div>
        {/* <div className="leet_stats">
          <div className="leet_card easy">
            <p className='head'>Easy</p>
            <p className='rankc'>13</p>
            <p className='totalc'>/915</p>
          </div>
          <div className="leet_card medium">
            <p className='head'>Medium</p>
            <p className='rankc'>26</p>
            <p className='totalc'>/1960</p>
          </div>
          <div className="leet_card hard">
            <p className='head'>Hard</p>
            <p className='rankc'>10</p>
            <p className='totalc'>/889</p>
          </div> */}
        </div>
      </div>
      <div className='leetCont'>

        {
          (window.innerWidth > 768) ? <img src={logo} alt="leet_logo" className='leet_logo' /> : <></>
        }

        <p>
          Additionally, I have solved {stats?.totalSolved} problems in LeetCode using
          Java and JavaScript to enhance my knowledge in DSA and Core Concepts.
        </p>

        <a
          href='https://leetcode.com/u/Jq4H1BglTL/'
          target='_blank'
          rel="noreferrer"
          className='CheckRank'>
          Check Profile
        </a>
      </div>
    </div>
  );
}

export default LeetCode;
