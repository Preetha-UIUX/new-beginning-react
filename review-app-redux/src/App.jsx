import './App.css'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header text="Review App" bgColor="#333333" color="#fff"/>
      <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>
    </>
  )
}

export default App
