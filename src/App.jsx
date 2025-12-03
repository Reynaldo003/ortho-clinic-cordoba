import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Book from './pages/Book'
import NotFound from './pages/NotFound'
import DoctorProfile from "./pages/DoctorProfile";


export default function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-950">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:slug" element={<Book />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/doctor/:slug" element={<DoctorProfile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
