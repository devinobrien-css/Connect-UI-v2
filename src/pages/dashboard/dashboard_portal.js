import React, { useState } from 'react';
import { selector, useRecoilState } from 'recoil';
import { dashboardPostState,dashboardState } from '../../atoms';
import { HomeIcon, PopularIcon, MentionsIcon, GroupsIcon, LikeIcon, CommentIcon } from './dashboard_icons.js';

import { Get } from '../../access/access'

const PortalNav = () => {
  const [portalState,setPortalState] = useRecoilState(dashboardState)

  const styles = {
    'buttonStyles':"flex py-2 pr-4 pl-1 group dark:hover:bg-gray-700 hover:bg-gray-300 rounded min-w-fill cursor-pointer",
    'textStyles':'text-xl my-auto ml-2 text-gray-400 cursor-pointer whitespace-nowrap',
    'threadStyles':'text-xl my-auto font-sans text-gray-400 cursor-pointer hover:text-gray-500 hover:underline whitespace-nowrap'
  }

  function isSelectedView(view){
    console.log(portalState)
    return (portalState === view ? ' dark:bg-gray-500 bg-gray-200' : '')
  }

  return (
    <div className="">
      <div className="h-min max-h-min dark:bg-gray-600 rounded-lg dark:border-transparent  mr-4">
        <div className="py-2 pl-2 mr-4">
          <div className={styles['buttonStyles'] + isSelectedView('home')} onClick={() => {
            setPortalState('home')
          }}>
            {HomeIcon}
            <p className={styles['textStyles']}>Home</p>
          </div>
          <div className={styles['buttonStyles'] + isSelectedView('groups')} onClick={() => {
            setPortalState('groups')
          }}>
            {GroupsIcon}
            <p className={styles['textStyles']}>Groups</p>
          </div>
          <div className={styles['buttonStyles'] + isSelectedView('popular')} onClick={() => {
            setPortalState('popular')
          }}>
            {PopularIcon}
            <p className={styles['textStyles']}>Popular</p>
          </div>
          <div className={styles['buttonStyles'] + isSelectedView('mentions')} onClick={() => {
            setPortalState('mentions')
          }}>
            {MentionsIcon}
            <p className={styles['textStyles']}>Mentions</p>
          </div>
        </div>
        <hr className="dark:border-gray-700 border-2 dark:bg-gray-700" />
        <div className="py-2 p-4 mr-4">
          {/* recieve this info from a fetch to this users connected projects */}
          <p className={styles['threadStyles']}>u/thread 1</p>
          <p className={styles['threadStyles']}>u/thread 2</p>
          <p className={styles['threadStyles']}>u/thread 3</p>
          <p className={styles['threadStyles']}>u/thread 4</p>
          <p className={styles['threadStyles']}>u/thread 5</p>
          <p className={styles['threadStyles']}>u/thread 6</p>
        </div>
      </div>
    </div>
  );
};

function GetPosts(type) {
  const recent_posts = [
    {
      title: 'Recent Post',
      contributor: {
        name: 'Random User',
        img: 'https://via.placeholder.com/60',
      },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt rem dicta consequatur cupiditate pariatur quos voluptatem, saepe eum iure commodi dolorum eius porro laudantium ipsa! Odio, nisi provident sequi pariatur tempore voluptas deleniti nobis neque. ',
      date: 'Aug 29 at 8:33 AM',
    },
    {
      title: 'One more Recent',
      contributor: {
        name: 'This User',
        img: 'https://via.placeholder.com/60',
      },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt rem dicta consequatur cupiditate pariatur quos voluptatem, saepe eum iure commodi dolorum eius porro laudantium ipsa! Odio, nisi provident sequi pariatur tempore voluptas deleniti nobis neque. ',
      date: 'Sep. 3 at 10:45 AM',
    },
  ];

  const popular_posts = [
    {
      title: 'Title of Post',
      contributor: {
        name: 'Random User',
        img: 'https://via.placeholder.com/60',
      },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt rem dicta consequatur cupiditate pariatur quos voluptatem, saepe eum iure commodi dolorum eius porro laudantium ipsa! Odio, nisi provident sequi pariatur tempore voluptas deleniti nobis neque. ',
      date: 'Aug 31 at 10:33 AM',
    },
    {
      title: 'Title of Post',
      contributor: {
        name: 'Random User',
        img: 'https://via.placeholder.com/60',
      },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt rem dicta consequatur cupiditate pariatur quos voluptatem, saepe eum iure commodi dolorum eius porro laudantium ipsa! Odio, nisi provident sequi pariatur tempore voluptas deleniti nobis neque. ',
      date: 'Aug 31 at 10:33 AM',
    },
    {
      title: 'One more Post',
      contributor: {
        name: 'Random User',
        img: 'https://via.placeholder.com/60',
      },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt rem dicta consequatur cupiditate pariatur quos voluptatem, saepe eum iure commodi dolorum eius porro laudantium ipsa! Odio, nisi provident sequi pariatur tempore voluptas deleniti nobis neque. ',
      date: 'Sep. 2 at 8:33 AM',
    },
    {
      title: 'Just another post',
      contributor: {
        name: 'This Guy',
        img: 'https://via.placeholder.com/60',
      },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt rem dicta consequatur cupiditate pariatur quos voluptatem, saepe eum iure commodi dolorum eius porro laudantium ipsa! Odio, nisi provident sequi pariatur tempore voluptas deleniti nobis neque. ',
      date: 'Jul. 29 at 4:21 PM',
    },
  ];

  const favorite_posts = [
    {
      title: 'Favorite Post',
      contributor: {
        name: 'Random User',
        img: 'https://via.placeholder.com/60',
      },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt rem dicta consequatur cupiditate pariatur quos voluptatem, saepe eum iure commodi dolorum eius porro laudantium ipsa! Odio, nisi provident sequi pariatur tempore voluptas deleniti nobis neque. ',
      date: 'Aug 31 at 10:33 AM',
    },
  ];

  if (type === 'popular') {
    return popular_posts;
  } else if (type === 'recents') {
    return recent_posts;
  } else {
    return favorite_posts;
  }
}

