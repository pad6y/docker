import { add, subtract, multiply, divide } from '../js_modules/calc';

function Calculate() {
  return (
    <div>
      <ul>
        <li>Add {add(1, 2)}</li>
        <li>Subtract {multiply(2, 3)}</li>
        <li>Multiply {subtract(7, 2)}</li>
        <li>Divide {divide(5, 2)}</li>
      </ul>
    </div>
  );
}

export default Calculate;
