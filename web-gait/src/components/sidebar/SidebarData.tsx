import React from 'react'
import { AiFillCaretDown, AiOutlineHome, AiOutlineUser, AiOutlineMoneyCollect, AiOutlineHistory } from 'react-icons/ai'
import { SidebarItem} from '../../model/sidebar/Sidebaritem'
import { FaCog, FaOpencart } from 'react-icons/fa';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Dashboard',
        path: '/overview',
        icon: <AiOutlineHome />,
        // iconClosed: <AiFillCaretDown />,
        // subnav: [
        //     {
        //         title: "Dashboard",
        //         path: '/overview/users',
        //         icon: <AiOutlineUser />
        //     },
        //     {
        //         title: "Revenue",
        //         path: '/overview/revenue',
        //         icon: <AiOutlineMoneyCollect />
        //     }
        // ]
    },
    {
        title: 'Examinations',
        path: '/home',
        icon: <FaOpencart />,
        // iconClosed: <AiFillCaretDown />,
        // subnav: [
        //     {
        //         title: "Users",
        //         path: '/overview/users',
        //         icon: <AiOutlineUser />
        //     },
        //     {
        //         title: "Revenue",
        //         path: '/overview/revenue',
        //         icon: <AiOutlineMoneyCollect />
        //     }
        // ]

    },
    {
        title: 'Reports',
        path: '/history',
        icon: <AiOutlineHistory />,
        // iconClosed: <AiFillCaretDown />,
        
        // subnav: [
        //     {
        //         title: "Users",
        //         path: '/overview/users',
        //         icon: <AiOutlineUser />
        //     },
        //     {
        //         title: "Revenue",
        //         path: '/overview/revenue',
        //         icon: <AiOutlineMoneyCollect />
        //     }
        // ]

    },
    {
        title: 'Examination history',
        path: '*',
        // iconClosed: <AiFillCaretDown />,

        icon: <FaCog />,
        // subnav: [
        //     {
        //         title: "Users",
        //         path: '/overview/users',
        //         icon: <AiOutlineUser />
        //     },
        //     {
        //         title: "Revenue",
        //         path: '/overview/revenue',
        //         icon: <AiOutlineMoneyCollect />
        //     }
        // ]

    },
    {
        title: 'Exit',
        path: '/',
        // iconClosed: <AiFillCaretDown />,

        icon: <FaCog />,
        // subnav: [
        //     {
        //         title: "Users",
        //         path: '/overview/users',
        //         icon: <AiOutlineUser />
        //     },
        //     {
        //         title: "Revenue",
        //         path: '/overview/revenue',
        //         icon: <AiOutlineMoneyCollect />
        //     }
        // ]

    },
    {
        title: 'Account',
        path: '/viewProfile',
        // iconClosed: <AiFillCaretDown />,

        icon: <FaCog />,
        // subnav: [
        //     {
        //         title: "Users",
        //         path: '/overview/users',
        //         icon: <AiOutlineUser />
        //     },
        //     {
        //         title: "Revenue",
        //         path: '/overview/revenue',
        //         icon: <AiOutlineMoneyCollect />
        //     }
        // ]

    },
    {
        title: 'Exams',
        path: '/allUsers',
        // iconClosed: <AiFillCaretDown />,

        icon: <FaCog />,
        // subnav: [
        //     {
        //         title: "Users",
        //         path: '/overview/users',
        //         icon: <AiOutlineUser />
        //     },
        //     {
        //         title: "Revenue",
        //         path: '/overview/revenue',
        //         icon: <AiOutlineMoneyCollect />
        //     }
        // ]

    }
]