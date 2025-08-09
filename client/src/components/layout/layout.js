import styles from './layout.module.css'
import Sidebar from '../sidebar/sidebar';

function DashboardLayout({children}){
    return(
        <div className={styles.dashbaord_container}>   
            
            <Sidebar/>     

            {/* Conteúdo da página */}
            <div className={styles.main_content}>
            {children}    
            </div>

        </div>
    )
}

export default DashboardLayout;