const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);

const stringToPrint = `world`;

const animals = [`cat`, `dog`, `lion`];

const user = {
  name: `Anna`,
  surname: `Smith`,
  age: 50,
};

const users = [
  {
    id: 1,
    name: `User 1`,
    city: `Kyiv`,
  },
  {
    id: 2,
    name: `User 2`,
    city: `Kharkiv`,
  },
  {
    id: 3,
    name: `User 3`,
    city: `Odesa`,
  },
];

const tableStyle = {
    color: `green`, 
    borderColor: `crimson`
}

const isRender = true;

const App = () => {
    return <React.Fragment>
        <h1>Hello, {stringToPrint}!</h1>
        <h2>Hello, world!</h2>

        <ul>
        {animals.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>

        <ul>
        {Object.keys(user).map((key, index) => (
            <li key={index}>{user[key]}</li>
        ))}
        </ul>

        <table className="table__users" style={tableStyle}>
        <tbody>
            {users.map((item) => (
            <tr key={item.id}>
                {
                    Object.keys(item)
                        .filter(key => key!==`id`) // [`name`, `city`]
                        .map((key,i) => <td key={i}>{item[key]}</td>)
                }
            </tr>
            ))}
        </tbody>
        </table>

        { isRender ? <h3>Conditional Heading</h3> : null }
        { isRender && <h3>Conditional Heading</h3> }

  </React.Fragment>
}

// const List = ({list=[], color, characters}) => {
//     setTimeout(() => {
//         list.push(`tiger`);
//         console.log(list);
//     }, 1000)

//     return list.length
//     ? <ul style={{color, border: `10px solid black`}}>
//         {list.map((item,index) => <li key={index}>{item} {characters}</li>)}
//     </ul>
//     : null;
// }

class List extends React.Component {
    constructor(props){
        super(props);

        this.state = Object.assign(
            {
                borderWidth: `20px`
            },
            JSON.parse(JSON.stringify(this.props))
        );

        setTimeout(() => {
            this.setState({
                list: [...this.state.list, `tiger`]
            })
        
        }, 1000)
    }

    render(){
        console.log(this);

        let {list=[], color, characters, borderWidth} = this.state;

        return list.length
            ? <ul style={{color, border: `10px solid black`, borderWidth}}>
                {list.map((item,index) => <li key={index}>{item} {characters}</li>)}
            </ul>
            : null;
    }
}

class User extends React.Component {
    constructor(props){
        super(props);

        if(this.state.user && this.state.user.animals){

            const removeAnimalIntervalId = setInterval(() => {
                this.setState(
                    {
                        user: {...this.state.user, animals: this.state.user.animals.slice(0,-1)}
                    },
                    () => {
                        console.log(this.state.user.animals);
                        !this.state.user.animals.length && clearInterval(removeAnimalIntervalId);
                    }
                )

            }, 100000)
        }
    }

    state = JSON.parse(JSON.stringify(this.props))

    render(){
        let {user} = this.state;

        return user && Object.keys(user).length && Array.isArray(user.animals) && user.animals.length
        ? <ul>
            {user.animals.map((item,index) => <li key={index}>{item}</li>)}
        </ul>
        : null;
    }
}

class Animal extends React.Component{
    constructor(props){
        super(props);

        // this.setState((newState)=>{}, callback)

        setTimeout(() => {
            this.setState(newState => ({
                item: {...newState.item, name: `Ann`}
            }))
        }, 1000)

        setTimeout(() => {
            this.setState(newState => ({
                item: {...newState.item, age: 1000000000000}
            }))
        }, 1000)

        setTimeout(() => {
            this.setState(newState => ({
                item: {...newState.item, city: `Kyiv!!!!`}
            }))
        }, 1000)
    }

    state = JSON.parse(JSON.stringify(this.props));

    render(){
        let {item={}} = this.state;

        return Object.keys(item).length
        ? <ul>
            {Object.keys(item).map((key,index) => <li key={index}>{item[key]}</li>)}
        </ul>
        : null;
    }
}

const UserAnn = {
    name: `Ann`,
    animals: [`cat`, `dog`,`lion`, `tiger`, `lion`]
}

const DogPatron = {
    name: `Patron`,
    city: `Kharkiv`,
    age: 2
}

root.render(
    <React.Fragment>
        <List list={animals} color="red" characters="..."></List>
        <User user={UserAnn} />
        <User />
        <Animal item={DogPatron} />
    </React.Fragment>
);

// Object.keys(user) // [name, surname, age];