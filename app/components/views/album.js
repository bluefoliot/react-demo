import React from 'react';

class Album extends React.Component{
    render(){
        return(
            <div className="col-sm-4">
                <div className="panel panel-primary">
                    <div className="panel-heading">{this.props.title}</div>
                    <div className="panel-body">
                        <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"
                         style={{width:"100%"}} alt="Image"/>
                    </div>
                    <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
                </div>
            </div>
        )
    }
}

export default Album;
