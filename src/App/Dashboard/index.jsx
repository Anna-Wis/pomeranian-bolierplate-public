import { Blocks } from './Blocks/Blocks';
import { MyData } from './MyData/MyData';

import './styles.css';

export function Dashboard() {
  return (
    <div className="dashboard">
      <div>
        <h1>Strona główna</h1>
        <Blocks />
      </div>
      <MyData />
    </div>
  );
}
