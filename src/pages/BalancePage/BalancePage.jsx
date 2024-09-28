import { useSelector, useDispatch } from "react-redux"
import {  depositAction,  withdrawAction } from "../../store/store"

const BalancePage = () => { 

    const value = useSelector(state => state.balance.value)
    const dispatch = useDispatch()

    const handleDeposit = () => {
        dispatch(depositAction(10))
    }

    const handleWithdraw = () => {
        dispatch(withdrawAction(10))
    }

    return (
        <div>
            <h1>Balance Page</h1>
            <button onClick={handleDeposit}>Deposit</button>
            <button onClick={handleWithdraw}>Withdraw</button>
            balance: {value}            
        </div>
    )
}
 
export default BalancePage