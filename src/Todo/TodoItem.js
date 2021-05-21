import React, { useContext } from "react";
import PropTypes from "prop-types";

const styles = {
    li: {
        display: 'flex',
        justifyContext: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },

    input: {
        marginRight: '1rem'
    },

    span: {
        margin: '0 1rem 0 0'
    }
}


function TodoItem( { todo, index, onChange } ) {

    let classes = [];

    if (todo.completed) {
        classes.push('done');
    };

    return (
        <li style={ styles.li }>
            <span className={ classes.join(' ') } style={ styles.span }>
                <input
                    type="checkbox"
                    style={ styles.input }
                    onChange={() =>
                        onChange(todo.id)
                    }
                    checked={ todo.completed }
                />
                <strong>{ index + 1 }</strong>
                &nbsp;
                { todo.title }
            </span>
            <button className='rm'>&times;</button>
        </li>
    )
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
};


export default TodoItem