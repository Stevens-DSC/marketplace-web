import Button from "../components/ui/Button"


const Index = props => (
    <div>
      <h1>Test</h1>
      <Button
        onClick={()=>console.log("HI")}
        name="John"
      />
    </div>
)

// Index.getInitialProps = async function () {
//     // const res = await fetch(something)

//     return {}
// }

export default Index
