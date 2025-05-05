import './LeetCode.css';
import logo from './assets/LeetCodeLogo.png';
import rank from './assets/LeetCode.png';

function LeetCode() {
    return (
        <div className='Leet'>
            <img src={logo} className='leet_logo'></img>
            <p>Additionally i have Solved 40 problems in LeetCode using Java and JavaScript  to enhance my knowledge in DSA and Core Concepts.</p>
            <img src={rank} className='leet_rank'></img>
            <button className='CheckRank'>Check Profile</button>
        </div>
    );
}

export default LeetCode;