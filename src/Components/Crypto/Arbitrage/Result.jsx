import DataGridDemo from "./Table"

export const Result = ({ price }) => {
  if (price.length !==0) {
  let par = price.filter(q => q.symbol.includes("USDT") && !q.symbol.includes("SRM"))
  let map1 = par.map(x => {
    let filterPair1 = x.symbol.replace(/USDT/, '')
    let par2 = price.filter(y => y.symbol.includes(filterPair1))
    let map2 = par2.map(w => {
      const regexp = new RegExp(filterPair1);
      let filterPair2 = w.symbol.replace(regexp, '')
      let par3 = price.filter(z => z.symbol.includes(filterPair2 + 'USDT' || 'USDT' +  filterPair2) ?
      z.symbol.includes(filterPair2 + 'USDT' || 'USDT' +  filterPair2) : "")
      let map3 = par3.map(q => {
        const filterResult = (100 / x.price / w.price * q.price - 100);
        const result = (filterResult < 4 && filterResult > -4)
            ? filterResult.toFixed(2)
            : (100 / x.price * w.price * q.price - 100).toFixed(2);
        const result2 = result < 5 && result > -5
            ? result
            : (100 * x.price * w.price * q.price - 100).toFixed(2);
        const result3 = result2 < 5 && result2 > -5
            ? result2
            : (100 * x.price / w.price * q.price - 100).toFixed(2);
        return ({
          pair1: x.symbol,
          price1: x.price,
          pair2: w.symbol,
          price2: w.price,
          pair3: q.symbol ? q.symbol : "",
          price3: q.price ? q.price : "",
          result: result3,
        })
      }) 
      return (map3) 
    })
    return (map2)
    })
    let jsonResult = map1.flat(3).filter(x => x.result > 0.5 && x.result < 10)
    let result = jsonResult.map((x, i) => ({pair1: x.pair1, price1: +(x.price1), pair2: x.pair2, price2: x.price2, 
      pair3: x.pair3, price3: +(x.price3), result: +(x.result), id: i + 1}))

    return (
      <>
        <DataGridDemo result={result} />
        {/* {JSON.stringify(result)} */}
      </>
    )
  }
}

export default Result;