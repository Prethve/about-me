import React from 'react'

async function fetchPurchases() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/purchases`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error)
  }
}

const Projects = async () => {

  const purchases = (await fetchPurchases()).slice(0,10)
  // purchases.map((purchase) => {
  //   console.log(purchase['date'])
  // })
  return (
    <div className='w-screen h-screen'>
      Projects
      <table className='border-collapse table-auto self-center w-full text-sm text-white'>
        <thead>
          <tr>
            <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Date</th>
            <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Category</th>
            <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Mode</th>
            <th className='border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Amount</th>
          </tr>
        </thead>
        <tbody className='bg-white dark:bg-slate-800'>
          {purchases.map((purchase, key) => {
            return (<tr key={key}>
              <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{purchase['date']}</td>            
              <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{purchase['category']}</td>            
              <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{purchase['mode']}</td>            
              <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{purchase['amount']}</td>            
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Projects