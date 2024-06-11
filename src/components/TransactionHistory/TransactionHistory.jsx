import './Transactions.css'


const TransactionHistory = ({items}) => {
  // console.log(items[0])
  return (
    
      <table className='transaction-history'>
  <thead className='table-head'>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className='table-body'>
    {items.map(({id, type, amount, currency}) => (
       <tr key = {id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    ))}
    
    
  </tbody>
</table>

    
  )
}

export default TransactionHistory