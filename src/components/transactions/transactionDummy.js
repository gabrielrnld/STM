import { fetchTransactions } from "../../reducer/transaction-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export function TransactionDummy() {
  const state = useSelector((storedState) => storedState.transactions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  //   console.log(state.transactions);

  if (state.isLoading) {
    return <strong>Loading</strong>;
  } else if (!state.isLoading && !Array.isArray(state.transactions)) {
    return <p>Transaction not found</p>;
  } else {
    return (
      <>
        {console.log(state.transactions.length)}
        <ul>
          {state.transactions.map((trx, key) => (
            <li key={key}>
              <strong>{trx.id}</strong>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