const PortalPostDirectory = () => {
  const [postType, setPostType] = useRecoilState(dashboardPostState);

  function isCurrentType(button) {
    return postType === button ? ' border-b-4 border-gray-800 dark:border-gray-400 ' : '';
  }

  return (
    <div className="flex-1 mx-4 overflow-auto">
      <div className="shadow bg-gray-200 rounded-lg dark:bg-gray-500 flex sticky top-0 z-50 overflow-hidden">
        <p
          onClick={() => {
            setPostType('recents');
          }}
          className={
            'p-2 cursor-pointer w-1/3 text-center mx-auto dark:text-gray-300 dark:hover:bg-gray-600 hover:bg-gray-300' +
            isCurrentType('recents')
          }
        >
          Recent
        </p>
        <p
          onClick={() => {
            setPostType('popular');
          }}
          className={
            'p-2 cursor-pointer w-1/3 text-center mx-auto dark:text-gray-300 dark:hover:bg-gray-600 hover:bg-gray-300' +
            isCurrentType('popular')
          }
        >
          Popular
        </p>
        <p
          onClick={() => {
            setPostType('favorites');
          }}
          className={
            'p-2 cursor-pointer w-1/3 text-center mx-auto dark:text-gray-300 dark:hover:bg-gray-600 hover:bg-gray-300' +
            isCurrentType('favorites')
          }
        >
          Favorites
        </p>
      </div>

      {GetPosts(postType).map((post, index) => {
        return (
          <div
            key={index}
            className="dark:shadow-lg bg-gray-200 rounded-lg p-2 my-4 dark:bg-gray-500"
          >
            <div className="flex">
              <div className="shrink-0">
                <img src={post.contributor.img} className="rounded-full" />
              </div>
              <div className="px-3">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {post.contributor.name}
                </p>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  {post.date}
                </p>
              </div>
            </div>
            <div className="p-2">
              <p className="font-bold dark:text-gray-300">{post.title}</p>
              <p className="py-2 dark:text-gray-300">{post.content}</p>
            </div>
            <div className="flex">
              <div className="mr-8 flex">
                {CommentIcon}
                <p className="dark:text-gray-300 pl-1 m-auto">3</p>
              </div>
              <div className="flex">
                {LikeIcon}
                <p className="dark:text-gray-300 pl-1 m-auto">24</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};



const UsersAd = () => {
  return (
    <div className="mx-4 bg-gray-100 dark:bg-gray-400 p-2 rounded-lg ">
      <p className="text-lg">Join a Group</p>
      {
        Get('groups').map((group, index) => {
          return (
            <div key={index} className="py-1 shadow-sm">
              
              <div className="flex justify-between">
                <div className="flex"> 
                  <img src={group.img}  className="my-auto rounded-full"/>
                  <div className="my-auto ml-2 cursor-pointer">
                    <p className="">{group.name}</p>
                    <p className="text-sm text-gray-700 italic">{group.members.length} {group.members.length === 1 ? 'member' : 'members'}</p>
                  </div>
                </div>
                <p className=" cursor-pointer my-auto rounded-2xl border-2 border-gray-100 bg-gray-100 dark:border-gray-500 dark:bg-gray-500 dark:hover:text-gray-800 hover:text-gray-800 p-1 text-gray-400 dark:text-gray-400">+ join</p>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}


const PortalAds = () => {
  return (
    <div className="flex-none lg:w-2/5 w-0">
      <UsersAd />
    </div>
  );
};

const DashboardPortal = () => {
  return (
    <div className="overflow-scroll">
      <div className="flex flex-row no-wrap max-h-full">
        <PortalNav />
        <div className="grow-0 w-full flex h-fit">
          <PortalPostDirectory /> 
          <PortalAds />
        </div>
      </div>
    </div>
  );
};

export default DashboardPortal;
