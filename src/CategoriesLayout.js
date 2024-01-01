import { Link, Outlet } from "react-router-dom";

export function CategoriesLayout({ children }) {
  return (
    <div>
      <h1>Categories</h1>
      <nav>
        <ul>
          <li>
            <Link to="/categories/animals">Food</Link>
          </li>
          <li>
            <Link to="/categories/food">Clothes</Link>
          </li>
          <li>
            <Link to="/categories/cars">Cars</Link>
          </li>
          <li>
            <Link to="/categories/electronics">Electronics</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
