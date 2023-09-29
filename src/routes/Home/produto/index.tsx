import { Outlet } from "react-router-dom";
import "./styles.css";
import Produto from "../../../components/Produto";

export default function Produtos() {
  return (
    <>
    <Produto />
    <Outlet></Outlet>
    </>
  );
}
