import React, { useEffect } from 'react'
import { connect, useDispatch } from 'umi'
import styles from './index.less'


interface IProps {
    radioList: string,
    keywords: number,
    aa: number
}
export default connect(({ found }) => ({
    radioList: found.radioList
}))(function Index(props: IProps) {
    const dispatch = useDispatch()
    const {
        keywords,
        radioList
    } = props
    useEffect(() => {
        dispatch({
            type: 'found/getRadioList',
            payload: {
                keywords: keywords,
                type: 1009
            }
        })
    }, [])
    return (
        <div className={styles.content} >
            {
                radioList.map((item, index) => {
                    return <div className={styles.list} key={index} >
                        <div className={styles.left}>
                            <img src={item.intervenePicUrl} />
                        </div>
                        < div className={styles.right} >
                            <div>
                                <span>书名:</span>
                                <span className={styles.bookName}> {item.name}</span>
                            </div>
                            <div>
                                <span>类别:</span>
                                <span className={styles.category}> {item.category}</span>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
})

