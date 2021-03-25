import React, { Component } from 'react'

class ClassCount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    incrHandler=()=>{
        this.setState({count:this.state.count+1})
    }
    decrHandler=()=>{
        this.setState({count:this.state.count-1})
    }

    render() {
        return (
            <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h2>Class Component Counter</h2>
                                <h3>Count: {this.state.count}</h3></div>
                            <div className="card-body">
                                <button className="btn btn-success mr-4" 
                                onClick={this.incrHandler}>Incr</button>
                                 <button className="btn btn-info" 
                                onClick={this.decrHandler}>Decr</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default ClassCount
