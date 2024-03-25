import { useEffect, useRef, useState } from 'react'

function App() {
  
  let answer = useRef({
    firstQuestion : "Hypertext Markup language",
    secondQuestion : "<b>",
    thirdQuestion : "Delhi"
  })
  
  let score = useRef(0)
  let [change, setChange] = useState({})

  useEffect(
    () => {

      let [keys] = Object.keys(change)
      let [values] = Object.values(change)

      console.log(keys, values)

      if(values == answer.current[keys]){
        score.current += 2
      }

    }, [change])

  const handleChange = (event) => {
    setChange({[event.target.name] : event.target.value})
  }

  return (
    <>
      <form onChange={(e) => handleChange(e)}>
        <h1>HTML stands for</h1>
        <label><input name='firstQuestion' type="radio" value="Hypertext Markup language"/>Hypertext Markup language</label><br />
        <label><input name='firstQuestion' type="radio" value="HyperText and links markup language"/>HyperText and links markup language</label><br />
        <label><input name='firstQuestion' type="radio" value="Hyper machine language"/>Hyper machine language</label><br />
        <label><input name='firstQuestion' type="radio" value="None of these"/>None of these</label><br />
      </form>

      <form onChange={e => handleChange(e)}>
        <h1>Which element makes text bold in HTML</h1>
        <label><input name='secondQuestion' type="radio" value="<p>" />{"<p>"}</label><br />
        <label><input name='secondQuestion' type="radio" value="<pre>" />{"<pre>"}</label><br />
        <label><input name='secondQuestion' type="radio" value="<b>" />{"<b>"}</label><br />
        <label><input name='secondQuestion' type="radio" value="<i>" />{"<i>"}</label><br />
      </form>

      <form onChange={e => handleChange(e)}>
        <h1>What is the capital of India</h1>
        <label><input name="thirdQuestion" type="radio" value="Mumbai" />Mumbai</label><br />
        <label><input name="thirdQuestion" type="radio" value="Hydrabad" />Hydrabad</label><br />
        <label><input name="thirdQuestion" type="radio" value="Kerela" />Kerela</label><br />
        <label><input name="thirdQuestion" type="radio" value="Delhi" />Delhi</label><br />
      </form>

      <h1>Your final score is {score.current} </h1>

    </>
  )
}

export default App
