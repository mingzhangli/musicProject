import { ProLayout } from '@ant-design/pro-layout'
import React, { useEffect } from 'react'
import { connect, useDispatch } from 'umi'
import styles from './index.less'

export default connect(({ found }) => ({
    playList: found.playList
}))(function index(props) {
    const dispatch = useDispatch()
    const { playList } = props

    useEffect(() => {
        const { keywords } = props
        dispatch({
            type: 'found/getPlayList',
            payload: {
                keywords: keywords,
                type: 1000
            }
        })
    }, [])

    const countFormat = (time: number) => {
        if (time > 9999) {
            let w = time / 10000
            return w
        } else {
            return time
        }
    }

    return (
        <div className={styles.content}>
            {
                playList.map((item, index) => {
                    return <div className={styles.list} key={index}>
                        <div className={styles.left}>
                            <img src={item.coverImgUrl} />
                        </div>
                        <div className={styles.right}>
                            <div className={styles.playName}>
                                {item.name}
                            </div>
                            <div className={styles.description}>
                                <span className={styles.nickName}>by{item.creator.nickname}</span>
                                播放：<span className={styles.playCount}>{parseInt(countFormat(item.playCount))}w</span>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
})
