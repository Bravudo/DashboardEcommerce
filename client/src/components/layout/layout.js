import styles from './layout.module.css'
import Sidebar from '../sidebar/sidebar';

function DashboardLayout({children}){
    return(
        <div className={styles.dashboard_container}>   
            <Sidebar/>        
            <div className={styles.main_content}>
            {children}    
            </div>
        </div>
    )
}

export default DashboardLayout;