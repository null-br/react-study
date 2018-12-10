import * as React from 'react';

// 使用interface 注意第一个字母必须为大写字母I
export interface IMyClassProps {
    name?: string;
    isLived: boolean;
}

class MyClass extends React.Component<IMyClassProps> {

    public static defaultProps: Partial<IMyClassProps> = {
        name: 'Lee'
    };

    constructor(props:any) {
        super(props);
        this.state = {
            age: 21,
        }
    }
    public render() {
        return (
            <div className="App">
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

export default MyClass;
