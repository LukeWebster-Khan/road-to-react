import PropTypes from 'prop-types'

export const List = ({ list }) => {
    return (
        <ul className="list__unordered">
            {list.map(function (item) {
                return (
                    <li className="list__item" key={item.objectID}>
                        <div className="list__row">
                            Website:
                            <a href={item.url}>{item.title}</a>
                        </div>
                        <div className="list__row">
                            Author:
                            <span>{item.author}</span>
                        </div>
                        <div className="list__row">
                            Comments:
                            <span>{item.num_comments}</span>
                        </div>
                        <div className="list__row">
                            Points:
                            <span>{item.points}</span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

List.propTypes = {
    list: PropTypes.array,
}

export default List
