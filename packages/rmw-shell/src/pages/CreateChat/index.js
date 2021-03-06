import React, { useEffect } from 'react'
import { useLists } from 'rmw-shell/lib/providers/Firebase/Lists'
import ListPage from 'material-ui-shell/lib/containers/Page/ListPage'
import { useIntl } from 'react-intl'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import Mail from '@material-ui/icons/Mail'
import Star from '@material-ui/icons/Star'
import GroupAdd from '@material-ui/icons/GroupAdd'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import {
  GoogleIcon,
  FacebookIcon,
  GitHubIcon,
  TwitterIcon,
} from 'rmw-shell/lib/components/Icons'
import Badge from '@material-ui/core/Badge'
import { useHistory } from 'react-router-dom'
import { useAuth } from 'base-shell/lib/providers/Auth'

const getProviderIcon = (id) => {
  const iconProps = {
    color: 'primary',
    style: {
      height: 20,
      width: 20,
    },
  }

  if (id === 'google.com') {
    return <GoogleIcon key={id} {...iconProps} />
  }
  if (id === 'facebook.com') {
    return <FacebookIcon key={id} {...iconProps} />
  }
  if (id === 'github.com') {
    return <GitHubIcon key={id} {...iconProps} />
  }
  if (id === 'twitter.com') {
    return <TwitterIcon key={id} {...iconProps} />
  }

  return <Mail key={id} {...iconProps} />
}

export default function () {
  const { firebaseApp, watchList, getList, isListLoading } = useLists()
  const { auth } = useAuth()
  const intl = useIntl()
  const history = useHistory()

  useEffect(() => {
    watchList('users')
    watchList('admins')
  }, [watchList])

  const admins = getList('admins')

  const list = getList('users')
    .map(({ key, val }) => {
      return { key, ...val }
    })
    .filter((u) => u.key !== auth.uid)

  list.unshift({
    key: 'new_group',
    displayName: intl.formatMessage({
      id: 'group_chat',
      defaultMessage: 'Group chat',
    }),
    secondaryText: intl.formatMessage({
      id: 'create_group_chat',
      defaultMessage: 'Create new group chat',
    }),
    icon: <GroupAdd />,
    onClick: () => {
      history.push(`/create_group_chat`)
    },
  })

  const handleRowClick = (user) => {
    const key = user.key
    const userValues = user
    const userChatsRef = firebaseApp
      .database()
      .ref(`/user_chats/${auth.uid}/${key}`)

    const chatData = {
      displayName: userValues.displayName,
      photoURL: userValues.photoURL ? userValues.photoURL : '',
      lastMessage: '',
    }

    userChatsRef.update({ ...chatData })

    history.push(`/chats/${key}`)
  }

  const Row = ({ data, index, style }) => {
    const {
      displayName = '',
      key,
      photoURL,
      providerData = [],
      icon,
      secondaryText,
      onClick,
    } = data

    let isAdmin = false

    admins.map((a) => {
      if (a.key === key) {
        isAdmin = true
      }
    })

    return (
      <div key={key} style={style}>
        <ListItem
          button
          alignItems="flex-start"
          style={{ height: 82 }}
          onClick={onClick ? () => onClick() : () => handleRowClick(data)}
        >
          <ListItemAvatar>
            <Badge
              invisible={!isAdmin}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              badgeContent={
                <Star
                  style={{
                    width: 15,
                    padding: 0,
                  }}
                />
              }
              color="secondary"
            >
              <Avatar src={photoURL} style={{ height: 45, width: 45 }}>
                {icon}
              </Avatar>
            </Badge>
          </ListItemAvatar>

          <ListItemText
            primary={`${displayName}`}
            secondary={
              providerData.length > 0 ? (
                <React.Fragment>
                  {providerData.map((p) => {
                    return getProviderIcon(p.providerId)
                  })}
                </React.Fragment>
              ) : (
                secondaryText
              )
            }
          />
        </ListItem>
        <Divider variant="inset" />
      </div>
    )
  }

  return (
    <ListPage
      name="users"
      list={list}
      Row={Row}
      listProps={{ itemSize: 82 }}
      getPageProps={(list) => {
        return {
          pageTitle: intl.formatMessage({
            id: 'chat_with',
            defaultMessage: 'Chat with',
          }),
          isLoading: isListLoading('users'),
          onBackClick: () => {
            history.goBack()
          },
        }
      }}
    />
  )
}
