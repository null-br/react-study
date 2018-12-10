import * as React from 'react';

// type 被废弃，使用interface
// type MyCompProps = {
//     name: 'edede' | 'interview'
// }
export interface IMyCompProps {
    name: 'edede' | 'interview';
    isLived?: boolean;
    kids?: 1 | 2;
    livedIn?: ['BeiJing', 'HangZhou']
}
const MyComp = (props: IMyCompProps) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    );
}

export default MyComp;
