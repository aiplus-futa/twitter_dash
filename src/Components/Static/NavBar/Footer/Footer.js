import React, {Component} from 'react';
import Aux from '../../../../hoc/Auxillary';


class Footer extends Component {
   
    render(){
        return (
            <Aux>
                <div className="page-footer green">
                    
                    <div className="footer-copyright">
                        <div className="container" align='center'>

                        <p>  Copyright  <i className="tiny material-icons">copyright</i> {new Date().getFullYear()} Developed by DSN AI+ FUTA  </p>
                       Contact via mail <i className="tiny material-icons">forward</i> <a href='mailto: dsnfuta@gmail.com' ><i className="tiny material-icons">mail</i></a> <br/>
                       <i className="tiny material-icons">star</i><i className="tiny material-icons">star</i><i className="tiny material-icons">star</i>
                        
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Footer;
