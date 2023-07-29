import React from 'react';
const Sresult=(props)=>{
    const img=`https://source.unsplash.com/400x400/?${props.name}`;
return(<>
    <img src={img} alt='alternate'/>
</>);
};
export default Sresult;