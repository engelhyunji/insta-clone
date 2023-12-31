import React from 'react'
import { Outlet, useLoaderData, useLocation } from 'react-router-dom'
import LayoutNavigation from './Navigation/LayoutNavigation'
import * as S from './style'
import LayoutFriendsList from './FriednsList/LayoutFriendsList'

export default function Layout() {
    const { pathname } = useLocation()
    const isLoginPage = pathname === '/login'
    const isSignUpPage = pathname === '/signup'
    const isMyPage = pathname === '/mypage'

    return (
        <S.Wrapper>
            {!isLoginPage && !isSignUpPage && <LayoutNavigation />}
            <div>
                <Outlet />
            </div>
            {!isLoginPage && !isSignUpPage && !isMyPage && <LayoutFriendsList />}
        </S.Wrapper>
    )
}
