import styles from "./page.module.css";
import Produto from "@/app/components/Produto";

async function getProduto(slug) {
  // Implementar a busca de produto por slug aqui
  // (ex: chamar uma API ou usar cache)
  const res = await fetch(`https://api.npoint.io/f4e962d97ad151d48272/produtos`);
  
  const produtos = await res.json();
  const produto = produtos.find((produto) => produto.id.toString() === slug);

  return produto;
}

export default async function ProdutoPage({ params }) {
  const {slug} = await params
  // Ensure that params.slug is correctly passed
  const produto = await getProduto(slug);
  // console.log(produto);
  

  return (
    <main className={styles.main}>
      {produto && <Produto produto={produto} />}
    </main>
  );
}

// // Esta função é usada para gerar os slugs estáticos para cada página.
// export async function generateStaticParams() {
//   const res = await fetch(`https://api.npoint.io/499dccdd8159313bbda1/produtos`);
//   const produtos = await res.json();

//   const result = produtos.map((produto) => ({
//     slug: produto.id.toString(),
//   }));
//   return result;
// }