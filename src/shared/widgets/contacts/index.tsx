import MapY from "@shared/components/map";
import styles from "./index.module.scss"

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <MapY/>
      <div className={styles.contacts__layout}>
        <h3>Контактная информация</h3>
        <p>Будем рады ответить на Ваши вопросы в будние дни с <strong>8:00 до 17:00</strong></p>
        <p>450071, Российская Федерация, Башкортостан, г.Уфа, ул. Ростовская 18, офис. 207</p>
        <p>+7 347 25 72 057</p>
        <p>+7 904 735 20 57</p>
        <p>inotek@internet.ru</p>
      </div>
    </div>
  );
};

export default Contacts;