// Write your code here
import './index.css'

const DenominationItems = props => {
  const {details, onClicker} = props
  const {value} = details
  const onClickFun = () => {
    onClicker(value)
  }
  return (
    <div>
      <form>
        <button className="button" onClick={onClickFun} type="button">
          {value}
        </button>
      </form>
    </div>
  )
}
export default DenominationItems
