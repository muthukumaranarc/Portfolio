import './LeetCode.css';
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import logo from '../assets/LeetCodeLogo.png';

function LeetCode() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/Jq4H1BglTL")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

//   if (!stats) {
//     return <p>Loading LeetCode stats...</p>;
//   }

  return (
    <div className='Leet'>
      {/* Left side: Progress Circle */}
      <div className="leet_left">
        <div className="leet_progress">
            <div className='leet_progress_inner'/>
          <CircularProgressbar
            value={stats?.totalSolved}
            maxValue={stats?.totalQuestions}
            text={`${stats? stats.totalSolved : 0}`}
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
        </div>
      </div>
      <div className='leetCont'>
        <img src={logo} alt="leet_logo" className='leet_logo' />

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
