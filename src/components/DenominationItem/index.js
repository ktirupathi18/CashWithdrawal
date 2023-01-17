// Write your code here
import './index.css'

const DenominationItems = props => {
  const {value, onClicker} = props
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
