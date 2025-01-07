import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";



async function fetchProductosApi() {
  // uso de servidor externo; https://www.npoint.io/
  const res = await fetch(`https://api.npoint.io/f4e962d97ad151d48272/produtos`)
  // const res = await fetch("http://localhost:3000/api/produtos")

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}, Não foi possivel obter os dados`);
  }
  const produtos = await res.json()
  return produtos
}


async function fetchCategoriasApi() {
  // uso de servidor externo; https://www.npoint.io/
  const res = await fetch(`https://api.npoint.io/dc8462a50f22d36807d5/categorias`)
  // const res = await fetch("http://localhost:3000/api/categorias")

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}, Não foi possivel obter os dados`);
  }
  const categorias = await res.json()
  return categorias
}

export default async function Home() {
  const produtos = await fetchProductosApi();
  // const categorias = getCategorias()

  const categorias = await fetchCategoriasApi();



  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}
