import { connect } from 'react-redux'
import { setOffset, setRef } from '../actions'
import {Header as HeaderComp} from '../components/Header'


const mapStateToProps = state => {
    return {
        scrollRef: state.scrollRef
    }
}

const Header = connect(
    mapStateToProps
)(HeaderComp)

export default Header