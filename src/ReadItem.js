import './App.css';
import data from './jsonPart/Items.json'

export function ReadItem() {
    let index = 0;
    console.log(data.Items[index].image);

    return (
        <div id="Main" className="App">
           <img src={data.Items[index].image}></img>
           <h1>{data.Items[index].productName}</h1>
        </div>
      );
}