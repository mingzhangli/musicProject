import React, { useEffect } from 'react'
import { connect, useDispatch } from 'umi'
import styles from './index.less'
export default connect(({ found }) => ({
    mvList: found.mvList
}))(function index(props) {

    const dispatch = useDispatch()
    const {
        keywords,
        mvList
    } = props
    console.log(mvList, '32132131')
    useEffect(() => {
        dispatch({
            type: 'found/getMvList',
            payload: {
                keywords: keywords,
                type: 1004
            }
        })
    }, [])

    return (
        <div className={styles.content}>
            {
                mvList.map((item, index) => {
                    return <div className={styles.list}>
                        <div className={styles.left}>
                            <img src={item.cover} />
                        </div>
                        <div className={styles.right}>
                            <div className={styles.mvName}>
                                {item.name}
                            </div>
                            <div className={styles.artistName}>
                                {item.artistName}
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
)