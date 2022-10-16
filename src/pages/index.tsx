import React, { FC } from 'react'
import { NavBar, TabBar } from 'antd-mobile'
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom'
import {
  AppOutline,
  MessageOutline,
  UserOutline,
} from 'antd-mobile-icons'

import Message from './Message'
import Mine from './Mine'
import Found from './Found'

import styles from './index.less'

const Bottom: FC = () => {
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value: string) => {
    history.push(value)
  }

  const tabs = [
    {
      key: '/found',
      title: '发现',
      icon: <AppOutline />,
    },
    {
      key: '/message',
      title: '消息',
      icon: <MessageOutline />,
    },
    {
      key: '/mine',
      title: '我的',
      icon: <UserOutline />,
    },
  ]

  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

export default () => {
  return (
    <Router initialEntries={['/found']}>
      <div className={styles.app}>
        <div className={styles.body}>
          <Switch>
            <Route exact path='/found'>
              <Found />
            </Route>
            <Route exact path='/message'>
              <Message />
            </Route>
            <Route exact path='/mine'>
              <Mine />
            </Route>
          </Switch>
        </div>
        <div className={styles.bottom}>
          <Bottom />
        </div>
      </div>
    </Router>
  )
}

