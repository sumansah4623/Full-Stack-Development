//Inside App.jsx, you usually render your main page:
//ooksPage becomes the main screen of your app.



import { Routes, Route, Navigate } from "react-router-dom";
import BooksPage from "./pages/BooksPage";
import AddBook from "./components/AddBook";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/books" />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/add-book" element={<AddBook />} />
    </Routes>
  );
}

export default App;

