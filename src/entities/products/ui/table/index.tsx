import styles from "./index.module.scss";

interface Spec {
  label: string;
  value: string | number;
}

const specs: Spec[] = [
  {label: "Число проводов", value: "2-12"},
  {label: "Число проводов", value: "2-12"},
  {label: "Число проводов", value: "2-12"},
  {label: "Число проводов", value: "2-12"},
]

const ProductSpecsTable = () => (
  <section className={styles.specsTable}>
    <table className={styles.table}>
      <tbody>
      {specs.map((spec, index) => (
        <tr key={index} className={styles.row}>
          <th className={styles.label}>{spec.label}</th>
          <td className={styles.value}>{spec.value}</td>
        </tr>
      ))}
      </tbody>
    </table>
  </section>
);

export {
  ProductSpecsTable
};
