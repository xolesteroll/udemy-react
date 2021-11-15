import styles from './UsersFormControls.module.css'

const UsersFormControls = (props) => {

    const classes = `${props.className} ${styles.formControls}`

    return (
        <div className={classes}>
            <label>{props.label}</label>
            <div className={styles.formControl}>
                <input
                    type={props.type}
                    value={props.value}
                    onChange={props.onChangeHandler}
                    label={props.label}
                />
            </div>
        </div>
    );
};

export default UsersFormControls;