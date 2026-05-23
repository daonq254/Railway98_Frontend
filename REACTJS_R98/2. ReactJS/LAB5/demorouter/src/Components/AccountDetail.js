import React from 'react';
import { useParams } from 'react-router-dom';

function AccountDetail(props) {
    // Lấy dữ liệu param trên đường link
    let param = useParams();
    let id = param.id_param;

    console.log("id: " + id);

    // 
    return (
        <div>
            <h3>This is Account Detail</h3>
        </div>
    );
}

export default AccountDetail;