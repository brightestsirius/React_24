var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);

var stringToPrint = "world";

var animals = ["cat", "dog", "lion"];

var user = {
    name: "Anna",
    surname: "Smith",
    age: 50
};

var users = [{
    id: 1,
    name: "User 1",
    city: "Kyiv"
}, {
    id: 2,
    name: "User 2",
    city: "Kharkiv"
}, {
    id: 3,
    name: "User 3",
    city: "Odesa"
}];

var tableStyle = {
    color: "green",
    borderColor: "crimson"
};

var isRender = true;

var App = function App() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            "h1",
            null,
            "Hello, ",
            stringToPrint,
            "!"
        ),
        React.createElement(
            "h2",
            null,
            "Hello, world!"
        ),
        React.createElement(
            "ul",
            null,
            animals.map(function (item, index) {
                return React.createElement(
                    "li",
                    { key: index },
                    item
                );
            })
        ),
        React.createElement(
            "ul",
            null,
            Object.keys(user).map(function (key, index) {
                return React.createElement(
                    "li",
                    { key: index },
                    user[key]
                );
            })
        ),
        React.createElement(
            "table",
            { className: "table__users", style: tableStyle },
            React.createElement(
                "tbody",
                null,
                users.map(function (item) {
                    return React.createElement(
                        "tr",
                        { key: item.id },
                        Object.keys(item).filter(function (key) {
                            return key !== "id";
                        }) // [`name`, `city`]
                        .map(function (key, i) {
                            return React.createElement(
                                "td",
                                { key: i },
                                item[key]
                            );
                        })
                    );
                })
            )
        ),
        isRender ? React.createElement(
            "h3",
            null,
            "Conditional Heading"
        ) : null,
        isRender && React.createElement(
            "h3",
            null,
            "Conditional Heading"
        )
    );
};

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

var List = function (_React$Component) {
    _inherits(List, _React$Component);

    function List(props) {
        _classCallCheck(this, List);

        var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

        _this.state = Object.assign({
            borderWidth: "20px"
        }, JSON.parse(JSON.stringify(_this.props)));

        setTimeout(function () {
            _this.setState({
                list: [].concat(_toConsumableArray(_this.state.list), ["tiger"])
            });
        }, 1000);
        return _this;
    }

    _createClass(List, [{
        key: "render",
        value: function render() {
            console.log(this);

            var _state = this.state,
                _state$list = _state.list,
                list = _state$list === undefined ? [] : _state$list,
                color = _state.color,
                characters = _state.characters,
                borderWidth = _state.borderWidth;


            return list.length ? React.createElement(
                "ul",
                { style: { color: color, border: "10px solid black", borderWidth: borderWidth } },
                list.map(function (item, index) {
                    return React.createElement(
                        "li",
                        { key: index },
                        item,
                        " ",
                        characters
                    );
                })
            ) : null;
        }
    }]);

    return List;
}(React.Component);

var User = function (_React$Component2) {
    _inherits(User, _React$Component2);

    function User(props) {
        _classCallCheck(this, User);

        var _this2 = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, props));

        _this2.state = JSON.parse(JSON.stringify(_this2.props));


        if (_this2.state.user && _this2.state.user.animals) {

            var removeAnimalIntervalId = setInterval(function () {
                _this2.setState({
                    user: Object.assign({}, _this2.state.user, { animals: _this2.state.user.animals.slice(0, -1) })
                }, function () {
                    console.log(_this2.state.user.animals);
                    !_this2.state.user.animals.length && clearInterval(removeAnimalIntervalId);
                });
            }, 100000);
        }
        return _this2;
    }

    _createClass(User, [{
        key: "render",
        value: function render() {
            var user = this.state.user;


            return user && Object.keys(user).length && Array.isArray(user.animals) && user.animals.length ? React.createElement(
                "ul",
                null,
                user.animals.map(function (item, index) {
                    return React.createElement(
                        "li",
                        { key: index },
                        item
                    );
                })
            ) : null;
        }
    }]);

    return User;
}(React.Component);

var Animal = function (_React$Component3) {
    _inherits(Animal, _React$Component3);

    function Animal(props) {
        _classCallCheck(this, Animal);

        // this.setState((newState)=>{}, callback)

        var _this3 = _possibleConstructorReturn(this, (Animal.__proto__ || Object.getPrototypeOf(Animal)).call(this, props));

        _this3.state = JSON.parse(JSON.stringify(_this3.props));
        setTimeout(function () {
            _this3.setState(function (newState) {
                return {
                    item: Object.assign({}, newState.item, { name: "Ann" })
                };
            });
        }, 1000);

        setTimeout(function () {
            _this3.setState(function (newState) {
                return {
                    item: Object.assign({}, newState.item, { age: 1000000000000 })
                };
            });
        }, 1000);

        setTimeout(function () {
            _this3.setState(function (newState) {
                return {
                    item: Object.assign({}, newState.item, { city: "Kyiv!!!!" })
                };
            });
        }, 1000);
        return _this3;
    }

    _createClass(Animal, [{
        key: "render",
        value: function render() {
            var _state$item = this.state.item,
                item = _state$item === undefined ? {} : _state$item;


            return Object.keys(item).length ? React.createElement(
                "ul",
                null,
                Object.keys(item).map(function (key, index) {
                    return React.createElement(
                        "li",
                        { key: index },
                        item[key]
                    );
                })
            ) : null;
        }
    }]);

    return Animal;
}(React.Component);

var UserAnn = {
    name: "Ann",
    animals: ["cat", "dog", "lion", "tiger", "lion"]
};

var DogPatron = {
    name: "Patron",
    city: "Kharkiv",
    age: 2
};

root.render(React.createElement(
    React.Fragment,
    null,
    React.createElement(List, { list: animals, color: "red", characters: "..." }),
    React.createElement(User, { user: UserAnn }),
    React.createElement(User, null),
    React.createElement(Animal, { item: DogPatron })
));

// Object.keys(user) // [name, surname, age];