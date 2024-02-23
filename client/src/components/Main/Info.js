import styles from "./styles.module.css"
const Info = ({user, message}) => {
    return (
    <div className={styles.dane}>
        <h2 className={styles.name}>{message}</h2>
        <h3 className={styles.name}>{user.firstName} {user.lastName} </h3>
        <div className={styles.field}>
            <div className={styles.fieldName}>
                <p className={styles.opis}>Id:</p>
            </div>
            <div className={styles.fields}>
                <p className={styles.data}>{user._id}</p>
            </div>
        </div>

        <div className={styles.field}>
            <div className={styles.fieldName}>
                <p className={styles.opis}>Email:</p>
            </div>
            <div className={styles.fields}>
                <p className={styles.data}>{user.email}</p>
            </div>
        </div>
    </div>);

}
/*function Information(props) {
    const users = props.users;
    return (
        <><div>
        </div><ul> {users.map((user) => <Info key={user._id} user={user} />)} </ul></>);
}*/

export default Info