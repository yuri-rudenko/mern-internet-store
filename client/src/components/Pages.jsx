import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Pagination } from 'react-bootstrap';

const Pages = observer(() => {
    const {device} = useContext(Context);
    const pageCount = Math.ceil(device.totalCount / device.limit);

    const pages = [];

    for(let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }
    return (
        <div>
            <Pagination className='mt-5'>
                {pages.map(page => (
                    <Pagination.Item key={page} onClick={() => device.setPage(page)} active={device.page === page}>{page}</Pagination.Item>
                ))}
            </Pagination>
        </div>
    );
})

export default Pages;
