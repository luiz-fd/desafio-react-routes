import { Outlet } from "react-router-dom";
import "./styles.css";
import Product from "../../../components/Product"

export default function Products() {
  return (
    <>
    <Product />
    <Outlet></Outlet>
    </>
  );
}
