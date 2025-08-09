import styles from './sidebar.module.css'
function Sidebar(){
    return(
        <div className={styles.sidebar_main_container}>


            <div className={styles.sidebar_category_container}>
                
                    <h1 className={styles.sidebar_category_title}>Análise</h1>
                        
                        <div className={styles.sidebar_category_redirect_container}>   
                            <div className={styles.sidebar_category_redirect}>
                                <h1>Vendas</h1>
                            </div>
                        </div>


            </div>

        </div>
    )
}

export default Sidebar