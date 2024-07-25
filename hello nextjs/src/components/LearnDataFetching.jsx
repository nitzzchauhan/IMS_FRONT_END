
async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    return res.json()
}

export default async function LearnDataFetching() {
  const data = await getData()
  console.log(data)
    return (
    <>

    <div>{data.id}</div>
    <div>{data.title}</div>
    <hr/>
    <div>{data.body}</div>

   </>
  )
}
