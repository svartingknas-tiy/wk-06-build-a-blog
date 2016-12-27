import React from 'react';
import { Link } from 'react-router'
import Styles from './Main.sass'

export default class Footer extends React.Component {
  render () {
    return(
      <div>
              <hr />
              <footer>
                  <a href type="button" className="glyphicon glyphicon-envelope" data-toggle="modal" data-target="#myModal"></a>

                  {/*Modal*/}
                  <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">

                    {/*Modal content*/}
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">E-mail us here</h4>
                  </div>
                  <div className="modal-body">
                    <form className="form-horizontal" method="post" role="form">
              	<div className="form-group">
              		<label htmlFor="email" className="col-sm-2 control-label">E-mail</label>
              		<div className="col-sm-4">
              			<input type="email" className="form-control" id="email" name="email" placeholder="E-mail Address" required autoFocus />
              		</div>
              	</div>

              	<div className="form-group">
              		<label htmlFor="name" className="col-sm-2 control-label">Name</label>
              		<div className="col-sm-4">
              			<input type="text" className="form-control" id="name" name="name" placeholder="Name" required />
              		</div>
              	</div>

              	<div className="form-group">
              		<label htmlFor="name" className="col-sm-2 control-label">Message</label>
              		<div className="col-sm-6">
              			<textarea id="message" name="message" className="form-control" placeholder="Your Message" rows="5" required />
              		</div>
              	</div>

              	<div className="form-group">
              		<div className="col-sm-offset-2 col-sm-2">
              			<button type="submit" className="btn btn-primary">Send Message</button>
              		</div>
              	</div>
              </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>

              </div>
            </div>
                <div><div className="fb-like" data-href="http://svartingknas-blog.herokuapp.com/" data-layout="button" data-action="recommend" data-size="small" data-show-faces="false" data-share="true"></div></div>
              </footer>
                <hr />
            </div>
    );
  }
}
