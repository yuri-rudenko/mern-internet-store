import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Context } from '..';

const TypeBar = observer(() => {

    const {device} = useContext(Context)

    return (
        <div>
            <ListGroup>
                {device.types.map(type => (
                    <ListGroup.Item 
                    style={{cursor: 'pointer'}}
                    active={type._id === device.selectedType._id}
                    onClick={() => device.setSelectedType(type)} 
                    key={`${type._id}`}
                    >
                        {type.name}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
})

export default TypeBar;
