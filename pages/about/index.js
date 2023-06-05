import Router from "next/router"
import { MainLayout } from "../../components/MainLayout"


function About() {
  return (
    <MainLayout title={'About page'}>
          <h1>Hello from About</h1>
          <button onClick={() => Router.push('/')}>Go back to home!</button>
    </MainLayout>
  )
}

export default About
