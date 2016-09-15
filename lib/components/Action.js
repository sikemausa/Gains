import firebase from '../firebase';
import React, {Component} from 'react';

export default class Action extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      isCompleted: false,
      isEditing: false,
      category: this.props.category
    };
  }

  toggleActionClass(boolean) {
    if (boolean)
      return 'complete';
    }
    
  render() {
    const {actionUid, actionCompleted, category} = this.props;
    if (this.state.isEditing) {
      return (
        <section className="ActionRoom">
          <article
            accessKey={actionUid}
            className={this.toggleActionClass(this.props.actionCompleted) + " ActionList " + this.props.category}>
            <button
              className="ActionComplete"
              onClick={() => {
              this.setState({isCompleted: true});
              this
                .props
                .reference
                .update({isCompleted: this.state.isCompleted});
            }}></button>
            <textarea
              className="ActEditInput"
              onChange={(e) => this.setState({title: e.target.value})}
              value={this.state.title}
              onBlur={(e) => {
              this.setState({isEditing: false});
              this
                .props
                .reference
                .set({title: this.state.title, category: this.state.category, isCompleted: this.state.isCompleted});
            }}/>
            <h3 className="actionCatTitle">{this.props.category}</h3>
            <button className="ActionDelete" onClick={() => this.props.reference.remove()}></button>
          </article>
        </section>
      );
    } else {
      return (
        <section className="ActionRoom">
          <article
            accessKey={actionUid}
            className={this.toggleActionClass(this.props.actionCompleted) + " ActionList " + this.props.category}>
            <button
              className="ActionComplete"
              onClick={() => {
              this.setState({isCompleted: true});
              this
                .props
                .reference
                .update({isCompleted: this.state.isCompleted});
            }}></button>
            <h3 className="actionTitle" onClick={() => this.setState({isEditing: true})}>
              {this.state.title}
            </h3>
            <h3 className="actionCatTitle">{this.props.category}</h3>
            <button className="ActionDelete" onClick={() => this.props.reference.remove()}></button>
          </article>
        </section>
      )
    }
  }
}
