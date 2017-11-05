import { connect } from 'react-redux'
import { setOffset, setRef } from '../actions'
import RepairGrid from '../components/RepairGrid'

const mapStateToProps = state => {
  console.log(state)
  return {
    offset: state.offset
  }
}

const mapDispatchToProps = dispatch => {
  return  {
    passRefToState: (ref) => {
      dispatch(setRef(ref, null, null))
    }
  }
}


const VisibleRepairGrid = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepairGrid)

export default VisibleRepairGrid