import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UsersShow from "./users_show";

const mapStateToProps = state => {
    user: state.entities.users[state.session.id]
}


export default withRouter(connect(mapStateToProps)(UserShow));

