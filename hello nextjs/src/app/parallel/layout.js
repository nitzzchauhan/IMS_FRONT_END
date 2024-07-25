export default function parallelLayout({ children, left, right }) {
  const isSlidebar = true
  return (

    <section>

      {children}
      {isSlidebar ? left : right}


    </section>
  )
}
