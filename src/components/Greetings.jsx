import '../App.css';

const date = new Date();
const year = date.getFullYear();
const time = date.getHours();
let msg;

const customstyle = {
  color: '',
};

if (time >= 0 && time < 12) {
  msg = 'Morning';
  customstyle.color = 'orange';
} else if (time >= 12 && time < 18) {
  msg = 'Afternoon';
  customstyle.color = 'green';
} else {
  msg = 'Evening';
  customstyle.color = 'blue';
}

function Greetings() {
  return <h1 style={customstyle}>Good {msg}</h1>;
}

export default Greetings;
