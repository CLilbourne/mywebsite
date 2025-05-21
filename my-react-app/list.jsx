

function List(){
    const fruits = [{name:"apple", calories: 99}
                    ,{name:"orange", calories: 20}
                    ,{name:"banana", calories: 12}];
                    fruits.sort((a,b) => a.calories - b.calories);
                    const listitems = fruits.map(fruit => 
                    <li key = {fruit.name}>{fruit.name}</li>);
    return(<ol>{listitems}</ol>);
    }
export default List